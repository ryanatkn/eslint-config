# @ryanatkn/eslint-config

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
