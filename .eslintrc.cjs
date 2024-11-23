/**
 * @type {import("@types/eslint").Linter.BaseConfig}
 */
module.exports = {
  extends: ['@remix-run/eslint-config', 'plugin:hydrogen/recommended'],
  rules: {
    'hydrogen/prefer-image-component': 'off',
    'no-useless-escape': 'off',
    'no-case-declarations': 'off',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['~', './app'], // Map the `~` alias to the `./app` directory
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx'], // Supported file extensions
      },
    },
  },
};
