const createConfig = require('@titicaca/eslint-config-triple/create-config');
const { extends: extendConfigs, overrides } = createConfig({ type: 'frontdend', project: './tsconfig.json' });

module.exports = {
  extends: [
    "@titicaca/eslint-config-triple",
    "@titicaca/eslint-config-triple/frontend",
    ...extendConfigs,
  ],
  overrides: [
    ...overrides,
  ],
  rules: {
    "react/jsx-key": "off", //key 검사 제거하려면 이 옵션을 off 시켜줘야 함!
    "react/no-unescaped-entities": "off"
  }
}