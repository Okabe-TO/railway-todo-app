module.exports = {
	env: {
		// JavaScriptが実行される環境を指定する
		es2021: true
	},
	extends: [
		// ESLintの設定を拡張するために使用
		// Prettier, React, Standardの各設定を拡張
		//'plugin:prettier/recommended',
		'plugin:react/recommended',
		"prettier"
	],
	overrides: [
		// 指定した条件に一致する場合に，設定を上書き
	],
	parserOptions: {
		// ESLintがコードを解析する際に使用するパーサの設定を指定
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: [
		// ESLintにプラグインを追加
		'react'
	],
	"settings": {
		"react": {
			"version": "18.2.0"
		}
	},
	rules: {
		/**
		 * ESLintにルールを指定
		 */
		// セミコロンを禁止
		semi: ["error", "never"],
		// オブジェクトの最後のプロパティの後に，
		// カンマを許可する
		"comma-dangle": "off",

		// シングルクォート，ダブルクォートを許可
		quotes: ["error", "double", { "allowTemplateLiterals": true }],

		// 関数定義の後の引数リストの間にスペースなし
		"space-before-function-paren": ["error", "always"],

		// prop-types
		"react/prop-types": "off",

		// また，設定ファイルでPrettierを使用するため，
		// Prettierのルールが含まれる
	}
};

