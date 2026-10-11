---
'@ryanatkn/eslint-config': patch
---

fix: the `src/lib` ban on `#lib/` and `#routes/` now matches (a leading `#` read as a gitignore-style comment, so the patterns never fired)
