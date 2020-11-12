module.exports = {
  extends: ["xo", "xo-space", "xo/esnext", "plugin:unicorn/recommended"],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  ignorePatterns: ["**/dist/*", "**/node_modules/*"],
  env: {
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
  },
  plugins: ["editorconfig", "unicorn"],
  rules: {
    "no-console": "off",
    "comma-dangle": ["error", "always-multiline"],
    "import/prefer-default-export": "off",
    "editorconfig/editorconfig": "error",
    "unicorn/no-reduce": "off",
    "unicorn/no-fn-reference-in-iterator": "off",
  },
}