import js from '@eslint/js';
import ts from 'typescript-eslint';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';

const unmapped_ts_config = ts.config({
	files: ['**/*.js', '**/*.ts', '**/*.svelte'],
	extends: [
		js.configs.recommended,
		...ts.configs.strictTypeChecked,
		...ts.configs.stylisticTypeChecked,
		{
			name: '@ryanatkn/eslint-config#ts',
			rules: {
				'array-callback-return': 1,
				'no-await-in-loop': 1,
				'no-constructor-return': 1,
				'no-duplicate-imports': 1,
				'no-inner-declarations': 1,
				'no-self-compare': 1,
				'no-unmodified-loop-condition': 1,
				'no-unreachable-loop': 1,
				'consistent-this': 1,
				'default-case-last': 1,
				eqeqeq: [1, 'always', {null: 'ignore'}],
				'grouped-accessor-pairs': [1, 'getBeforeSet'],
				'no-alert': 1, // <3 these but often they're for testing; make explicit w/ eslint-ignore-line
				'no-eval': 1,
				'no-extend-native': 1,
				'no-lone-blocks': 1,
				'no-multi-str': 1,
				'no-new': 1,
				'no-new-func': 1, // catches cases missed by @typescript-eslint/no-implied-eval
				'no-new-object': 1,
				'no-new-wrappers': 1,
				'no-octal-escape': 1,
				'no-param-reassign': 1, // seems better to disallow and ignore when needed; might be annoying
				'no-proto': 1,
				'no-restricted-globals': [1, 'name', 'escape'],
				'no-script-url': 1,
				'no-unneeded-ternary': [1, {defaultAssignment: false}],
				'no-useless-call': 1,
				'no-useless-computed-key': [1, {enforceForClassMembers: true}],
				'no-useless-concat': 1,
				'no-useless-rename': 1,
				'prefer-const': [1, {destructuring: 'all'}],
				'no-var': 0, // hot paths may want to use var and overriding eslint is cumbersome
				'no-warning-comments': [1, {terms: ['todo block']}],
				'object-shorthand': 1,
				'operator-assignment': 1,
				'prefer-arrow-callback': 1,
				'prefer-destructuring': [1, {AssignmentExpression: {array: false}}],
				'prefer-exponentiation-operator': 1,
				'prefer-numeric-literals': 1,
				'prefer-object-has-own': 1,
				'prefer-object-spread': 1,
				'prefer-promise-reject-errors': [1, {allowEmptyReject: true}],
				'prefer-regex-literals': [1, {disallowRedundantWrapping: true}],
				radix: 1,
				'require-unicode-regexp': 1,
				'@typescript-eslint/array-type': [1, {default: 'array-simple', readonly: 'array-simple'}],
				'@typescript-eslint/consistent-type-exports': [
					1,
					{fixMixedExportsWithInlineTypeSpecifier: true},
				],
				'@typescript-eslint/explicit-module-boundary-types': [
					1,
					{allowArgumentsExplicitlyTypedAsAny: true},
				],
				'@typescript-eslint/method-signature-style': 1,
				'@typescript-eslint/no-empty-function': [
					1,
					{allow: ['overrideMethods', 'decoratedFunctions']},
				],
				'@typescript-eslint/no-explicit-any': 0,
				'@typescript-eslint/no-invalid-this': [1, {capIsConstructor: false}],
				'@typescript-eslint/no-misused-promises': [1, {checksVoidReturn: false}],
				'@typescript-eslint/no-unsafe-assignment': 0, // false positives with `$props()`, revisit
				'@typescript-eslint/no-unsafe-member-access': 0,
				'@typescript-eslint/no-unused-expressions': 0, // false positives with signals
				'@typescript-eslint/prefer-string-starts-ends-with': [
					1,
					{allowSingleElementEquality: 'always'},
				],
				'@typescript-eslint/require-array-sort-compare': [1, {ignoreStringArrays: true}],
				'@typescript-eslint/restrict-template-expressions': 0, // false positives with many types that stringify
				'@typescript-eslint/return-await': 1,
				'@typescript-eslint/switch-exhaustiveness-check': 1,
				'@typescript-eslint/triple-slash-reference': [
					1,
					{path: 'never', types: 'never', lib: 'never'},
				],
			},
		},
	],
	languageOptions: {
		globals: {
			...globals.browser,
			...globals.nodeBuiltin,
		},
		parserOptions: {
			projectService: true,
			extraFileExtensions: ['.svelte'],
			programs: false,
		},
	},
});

const unmapped_svelte_config = ts.config({
	files: ['**/*.svelte'],
	extends: [
		...svelte.configs['flat/recommended'],
		{
			name: '@ryanatkn/eslint-config#svelte',
			rules: {
				'svelte/block-lang': [
					1,
					{
						enforceScriptPresent: false,
						enforceStylePresent: false,
						script: ['ts'], // a list of languages or null to signify no language specified
					},
				],
				'svelte/no-immutable-reactive-statements': 1,
				'svelte/no-reactive-functions': 1,
				'svelte/no-reactive-literals': 1,
				'svelte/require-event-dispatcher-types': 1,
				'svelte/valid-each-key': 1,
				'svelte/prefer-class-directive': 1,
			},
		},
	],
	languageOptions: {
		parserOptions: {
			parser: ts.parser,
		},
	},
});

/** @type {import('eslint').Linter.FlatConfig[]} */
const unmapped_configs = [
	...unmapped_ts_config,
	...unmapped_svelte_config,
	{
		ignores: ['node_modules', '.svelte-kit', 'build', 'dist', '.gro', 'dist_*'],
	},
];

const map_errors_to_warn = (configs) =>
	configs.map((config) => {
		if (!config.rules) return config;
		const c = {...config, rules: {...config.rules}};
		for (const [rule, value] of Object.entries(c.rules)) {
			if (value === 'error' || value === 2) {
				c.rules[rule] = 'warn';
			}
			if (Array.isArray(value) && (value[0] === 'error' || value[0] === 2)) {
				c.rules[rule][0] = 'warn';
			}
		}
		return c;
	});

const final_configs = map_errors_to_warn(unmapped_configs);

/** @type {import('typescript-eslint').ConfigWithExtends[]} */
export const configs = ts.config(...final_configs);

/** @type {import('typescript-eslint').ConfigWithExtends} */
export const ts_config = configs.find((c) => c.name === unmapped_ts_config.name);

/** @type {import('typescript-eslint').ConfigWithExtends} */
export const svelte_config = configs.find((c) => c.name === unmapped_svelte_config.name);

// /**
//  * Returns `true` if the given ESLint config value is an error or warning.
//  */
// const is_problem = (v) => {
// 	if (v === 'off') return false;
// 	if (v === 'error') return true;
// 	if (v === 'warn') return true;
// 	if (typeof v === 'number') return v !== 0;
// 	if (Array.isArray(v)) return is_problem(v[0]);
// 	throw new Error(`Unknown value ${v}`);
// };

// /**
//  * Finds config rules that are added above but duplicate the base config.
//  * That means they can be deleted above,
//  * but ONLY if the values fully match the defaults. (TODO could just deepequal compare but it's fine)
//  * @param {import('eslint').Linter.FlatConfig[]} configs
//  */
// const lint_configs = (configs) => {
// 	const rule_maps = configs
// 		.map((c) => {
// 			const map = c.rules ? {name: c.name, rules: new Map(Object.entries(c.rules))} : null;
// 			return map;
// 		})
// 		.filter((m) => !!m);

// 	const all_rules = new Map();
// 	const conflicts = [];
// 	for (const {name, rules} of rule_maps) {
// 		for (const [rule, value] of rules) {
// 			const existing = all_rules.get(rule);
// 			if (existing === undefined) {
// 				all_rules.set(rule, {name, rule, value});
// 				continue;
// 			}
// 			// There's already a rule with this name, do they conflict?
// 			// If not it's fine, if so it's unnecessary.
// 			if (is_problem(existing.value) === is_problem(value)) {
// 				if (name.startsWith('@ryanatkn/eslint-config')) {
// 					conflicts.push({rule, existing, name, value});
// 				}
// 				continue;
// 			}
// 			all_rules.set(rule, {name, rule, value}); // override the existing
// 		}
// 	}
// 	console.log(
// 		`conflicts`,
// 		conflicts.map((c) => c.rule),
// 	);
// };
// lint_configs(final_configs);
