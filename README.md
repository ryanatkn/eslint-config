# @ryanatkn/eslint-config

> an [ESLint](https://eslint.org/) config for TypeScript, Svelte, and Prettier

```bash
npm i -D @ryanatkn/eslint-config # node >=22.11
```

I use this [ESLint](https://github.com/eslint/eslint/)
config for TypeScript and Svelte in all of [my projects](https://github.com/ryanatkn).
It's fairly strict, adding many rules beyond the ESLint recommended config.
It extends the [`typescript-eslint`](https://github.com/typescript-eslint/typescript-eslint)
strict and stylistic typechecked configs,
modifying or removing some rules and adding others. See [index.js](index.js) for details.

It's designed to complement TypeScript and Prettier,
so all redundant rules are omitted.
It doesn't use the Prettier ESLint plugin - you can add it yourself,
I prefer running Prettier with `--check` separately.

To distinguish linting problems from type errors visually in your editor,
all of the rules are set to warn, not error,
and users are expected run `eslint --max-warnings 0`
to treat them as errors when desired, like in CI.
(my preference is to block CI on all linting problems)
This works well to get yellow squigglies in text editors for linting problems
while reserving red for type errors, without losing other error behaviors.

Have any questions or change requests?
Open issues or drop by [my Discord](https://discord.gg/YU5tyeK72X).
I'm happy to discuss my choices - if something feels restrictive without fixing actual mistakes,
it's likely to reduce cognitive load when reading code.

> ⚠️ Some rules may be annoyingly strict and you should override to your preference.
> Some rules require tsconfig options like `strictNullChecks`,
> and more nags go way if you enable `noUncheckedIndexedAccess` and `exactOptionalPropertyTypes`.
> (I personally don't use these yet, will revisit)
> Some annoyances are caused by bugs or limitations in the implementations.
> For example
> [@typescript-eslint/no-unnecessary-condition](https://typescript-eslint.io/rules/no-unnecessary-condition/)
> appears to have both bugs and limits, but it also catches many easy-to-make mistakes.
> If anything is too cumbersome or lax for your taste,
> see below for the simple way to change the global rules,
> and maybe hop on [Discord](https://discord.gg/YU5tyeK72X) to discuss.

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

svelte_config.rules['svelte/button-has-type'] = 0;

export default configs;
```

Instead of the values `'off'`, `'warn'`, and `'error'`,
this config uses `0` (off) and `1` (warn).
Because it doesn't use errors, this feels clearer, but you can use whichever you prefer.
Using numbers also makes it easy to distinguish this config's rules from the configs extended
from `eslint`, `typescript-eslint`, and `eslint-plugin-svelte` when inspecting the data.

> ⚠️ The dependencies do not provide appear to provide typed rules,
> but missing rules do throw errors at runtime.

## Features

One useful opt-in feature is implemented with the following:

```js
'no-warning-comments': [1, {terms: ['todo block']}],
```

This can be used to leave notes to yourself while you develop a set of changes,
and combined with CI, you'll be blocked from merging until they're all resolved.
I use this constantly:

```ts
// TODO BLOCK
// TODO BLOCK do the thing
// todo block is case insensitive
```

### VSCode setup

To make [the VSCode ESLint plugin](https://github.com/microsoft/vscode-eslint) work with Svelte,
add the following to VSCode's `settings.json`:

```jsonc
{
	// ctrl+shift+P then `> Preferences: Open Settings (JSON)`
	// ...other config
	"eslint.validate": ["svelte", "javascript", "javascriptreact"],
}
```

See also
[the `eslint-plugin-svelte` integrations docs](https://sveltejs.github.io/eslint-plugin-svelte/user-guide/#editor-integrations).

## Develop

Edit [index.js](index.js) and see the [ESLint docs](https://eslint.org/).
Run `npm link ../eslint-config` from projects in sibling directories to test your changes.

## Publish

This repo uses [changesets](https://github.com/changesets/changesets):

```bash
npm i -g @changesets/cli # install yourself, it's not a dev dep, maybe it should be
changeset # add a changeset
git add .
git commit -am "some message, maybe the same as the changeset"
git push
changeset version # when ready to publish
changeset publish
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
