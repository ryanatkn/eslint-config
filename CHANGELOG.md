# @ryanatkn/eslint-config

## 0.4.0

### Minor Changes

- bump `node@20.12`

## 0.3.0

### Minor Changes

- 777480a0108c6a8cc3c869bab15a4da639a1f943: update svelte rules

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

- upgrade to `eslint@9`

  peer deps:

  - `eslint-plugin-svelte@2.41`
  - `svelte@5.0.0-next.0`
  - `typescript@5.5`
  - `typescript-eslint@8.0.0-alpha.39`

## 0.1.3

### Patch Changes

- 724009e692eb873c86161501fff9678aa88baf2e: disable `no-var`

## 0.1.2

### Patch Changes

- 1d8d0227f151ae37ea0992085338fa7030061ee7: loosen Svelte peer dep to \*

## 0.1.1

### Patch Changes

- 6347127: disable `@typescript-eslint/no-inferrable-types`

## 0.1.0

### Minor Changes

- publish
