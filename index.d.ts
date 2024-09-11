import type {Linter} from 'eslint';

// TODO hacky - probably more than just `rules` is required, and there's no rules type safety here
type Config_With_Rules = Linter.Config & {rules: Linter.RulesRecord};

export const configs: Config_With_Rule[];

export const ts_config: Config_With_Rules;

export const svelte_config: Config_With_Rules;
