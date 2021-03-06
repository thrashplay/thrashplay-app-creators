module.exports = {
  "env": {
    "es6": true,
    "jest": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "standard"
  ],
  "overrides": [
    {
      "files": [
        "*.ts"
      ],
      "parser": "@typescript-eslint/parser",
      "parserOptions": {
        "project": "./tsconfig.json",
        "sourceType": "module"
      },
      "plugins": [
        "@typescript-eslint"
      ],
      "rules": {
        "@typescript-eslint/camelcase": "error",
        "@typescript-eslint/explicit-function-return-type": [
          "error",
          {
            "allowExpressions": true
          }
        ],
        "@typescript-eslint/explicit-member-accessibility": [
          "error",
          {
            "accessibility": "explicit",
            "overrides": {
              "constructors": "no-public"
            }
          }
        ],
        "@typescript-eslint/indent": [
          "error",
          2
        ],
        "@typescript-eslint/member-delimiter-style": [
          "error",
          {
            "multiline": {
              "delimiter": "none"
            }
          }
        ],
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-non-null-assertion": "error",
        "@typescript-eslint/no-unused-vars": [
          "error",
          {
            "argsIgnorePattern": "^_"
          }
        ],
        "@typescript-eslint/no-useless-constructor": "error",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/tslint/config": [
          "error",
          {
            "rules": {
              "member-ordering": [
                true,
                {
                  "order": "statis-first"
                }
              ],
              "one-line": [
                "check-catch",
                "check-else",
                "check-finally",
                true
              ],
              "whitespace": [
                "check-branch",
                "check-decl",
                "check-module",
                "check-operator",
                "check-preblock",
                "check-rest-spread",
                "check-separator",
                "check-type",
                "check-typecast",
                "checkl-type-operator",
                true
              ]
            }
          }
        ],
        "no-useless-constructor": "off"
      }
    },
    {
      "files": [
        "*.d.ts"
      ],
      "rules": {
        "@typescript-eslint/explicit-member-accessibility": "off",
        "@typescript-eslint/no-triple-slash-reference": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "max-classes-per-file": "off"
      }
    },
    {
      "files": [
        "*.spec.*",
        "*.test.*"
      ],
      "rules": {
        "@typescript-eslint/no-non-null-assertion": "off",
        "dot-notation": "off"
      }
    }
  ],
  "plugins": [
    "json"
  ],
  "rules": {
    "brace-style": [
      "error",
      "1tbs",
      {
        "allowSingleLine": false
      }
    ],
    "comma-dangle": [
      "error",
      {
        "arrays": "always-multiline",
        "exports": "always-multiline",
        "functions": "never",
        "imports": "always-multiline",
        "objects": "always-multiline"
      }
    ],
    "import/order": [
      "error",
      {
        "groups": [
          "parent",
          [
            "builtin",
            "external"
          ],
          [
            "index",
            "sibling"
          ]
        ],
        "newlines-between": "always"
      }
    ],
    "lines-between-class-members": [
      "error",
      "always",
      {
        "exceptAfterSingleLine": true
      }
    ],
    "no-unneeded-ternary": [
      "error",
      {
        "defaultAssignment": true
      }
    ],
    "quotes": [
      "error",
      "single",
      {
        "avoidEscape": true
      }
    ],
    "sort-imports": [
      "error",
      {
        "ignoreCase": true,
        "ignoreDeclarationSort": true,
        "ignoreMemberSort": true,
        "memberSyntaxSortOrder": [
          "all",
          "multiple",
          "none",
          "single"
        ]
      }
    ]
  }
}