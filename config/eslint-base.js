module.exports = {
  plugins: ['unicorn', 'eslint-plugin-import-helpers'],
  rules: {
    'array-callback-return': ['error'],
    'consistent-return': ['error'],
    'default-case': ['error'],
    'dot-notation': ['error'],
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'max-classes-per-file': ['error', 1],
    'no-caller': ['error'],
    'no-else-return': ['error', { allowElseIf: false }],
    'no-empty-function': 'error',
    'no-empty-pattern': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-global-assign': ['error'],
    'no-implicit-coercion': [
      'error',
      {
        boolean: false,
      },
    ],
    'no-implied-eval': 'error',
    'no-iterator': 'error',
    'no-labels': ['error'],
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': [
      'error',
      {
        ignorePropertyModificationsFor: [
          'ctx', // for Koa routing
          'req', // for Express requests
          'request', // for Express requests
          'res', // for Express responses
          'response', // for Express responses
        ],
      },
    ],
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-restricted-properties': [
      'error',
      {
        object: 'arguments',
        property: 'callee',
        message: 'arguments.callee is deprecated',
      },
      {
        object: 'global',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'self',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'window',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'global',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        object: 'self',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        object: 'window',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        property: '__defineGetter__',
        message: 'Please use Object.defineProperty instead.',
      },
      {
        property: '__defineSetter__',
        message: 'Please use Object.defineProperty instead.',
      },
      {
        object: 'Math',
        property: 'pow',
        message: 'Use the exponentiation operator (**) instead.',
      },
    ],
    'no-return-assign': ['error', 'always'],
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-assign': ['error'],
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unused-expressions': ['error'],
    'no-unused-labels': 'error',
    'no-useless-catch': 'error',
    'no-useless-concat': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    'no-with': 'error',
    'prefer-promise-reject-errors': ['error'],
    radix: 'error',
    yoda: 'error',
    'for-direction': 'error',
    'getter-return': ['error'],
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': ['error', 'always'],
    'no-console': 'warn',
    'no-constant-condition': 'error',
    'no-debugger': 'error',
    'no-dupe-args': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty': 'error',
    'no-ex-assign': 'error',
    'no-func-assign': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-misleading-character-class': 'error',
    'no-obj-calls': 'error',
    'no-prototype-builtins': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'require-atomic-updates': 'error',
    'use-isnan': 'error',
    'valid-typeof': ['error', { requireStringLiterals: true }],
    'constructor-super': 'error',
    'no-class-assign': 'error',
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-new-symbol': 'error',
    'no-this-before-super': 'error',
    'no-useless-computed-key': 'error',
    'no-var': 'error',
    'prefer-arrow-callback': ['error'],
    'prefer-const': ['error'],
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: true,
          object: true,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'prefer-numeric-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'require-yield': 'error',
    'symbol-description': 'error',
    'no-buffer-constructor': 'error',
    'no-path-concat': 'error',
    'no-delete-var': 'error',
    'no-label-var': 'error',
    'no-shadow-restricted-names': 'error',
    'no-undef-init': 'error',
    'no-use-before-define': [
      'error',
      { functions: true, classes: true, variables: true },
    ],
    'unicorn/catch-error-name': 'error',
    'unicorn/error-message': 'error',
    'unicorn/explicit-length-check': 'error',
    'unicorn/new-for-builtins': 'error',
    'unicorn/no-abusive-eslint-disable': 'error',
    'unicorn/no-array-instanceof': 'error',
    'unicorn/no-new-buffer': 'error',
    'unicorn/no-unreadable-array-destructuring': 'error',
    'unicorn/no-zero-fractions': 'error',
    'unicorn/prefer-includes': 'error',
    'unicorn/prefer-node-append': 'error',
    'unicorn/prefer-node-remove': 'error',
    'unicorn/prefer-starts-ends-with': 'error',
    'unicorn/regex-shorthand': 'error',
    'unicorn/throw-new-error': 'error',
    'import-helpers/order-imports': [
      'warn',
      {
        // example configuration
        newlinesBetween: 'always',
        groups: [
          'module',
          '/^app/',
          '/^lib/',
          '/^@shared/',
          '/^$/',
          '/^&/',
          '/^@app/',
          '/^@back/',
          '/^@front/',
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  },
};
