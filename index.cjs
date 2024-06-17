module.exports = {
	extends: ['plugin:svelte/base'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: true,
		extraFileExtensions: ['.svelte'],
	},
	plugins: ['@typescript-eslint'],
	reportUnusedDisableDirectives: true,
	env: {
		browser: true,
		node: true,
		es2021: true,
	},
	rules: {
		// eslint possible problems
		'array-callback-return': 1,
		'for-direction': 1,
		'no-async-promise-executor': 1,
		'no-await-in-loop': 1,
		'no-compare-neg-zero': 1,
		'no-constant-condition': [1, {checkLoops: false}],
		'no-constructor-return': 1,
		'no-control-regex': 1,
		'no-debugger': 1,
		'no-dupe-else-if': 1,
		'no-duplicate-case': 1,
		'no-empty-character-class': 1,
		'no-empty-pattern': 1,
		'no-ex-assign': 1,
		'no-inner-declarations': 1,
		'no-invalid-regexp': 1,
		'no-irregular-whitespace': 1,
		'no-misleading-character-class': 1,
		'no-prototype-builtins': 1,
		'no-self-compare': 1,
		'no-sparse-arrays': 1,
		'no-unmodified-loop-condition': 1,
		'no-unreachable-loop': 1,
		'no-unsafe-finally': 1,
		'no-unsafe-optional-chaining': 1,
		'no-useless-backreference': 1,
		// 'require-atomic-updates': 1, // sometimes very helpful but so many false positives: https://github.com/eslint/eslint/issues/11899
		'use-isnan': 1,
		// eslint suggestions
		'consistent-this': 1,
		'default-case-last': 1,
		eqeqeq: [1, 'always', {null: 'ignore'}],
		'grouped-accessor-pairs': [1, 'getBeforeSet'],
		'no-alert': 1, // <3 these but often they're for testing; make explicit w/ eslint-ignore-line
		'no-case-declarations': 1,
		'no-constant-binary-expression': 1,
		// 'no-else-return': 1, // a bit too opinionated
		'no-empty': [1, {allowEmptyCatch: true}],
		'no-eval': 1,
		'no-extend-native': 1,
		'no-extra-boolean-cast': 1,
		'no-global-assign': 1,
		'no-lone-blocks': 1,
		'no-multi-str': 1,
		'no-new': 1,
		'no-new-func': 1, // catches cases missed by @typescript-eslint/no-implied-eval
		'no-new-object': 1,
		'no-new-wrappers': 1,
		'no-nonoctal-decimal-escape': 1,
		'no-octal': 1,
		'no-octal-escape': 1,
		'no-param-reassign': 1, // seems better to disallow and ignore when needed; might be annoying
		'no-proto': 1,
		'no-regex-spaces': 1,
		'no-restricted-globals': [1, 'name', 'escape'],
		'no-script-url': 1,
		'no-shadow-restricted-names': 1,
		'no-unneeded-ternary': [1, {defaultAssignment: false}],
		'no-useless-call': 1,
		'no-useless-catch': 1,
		'no-useless-computed-key': [1, {enforceForClassMembers: true}],
		'no-useless-concat': 1,
		'no-useless-escape': 1,
		'no-useless-rename': 1,
		'no-var': 0, // hot paths may want to use var and overriding eslint is cumbersome
		'no-warning-comments': [1, {terms: ['todo block']}],
		'object-shorthand': 1,
		'operator-assignment': 1,
		'prefer-arrow-callback': 1,
		'prefer-const': 1,
		'prefer-destructuring': [1, {AssignmentExpression: {array: false}}],
		'prefer-exponentiation-operator': 1,
		'prefer-numeric-literals': 1,
		'prefer-object-has-own': 1,
		'prefer-object-spread': 1,
		'prefer-promise-reject-errors': [1, {allowEmptyReject: true}],
		'prefer-regex-literals': [1, {disallowRedundantWrapping: true}],
		'prefer-rest-params': 1,
		'prefer-spread': 1,
		radix: 1,
		'require-unicode-regexp': 1,
		'require-yield': 1,
	},
	overrides: [
		{
			files: ['*.ts', '*.svelte'],
			rules: {
				'@typescript-eslint/adjacent-overload-signatures': 1,
				'@typescript-eslint/array-type': [1, {default: 'array-simple', readonly: 'array-simple'}],
				'@typescript-eslint/await-thenable': 1,
				'@typescript-eslint/ban-types': 1,
				'@typescript-eslint/consistent-type-assertions': 1,
				'@typescript-eslint/consistent-type-exports': [
					1,
					{fixMixedExportsWithInlineTypeSpecifier: true},
				],
				'@typescript-eslint/dot-notation': 1,
				'@typescript-eslint/explicit-module-boundary-types': [
					1,
					{allowArgumentsExplicitlyTypedAsAny: true},
				],
				'@typescript-eslint/method-signature-style': 1,
				'@typescript-eslint/no-array-constructor': 1,
				'@typescript-eslint/no-base-to-string': 1,
				'@typescript-eslint/no-empty-function': [1, {allow: ['overrideMethods']}],
				'@typescript-eslint/no-empty-interface': 1,
				'@typescript-eslint/no-extra-non-null-assertion': 1,
				'@typescript-eslint/no-duplicate-enum-values': 1,
				'@typescript-eslint/no-floating-promises': [1, {ignoreIIFE: true}],
				'@typescript-eslint/no-for-in-array': 1,
				'@typescript-eslint/no-implied-eval': 1,
				'@typescript-eslint/no-invalid-this': [1, {capIsConstructor: false}],
				// '@typescript-eslint/no-invalid-void-type': [1, {allowAsThisParameter: true}], // helpful but too many false positives
				'@typescript-eslint/no-loss-of-precision': 1,
				'@typescript-eslint/no-meaningless-void-operator': 1,
				'@typescript-eslint/no-misused-new': 1,
				'@typescript-eslint/no-misused-promises': [1, {checksVoidReturn: false}],
				'@typescript-eslint/no-namespace': 1,
				'@typescript-eslint/no-non-null-asserted-nullish-coalescing': 1,
				'@typescript-eslint/no-non-null-asserted-optional-chain': 1,
				'@typescript-eslint/no-require-imports': 1,
				'@typescript-eslint/no-this-alias': 1,
				'@typescript-eslint/no-throw-literal': 1,
				'@typescript-eslint/no-unnecessary-boolean-literal-compare': 1,
				'@typescript-eslint/no-unnecessary-type-assertion': 1,
				'@typescript-eslint/no-unnecessary-type-constraint': 1,
				'@typescript-eslint/no-unused-expressions': [
					1,
					{allowShortCircuit: true, allowTernary: true, allowTaggedTemplates: true},
				],
				'@typescript-eslint/no-useless-constructor': 1,
				'@typescript-eslint/non-nullable-type-assertion-style': 1,
				'@typescript-eslint/prefer-as-const': 1,
				'@typescript-eslint/prefer-includes': 1,
				'@typescript-eslint/prefer-namespace-keyword': 1,
				'@typescript-eslint/prefer-optional-chain': 1,
				'@typescript-eslint/prefer-regexp-exec': 1,
				'@typescript-eslint/prefer-ts-expect-error': 1,
				'@typescript-eslint/no-redundant-type-constituents': 1,
				'@typescript-eslint/require-array-sort-compare': [1, {ignoreStringArrays: true}],
				'@typescript-eslint/return-await': 1,
				'@typescript-eslint/switch-exhaustiveness-check': 1,
				'@typescript-eslint/triple-slash-reference': [
					1,
					{path: 'never', types: 'never', lib: 'never'},
				],
			},
		},
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
			},
			rules: {
				// svelte overrides for @typescript-eslint
				'@typescript-eslint/no-unused-expressions': 0,
				// Possible Errors
				'svelte/infinite-reactive-loop': 0, // Svelte runtime prevents calling the same reactive statement twice in a microtask. But between different microtask, it doesn’t prevent
				'svelte/no-dom-manipulating': 0, // disallow DOM manipulating
				'svelte/no-dupe-else-if-blocks': 1, // disallow duplicate conditions in {#if} / {:else if} chains 	⭐
				'svelte/no-dupe-on-directives': 0, // disallow duplicate on: directives
				'svelte/no-dupe-style-properties': 1, // disallow duplicate style properties 	⭐
				'svelte/no-dupe-use-directives': 0, // disallow duplicate use: directives
				'svelte/no-dynamic-slot-name': 1, // disallow dynamic slot name 	⭐🔧
				'svelte/no-export-load-in-svelte-module-in-kit-pages': 0, // disallow exporting load functions in *.svelte module in SvelteKit page components
				'svelte/no-not-function-handler': 1, // disallow use of not function in event handler 	⭐
				'svelte/no-object-in-text-mustaches': 1, // disallow objects in text mustache interpolation 	⭐
				'svelte/no-reactive-reassign': 0, // disallow reassigning reactive values
				'svelte/no-shorthand-style-property-overrides': 1, // disallow shorthand style properties that override related longhand properties 	⭐
				'svelte/no-store-async': 0, // disallow using async/await inside svelte stores because it causes issues with the auto-unsubscribing features
				'svelte/no-unknown-style-directive-property': 1, // disallow unknown style:property 	⭐
				'svelte/require-store-callbacks-use-set-param': 0, // store callbacks must use set param
				'svelte/require-store-reactive-access': 0, // disallow to use of the store itself as an operand. Need to use $ prefix or get function. 	🔧
				'svelte/valid-compile': 1, // disallow warnings when compiling. 	⭐
				'svelte/valid-prop-names-in-kit-pages': 0, // disallow props other than data or errors in SvelteKit page components
				// Security Vulnerability
				'svelte/no-at-html-tags': 1, // disallow use of {@html} to prevent XSS attack	⭐
				'svelte/no-target-blank': 0, // TODO probably want to enable, but as "noreferrer" only because it's equivalent -- disallow target="_blank" attribute without rel="noopener noreferrer"
				// Best Practices
				'svelte/block-lang': [
					1,
					{
						enforceScriptPresent: false,
						enforceStylePresent: false,
						script: ['ts'], // a list of languages or null to signify no language specified
						// style: 'scss', // same as for script, a single value can be used instead of an array.
					},
				], // disallows the use of languages other than those specified in the configuration for the lang attribute of <script> and <style> blocks
				'svelte/button-has-type': 0, // disallow usage of button without an explicit type attribute
				'svelte/no-at-debug-tags': 1, // disallow the use of {@debug} 	⭐
				'svelte/no-immutable-reactive-statements': 1, // disallow reactive statements that don’t reference reactive values
				'svelte/no-reactive-functions': 1, // it’s not necessary to define functions in reactive statements 	💡
				'svelte/no-reactive-literals': 1, // don’t assign literal values in reactive statements 	💡
				'svelte/no-unused-class-name': 0, // disallow the use of a class in the template without a corresponding style
				'svelte/no-unused-svelte-ignore': 1, // disallow unused svelte-ignore comments 	⭐
				'svelte/no-useless-mustaches': 0, // disallow unnecessary mustache interpolations 	🔧
				'svelte/prefer-destructured-store-props': 0, // destructure values from object stores for better change tracking & fewer redraws 	💡
				'svelte/require-each-key': 0, // require keyed {#each} block
				'svelte/require-event-dispatcher-types': 1, // require type parameters for createEventDispatcher
				'svelte/require-optimized-style-attribute': 0, // require style attributes that can be optimized
				'svelte/require-stores-init': 0, // require initial value in store
				'svelte/valid-each-key': 1, // enforce keys to use variables defined in the {#each} block
				// Stylistic Issues - these are mostly disabled because they're handled by Prettier
				'svelte/derived-has-same-inputs-outputs': 0, // derived store should use same variable names between values and callback
				'svelte/first-attribute-linebreak': 0, // enforce the location of first attribute 	🔧
				'svelte/html-closing-bracket-spacing': 0, // require or disallow a space before tag’s closing brackets 	🔧
				'svelte/html-quotes': 0, // enforce quotes style of HTML attributes 	🔧
				'svelte/html-self-closing': 0, // enforce self-closing style 	🔧
				'svelte/indent': 0, // enforce consistent indentation 	🔧
				'svelte/max-attributes-per-line': 0, // enforce the maximum number of attributes per line 	🔧
				'svelte/mustache-spacing': 0, // enforce unified spacing in mustache 	🔧
				'svelte/no-extra-reactive-curlies': 0, // disallow wrapping single reactive statements in curly braces 	💡
				'svelte/no-restricted-html-elements': 0, // disallow specific HTML elements
				'svelte/no-spaces-around-equal-signs-in-attribute': 0, // disallow spaces around equal signs in attribute 	🔧
				'svelte/prefer-class-directive': 1, // require class directives instead of ternary expressions 	🔧
				'svelte/prefer-style-directive': 0, // require style directives instead of style attribute 	🔧
				'svelte/shorthand-attribute': 0, // enforce use of shorthand syntax in attribute 	🔧
				'svelte/shorthand-directive': 0, // enforce use of shorthand syntax in directives 	🔧
				'svelte/sort-attributes': 0, // enforce order of attributes 	🔧
				'svelte/spaced-html-comment': 0, // enforce consistent spacing after the <!-- and before the --> in a HTML comment 	🔧
				// Extension Rules
				'svelte/no-inner-declarations': 1, // disallow variable or function declarations in nested blocks	⭐
				'svelte/no-trailing-spaces': 0, // disallow trailing whitespace at the end of lines	🔧
				// Experimental
				'svelte/experimental-require-slot-types': 0, // require slot type declaration using the $$Slots interface
				'svelte/experimental-require-strict-events': 0, // require the strictEvents attribute on <script> tags
			},
		},
	],
};
