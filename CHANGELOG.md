# @ryanatkn/eslint-config

## 0.8.0

### Minor Changes

- b68f784: upgrade deps ([#3](https://github.com/ryanatkn/eslint-config/pull/3))

## 0.7.0

### Minor Changes

- disable `@typescript-eslint/prefer-nullish-coalescing` because it's dangerous

## 0.6.2

### Patch Changes

- 47b2f3d: revert [3eeab19](https://github.com/ryanatkn/eslint-config/commit/3eeab19471f0cbb0c7261dde644946c820975ee9)

## 0.6.1

### Patch Changes

- 341643d: disable `@typescript-eslint/prefer-nullish-coalescing` because it's dangerous

## 0.6.0

### Minor Changes

- 65e830b: change `@typescript-eslint/array-type` to `'generic'`

## 0.5.7

### Patch Changes

- 0bb2f79: enable `experimentalGenerics`

## 0.5.6

### Patch Changes

- 75c1c41: change `@typescript-eslint/switch-exhaustiveness-check` to use `considerDefaultExhaustiveForUnions: true`

## 0.5.5

### Patch Changes

- b225bfe: add peer dep for `@eslint/js`

## 0.5.4

### Patch Changes

- bf8a132: fix type

## 0.5.3

### Patch Changes

- 9431882: fix types to make `rules` required

## 0.5.2

### Patch Changes

- 3dc1920e37c34759cc80f24e8b4112957c70bed5: disable `@typescript-eslint/no-inferrable-types`

## 0.5.1

### Patch Changes

- 77ea03e0bdf370136e0568c2cf1391343acebae4: disable `@typescript-eslint/no-unnecessary-type-parameters`

## 0.5.0

### Minor Changes

- 47ddb7f8c0b9a5722ed7ce55b6e2721e67f24dfb: upgrade `typescript-eslint@8`

## 0.4.2

### Patch Changes

- 66ec4a9dc7a0aa33719a38688607c5ef90317841: disable `no-multi-str`

## 0.4.1

### Patch Changes

- ad32c76ac6e3cfba023f8505cac60502362a2840: disable `require-unicode-regexp`

## 0.4.0

### Minor Changes

- bump `node@20.12` ([a976375](https://github.com/ryanatkn/eslint-config/commit/a976375258330f84b992101a4419c2513bf5383c))

## 0.3.0

### Minor Changes

- update svelte rules ([#2](https://github.com/ryanatkn/eslint-config/pull/2))

  disabled from recommended:

  - `svelte/no-dynamic-slot-name`
  - `svelte/no-inner-declarations`
  - `svelte/no-not-function-handler`
  - `svelte/no-shorthand-style-property-overrides`

  removed:

  - `svelte/no-immutable-reactive-statements`
  - `svelte/no-reactive-functions`
  - `svelte/no-reactive-literals`
  - `svelte/valid-each-key`

  added:

  - `svelte/button-has-type`
  - `svelte/prefer-style-directive`

## 0.2.0

### Minor Changes

- upgrade to `eslint@9` ([#1](https://github.com/ryanatkn/eslint-config/pull/1))

  peer deps:

  - `eslint-plugin-svelte@2.41`
  - `svelte@5.0.0-next.0`
  - `typescript@5.5`
  - `typescript-eslint@8.0.0-alpha.39`

## 0.1.3

### Patch Changes

- disable `no-var` ([724009e](https://github.com/ryanatkn/eslint-config/commit/724009e692eb873c86161501fff9678aa88baf2e))

## 0.1.2

### Patch Changes

- loosen Svelte peer dep to \* ([1d8d022](https://github.com/ryanatkn/eslint-config/commit/1d8d0227f151ae37ea0992085338fa7030061ee7))

## 0.1.1

### Patch Changes

- disable `@typescript-eslint/no-inferrable-types` ([6347127](https://github.com/ryanatkn/eslint-config/commit/6347127))

## 0.1.0

### Minor Changes

- publish
