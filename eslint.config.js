import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 5,
      globals: ['node']
    },

    ignores: ['lib/', 'dist/*'],
  }
);
