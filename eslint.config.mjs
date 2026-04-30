import config from '@losant/eslint-config-losant/env/node.js';

export default [
  ...config,
  { ignores: ['docs/'] },
  {
    languageOptions: {
      globals: {
        expect: 'readonly'
      }
    }
  }
];
