---
'@ryanatkn/eslint-config': minor
---

feat: loosen some rules

- disable `@typescript-eslint/no-empty-function`
- disable `@typescript-eslint/no-unnecessary-condition`
- disable `no-useless-concat`
- disable `svelte/no-useless-mustaches`
- enable `@typescript-eslint/no-empty-object-type` with `allowInterfaces: 'with-single-extends'`
- replace deprecated `no-new-object` with `no-object-constructor`
- include `**/testing/**/*.ts` in test-file overrides
