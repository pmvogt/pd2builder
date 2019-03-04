module.exports = {
    "env": {
        "es6": true,
        "node": true,
        "browser": true,
        "jquery": true
    },
    "globals": {
        "exp": "readonly",
        "tiers": "readonly",
        "tiers2": "readonly",
        "trees": "readonly",
        "sys": "readonly",
        "skills": "readonly",
        "perkDecks": "readonly",
        "previous": "writable",
        "gui": "readonly",
        "io": "readonly"
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 8,
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};