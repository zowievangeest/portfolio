module.exports = {
  ignoreFiles: ['dist/**'],
  processors: [
    [
      '@mapbox/stylelint-processor-arbitrary-tags',
      {fileFilterRegex: [/\.vue$/]}
    ]
  ],
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  rules: {
    'no-empty-source': null,
    'rule-empty-line-before': null,
    'declaration-colon-newline-after': null
  }
}
