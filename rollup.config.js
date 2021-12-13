import html from '@open-wc/rollup-plugin-html';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: 'src/html-clock.js',
    output: {
      dir: 'dist/',
      format: 'esm',
      compact: true
    },
    plugins: [terser()]
  },
  {
    input: 'src/index.js',
    output: {
      dir: 'dist/',
      format: 'es'
    },
    plugins: [
      html({
        template: `
        <html>
          <head>
            <meta charset="utf-8">
            <title>clock</title>
            <style>
              body {
                background-color: #091921;
              }
            </style>
          </head>
          <body>
          </body>
        </html>`,
      }),
      postcss(),
      terser()
    ]
  }
];