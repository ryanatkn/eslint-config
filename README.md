# @ryanatkn/eslint-config

> an [ESLint](https://eslint.org/) config for TypeScript, Svelte, and Prettier

```bash
npm i -D @ryanatkn/eslint-config
```

This ESLint config is designed to complement TypeScript and Prettier,
so all redundant rules are disabled.
It extends no other configs, so wysiwyg in [index.cjs](./index.cjs).

To distinguish linting problems from type errors while editing,
all of the rules are set to warn, not error,
and users are expected run `eslint --max-warnings 0` to treat them as errors when desired.
There may be a better way to do this,
but it works well to get yellow squigglies in text editors for linting problems
while reserving red for type errors.

Got questions or proposed changes? Open issues!

## setup

Install ESLint dev dependencies with
[TypeScript](https://github.com/typescript-eslint/typescript-eslint/)
and [Svelte](https://github.com/sveltejs/eslint-plugin-svelte) plugins:

```bash
npm i -D eslint \
	@typescript-eslint/eslint-plugin @typescript-eslint/parser \
	eslint-plugin-svelte \
	@ryanatkn/eslint-config
```

Then add the following to your project's `package.json` or an
[ESLint config file](https://eslint.org/docs/user-guide/configuring/configuration-files):

```jsonc
{
	// ...package.json stuff
	"eslintConfig": {
		"root": true,
		"extends": "@ryanatkn"
	}
}
```

### vscode setup

To make [the VSCode ESLint plugin](https://github.com/microsoft/vscode-eslint) work with Svelte,
add the following to VSCode's `settings.json`:

```jsonc
{
	// ctrl+shift+P then `> Preferences: Open Settings (JSON)`
	// ...other config
	"eslint.validate": ["svelte", "javascript", "javascriptreact"]
}
```

See also
[the `eslint-plugin-svelte` integrations docs](https://sveltejs.github.io/eslint-plugin-svelte/user-guide/#editor-integrations).

## overrides

Every ESLint config has opinions.
This project is somewhat strict, because it's easier to disable rules
than it is to enable ones that are invisibly disabled,
but we don't want it to be _too_ opinionated.
We're happy to discuss proposed changes in the issues,
and to override any defaults, use
[the `rules` property](https://eslint.org/docs/user-guide/configuring/configuration-files)
in your config:

```jsonc
{
	"eslintConfig": {
		"root": true,
		"extends": "@ryanatkn",
		"rules": {
			"no-param-reassign": 0, // disable an enabled rule
			"no-console": 1 // enable a disabled rule
		}
	}
}
```

## features

One useful opt-in feature is implemented with the following:

```js
'no-warning-comments': [1, {terms: ['todo block']}],
```

This can be used to leave notes to yourself while you develop a set of changes,
and combined with CI, you'll be blocked from merging until they're all resolved:

```ts
// TODO BLOCK
// TODO BLOCK do the thing
// todo block is case insensitive
```

## develop

See [index.cjs](index.cjs) and the [ESLint docs](https://eslint.org/).

Rules are current through `eslint@8.20.0` and `@typescript-eslint/eslint-plugin@5.30.7`.

## publish

This repo uses [changesets](https://github.com/changesets/changesets):

```bash
changeset # add a changeset
changeset version
changeset publish
git add .
git commit -am vX.Y.Z
git push
git push --tags
```

See the official docs for [`npm version`](https://docs.npmjs.com/cli/v8/commands/npm-version)
and [`npm publish`](https://docs.npmjs.com/cli/v8/commands/npm-publish).

## credits 🐢<sub>🐢</sub><sub><sub>🐢</sub></sub>

[ESLint](https://github.com/eslint/eslint) ∙
[@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint) ∙
[eslint-plugin-svelte](https://github.com/sveltejs/eslint-plugin-svelte) ∙
[TypeScript](https://github.com/microsoft/TypeScript) ∙
[Svelte](https://github.com/sveltejs/svelte) ∙
[Prettier](https://github.com/prettier/prettier)
& [more](package.json)

## license [🐦](https://wikipedia.org/wiki/Free_and_open-source_software)

public domain ⚘ [The Unlicense](license)
