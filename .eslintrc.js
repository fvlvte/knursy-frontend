module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint/eslint-plugin'],
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended'
    ],
    root: true,
    env: {
        node: true,
    },
    ignorePatterns: ['.eslintrc.js', 'node_modules/', 'public/', ".husky/"],
    rules: {
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/member-ordering': [
            'error',
            {
                default: [
                    'public-field',
                    'protected-field',
                    'abstract-field',
                    'private-field',
                    'constructor',
                    'public-method',
                    'protected-method',
                    'abstract-method',
                    'private-method',
                ],
            },
        ],
        '@typescript-eslint/explicit-function-return-type': [
            'error',
            {
                allowExpressions: true,
            },
        ],
    },
};
