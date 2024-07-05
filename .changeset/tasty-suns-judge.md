---
'@ryanatkn/eslint-config': minor
---

update svelte rules

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
