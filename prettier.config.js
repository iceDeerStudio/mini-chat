module.exports = {
    plugins: ['prettier-plugin-tailwindcss'],
    tailwindConfig: './tailwind.config.js',

    arrowParens: 'avoid',
    bracketSameLine: false,
    bracketSpacing: true,
    semi: false,
    experimentalTernaries: false,
    singleQuote: true,
    jsxSingleQuote: true,
    quoteProps: 'as-needed',
    trailingComma: 'all',
    singleAttributePerLine: false,
    htmlWhitespaceSensitivity: 'css',
    vueIndentScriptAndStyle: false,
    proseWrap: 'preserve',
    insertPragma: false,
    printWidth: 128,
    requirePragma: false,
    tabWidth: 4,
    useTabs: false,
    embeddedLanguageFormatting: 'auto',
    cursorOffset: -1,
}
