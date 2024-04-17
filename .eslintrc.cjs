/* eslint-env node */
module.exports = {
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    root: true,
    ignorePatterns: [
        "dist/**"
    ],
    overrides: [
        {
            files: ["tests/**"],
            plugins: ["jest"],
            extends: ["plugin:jest/recommended", "plugin:jest/style"],
            rules: {
                "jest/no-disabled-tests": "warn",
                "jest/no-focused-tests": "error",
                "jest/no-identical-title": "error",
                "jest/prefer-to-have-length": "warn",
                "jest/valid-expect": "error"
            },
            env: {
                "jest/globals": true
            },
        }
    ]
};
