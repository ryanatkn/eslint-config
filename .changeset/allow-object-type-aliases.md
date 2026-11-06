---
'@ryanatkn/eslint-config': patch
---

fix: turn off `@typescript-eslint/consistent-type-definitions`, so an object type alias is allowed beside interfaces (an alias has an implicit index signature, which an interface lacks)
