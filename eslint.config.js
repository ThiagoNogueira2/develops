import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginVue from 'eslint-plugin-vue';
import globals from 'globals';
import typescriptEslint from 'typescript-eslint';

export default typescriptEslint.config(
    { ignores: ['*.d.ts', '**/coverage', '**/dist'] },
    {
        extends: [
            eslint.configs.recommended,
            ...typescriptEslint.configs.recommended,
            ...eslintPluginVue.configs['flat/strongly-recommended'],
            eslintConfigPrettier
        ],
        files: ['**/*.{ts,vue}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: globals.browser,
            parserOptions: {
                parser: typescriptEslint.parser
            }
        },
        rules: {
            // Ignorar variaveis não utilizadas quando iniciar com '_'

            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    caughtErrors: 'all',
                    caughtErrorsIgnorePattern: '^error|\_',
                    argsIgnorePattern: '^\_',
                    destructuredArrayIgnorePattern: '^\_',
                    varsIgnorePattern: '^\_',
                    ignoreRestSiblings: true
                }
            ],
            eqeqeq: ['error', 'always', { null: 'ignore' }],
            'vue/attribute-hyphenation': ['error', 'never'],
            'vue/v-on-event-hyphenation': ['error', 'never'],
            'vue/attributes-order': [
                'error',
                {
                    order: [
                        'CONDITIONALS',
                        'LIST_RENDERING',
                        'RENDER_MODIFIERS',
                        'TWO_WAY_BINDING',
                        'DEFINITION',
                        ['UNIQUE', 'SLOT'],
                        'GLOBAL',
                        'CONTENT',
                        // 'OTHER_DIRECTIVES',
                        // 'OTHER_ATTR',
                        'EVENTS'
                    ],
                    alphabetical: true
                }
            ],
            'vue/block-lang': [
                'error',
                {
                    script: {
                        lang: 'ts'
                    }
                }
            ],
            'vue/custom-event-name-casing': ['error', 'camelCase'],
            'vue/define-emits-declaration': ['error', 'type-literal'],
            'vue/define-macros-order': [
                'error',
                {
                    order: ['defineProps', 'defineEmits'],
                    defineExposeLast: true
                }
            ],
            'vue/define-props-declaration': ['error', 'type-based'],
            'vue/enforce-style-attribute': ['error', { allow: ['scoped'] }],
            'vue/eqeqeq': ['error', 'always', { null: 'ignore' }],
            'vue/first-attribute-linebreak': [
                'off',
                {
                    singleline: 'beside',
                    multiline: 'below'
                }
            ],
            'vue/html-closing-bracket-newline': [
                'error',
                {
                    singleline: 'never',
                    multiline: 'always',
                    selfClosingTag: {
                        singleline: 'never',
                        multiline: 'always'
                    }
                }
            ],
            'vue/html-closing-bracket-spacing': [
                'error',
                {
                    startTag: 'never',
                    endTag: 'never',
                    selfClosingTag: 'never'
                }
            ],
            'vue/html-indent': [
                'error',
                'number',
                {
                    attribute: 24,
                    baseIndent: 24,
                    closeBracket: 0,
                    alignAttributesVertically: true,
                    ignores: []
                }
            ],
            'vue/html-self-closing': [
                'error',
                {
                    html: {
                        void: 'never',
                        normal: 'always',
                        component: 'always'
                    },
                    svg: 'always',
                    math: 'always'
                }
            ],
            'vue/max-lines-per-block': [
                'error',

                {
                    script: 1000,
                    template: 1000,
                    skipBlankLines: true
                }
            ],
            'vue/multi-word-component-names': ['off'],

            // Desabilita a possibilidade de reatribuir uma variável reativa perdendo a reatividade
            // This rule reports the usages of ref objects causing the value to lose reactivity.
            'vue/mustache-interpolation-spacing': ['error', 'always'],
            'vue/no-empty-component-block': ['error'],
            'vue/no-extra-parens': ['error'],
            'vue/no-multiple-objects-in-class': ['error'],
            'vue/no-ref-object-reactivity-loss': ['error'],
            'vue/no-restricted-html-elements': [
                'error',
                {
                    element: 'button',
                    message: 'Prefer use of our custom <Button/> component'
                },
                {
                    element: 'textarea',
                    message: 'Prefer use of our custom <Textarea/> component'
                },
                {
                    element: 'Editor',
                    message: 'Prefer use of our custom <IngaEditor/> component'
                },
                {
                    element: 'checkbox',

                    message: 'Prefer use of our custom <Checkbox/> component'
                },
                {
                    element: 'select',
                    message: 'Prefer use of our custom <Select/> component'
                }
            ],
            'vue/no-unused-refs': ['error'],
            'vue/no-useless-concat': ['error'],
            'vue/no-useless-mustaches': ['error'],
            'vue/object-shorthand': ['error'],
            'vue/padding-line-between-blocks': ['error', 'never'],
            'vue/prefer-prop-type-boolean-first': ['error'],
            'vue/prefer-separate-static-class': ['error'],
            'vue/prefer-true-attribute-shorthand': ['off'],
            'vue/prefer-use-template-ref': ['error'],
            'vue/quote-props': ['error'],
            'vue/require-default-prop': ['off'],
            'vue/require-macro-variable-name': [
                'error',
                {
                    defineProps: 'props',
                    defineEmits: 'emit',
                    defineSlots: 'slots',
                    useSlots: 'slots',
                    useAttrs: 'attrs'
                }
            ],
            'vue/require-typed-ref': ['error'],
            'vue/slot-name-casing': ['error', 'camelCase'],
            'vue/max-len': [
                'error',
                {
                    code: 130,
                    template: 130,
                    tabWidth: 4,
                    comments: 80,
                    ignoreComments: false,
                    ignoreTrailingComments: false,
                    ignoreUrls: true,
                    ignoreStrings: false,
                    ignoreTemplateLiterals: false,
                    ignoreRegExpLiterals: false,
                    ignoreHTMLAttributeValues: false,
                    ignoreHTMLTextContents: false
                }
            ]
        }
    },
    eslintConfigPrettier
);
