import js from '@eslint/js';
import ts from 'typescript-eslint';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';

const ts_config = ts.config({
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
			project: true,
			extraFileExtensions: ['.svelte'],
			programs: false,
		},
	},
});

const svelte_config = ts.config({
	files: ['**/*.svelte'],
	extends: svelte.configs['flat/recommended'],
	languageOptions: {
		parserOptions: {
			parser: ts.parser,
		},
	},
});

export default ts.config(...ts_config, ...svelte_config, {
	ignores: ['node_modules', '.svelte-kit', 'build', 'dist', '.gro', 'dist_*'],
});
