module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        node: true, // 이거 중요 (이거 없으면 module.exports 에서 module 문자열 오류 뜸)
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential",
        'prettier'
    ],
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        // 여기에 필요에 따라 규칙 추가
        'no-unused-vars': 'warn',
        'vue/no-unused-components': 'warn',
        'no-console': 'off', // 개발 중 console 허용
    }
};
