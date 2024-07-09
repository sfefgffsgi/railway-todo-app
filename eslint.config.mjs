import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";

// import react from "eslint-plugin-react"
// const react = require('eslint-plugin-react');
// const globals = require('globals');

export default [
  {files: ["**/*.{js,mjs,cjs,jsx}"]},
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  {languageOptions: { globals: {...globals.browser, ...globals.node} }},
  pluginJs.configs.recommended,
  pluginReactConfig,
  //React
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    // plugins: {
    //   react,
    // },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.jest,
      },
    },
    rules: {
      // ... any rules you want
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'react/react-in-jsx-scope': 'off',
      "react/prop-types": "off"
     },
    // ... others are omitted for brevity
    // env: {
    //   "jest/globals": true
    // }
  },

];