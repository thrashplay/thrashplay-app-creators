---
to: <%= projectDir %>/tsconfig.json
---
{
  "compileOnSave": false,
  "compilerOptions": {
    "baseUrl": "./packages",
    "composite": true,
    "declaration": true,
    "declarationDir": "dist",
    "declarationMap": true,
    "outDir": "dist",
    "rootDir": "src",
    "allowJs": false,
    "allowSyntheticDefaultImports": true,
    "alwaysStrict": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "inlineSourceMap": true,
    "isolatedModules": false,
    "jsx": "preserve",
    "lib": ["es2018"],
    "listEmittedFiles": false,
    "listFiles": false,
    "module": "es2015",
    "moduleResolution": "node",
    "noEmit": true,
    "noErrorTruncation": true,
    "noFallthroughCasesInSwitch": true,
    "noImplicitAny": true,
    "noImplicitReturns": true,
    "noImplicitThis": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "pretty": true,
    "resolveJsonModule": true,
    "skipLibCheck": true,
    "strict": true,
    "strictFunctionTypes": true,
    "strictNullChecks": true,
    "strictPropertyInitialization": true,
    "target": "es2018",
    "traceResolution": false
  },
  "exclude": [
    "**/dist",
    "**/node_modules/"
  ]
}