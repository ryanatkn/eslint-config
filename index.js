import js from '@eslint/js';
import ts from 'typescript-eslint';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';

const tsConfig = ts.config({
	files: ['**/*.js', '**/*.ts', '**/*.svelte'],
	extends: [
		js.configs.recommended,
		...ts.configs.strictTypeChecked,
		...ts.configs.stylisticTypeChecked,
	],
	languageOptions: {
		globals: {
			...globals.browser,
			...globals.nodeBuiltin,
		},
		parserOptions: {
			project: './tsconfig.json',
			tsconfigRootDir: import.meta.dirname,
			extraFileExtensions: ['.svelte'],
			programs: false,
		},
	},
});

const svelteConfig = ts.config({
	files: ['**/*.svelte'],
	extends: svelte.configs['flat/recommended'],
	languageOptions: {
		parserOptions: {
			parser: ts.parser,
		},
	},
});

export default ts.config(...tsConfig, ...svelteConfig, {
	ignores: ['.svelte-kit/'],
});
