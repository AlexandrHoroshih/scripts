const spawn = require('cross-spawn')
const path = require('path')

const countFiles = require('../utils/countFiles')
const isReactProject = require('../utils/isReactProject')

module.exports = async ({ projectPath, args }) => {
  const ignoreFile = path.join(projectPath, '.gitignore')

  const filesAvailable = async exts => {
    const count = await countFiles(exts, projectPath, ignoreFile)
    return count > 0
  }

  const isReact = await isReactProject(projectPath)

  const configSuffix = isReact ? '-react' : ''

  const jsRcPath = path.join(__dirname, `../config/eslint-js${configSuffix}.js`)
  const tsRcPath = path.join(__dirname, `../config/eslint-ts${configSuffix}.js`)
  const cssRcPath = path.join(__dirname, `../config/stylelint.js`)

  const [jsFilesExists, tsFilesExists, cssFilesExists] = await Promise.all([
    filesAvailable('js|jsx'),
    filesAvailable('ts|tsx'),
    filesAvailable('css|svelte'),
  ])

  const resultJs = jsFilesExists
    ? spawn.sync(
        'eslint',
        [
          `${projectPath}/**/*.{js,jsx}`,
          '-c',
          jsRcPath,
          '--ignore-path',
          ignoreFile,
          ...args,
        ],
        { stdio: 'inherit' },
      )
    : {}

  const resultTs = tsFilesExists
    ? spawn.sync(
        'eslint',
        [
          `${projectPath}/**/*.{ts,tsx}`,
          '-c',
          tsRcPath,
          '--ignore-path',
          ignoreFile,
          ...args,
        ],
        { stdio: 'inherit' },
      )
    : {}

  const resultCss = cssFilesExists
    ? spawn.sync(
        'stylelint',
        [
          `${projectPath}/**/*.{css,svelte}`,
          '--config',
          cssRcPath,
          '--ignore-path',
          ignoreFile,
          ...args,
        ],
        { stdio: 'inherit' },
      )
    : {}

  if (
    resultJs.error ||
    resultTs.error ||
    resultCss.error ||
    resultJs.status === 1 ||
    resultTs.status === 1 ||
    resultCss.status === 2
  ) {
    return { status: 1 }
  }

  return { status: 0 }
}
