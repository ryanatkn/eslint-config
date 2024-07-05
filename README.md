# @ryanatkn/eslint-config

> an [ESLint](https://eslint.org/) config for TypeScript, Svelte, and Prettier

```bash
npm i -D @ryanatkn/eslint-config
```

This ESLint config is designed to complement TypeScript and Prettier,
so all redundant rules are disabled.
It doesn't use the Prettier ESLint plugin - you can add it yourself,
I prefer running Prettier separately.

To distinguish linting problems from type errors while editing,
all of the rules are set to warn, not error,
and users are expected run `eslint --max-warnings 0`
to treat them as errors when desired, like in CI. (my preference)
This works well to get yellow squigglies in text editors for linting problems
while reserving red for type errors.

> Instead of the values `'off'`, `'warn'`, and `'error'`,
> this config uses `0` (off) and `1` (warn).
> Because it doesn't use errors, this feels clearer.

Have any questions or change requests?
Open issues or drop by [my Discord](https://discord.gg/YU5tyeK72X).

## Usage

Install ESLint dev dependencies with
[TypeScript](https://github.com/typescript-eslint/typescript-eslint)
and [Svelte](https://github.com/sveltejs/eslint-plugin-svelte) plugins
via npm (here's [the package on npm](https://www.npmjs.com/package/@ryanatkn/eslint-config)):

```bash
npm i -D eslint \
	typescript-eslint \
	eslint-plugin-svelte \
	@ryanatkn/eslint-config
```

Then add your
[ESLint config file](https://eslint.org/docs/latest/use/configure/configuration-files):

```js
// eslint.config.js
import {configs} from '@ryanatkn/eslint-config';

export default configs;
```

To override rules, you can map or modify `configs`
or mutate the exported `ts_config` and `svelte_config`:

```js
// eslint.config.js
import {configs, ts_config, svelte_config} from '@ryanatkn/eslint-config';

ts_config.rules['no-console'] = 1;

svelte_config.rules['svelte/no-inner-declarations'] = 0,

export default configs;

```

### VSCode setup

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

## Features

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

## Develop

See [index.cjs](index.cjs) and the [ESLint docs](https://eslint.org/).

Rules are current through `eslint@8.20.0` and `@typescript-eslint/eslint-plugin@5.30.7`.

## Publish

This repo uses [changesets](https://github.com/changesets/changesets):

```bash
changeset # add a changeset
changeset version # when ready to publish
changeset publish
git add .
git commit -am vX.Y.Z
git push
git push --tags
```

See the official docs for [`npm version`](https://docs.npmjs.com/cli/v8/commands/npm-version)
and [`npm publish`](https://docs.npmjs.com/cli/v8/commands/npm-publish).

## Credits 🐢<sub>🐢</sub><sub><sub>🐢</sub></sub>

[ESLint](https://github.com/eslint/eslint) ∙
[typescript-eslint](https://github.com/typescript-eslint/typescript-eslint) ∙
[eslint-plugin-svelte](https://github.com/sveltejs/eslint-plugin-svelte) ∙
[TypeScript](https://github.com/microsoft/TypeScript) ∙
[Svelte](https://github.com/sveltejs/svelte) ∙
[Prettier](https://github.com/prettier/prettier)
& [more](package.json)

## License [🐦](https://wikipedia.org/wiki/Free_and_open-source_software)

public domain ⚘ [The Unlicense](license)
