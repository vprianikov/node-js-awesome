module.exports = {
    env: {
        es2021: true,
        node: true,
    },
    extends: [
        'airbnb-base',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {},
    overrides: [
        {
            files: [
                '**/*.{test,spec}.js',
            ],
            plugins: [
                'jest',
            ],
            extends: [
                'plugin:jest/all',
            ],
        },
    ],
};
