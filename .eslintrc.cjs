module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "plugins": [
        "react",
        "prettier"
    ],
    "rules": {
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error"
    }
}
