import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'es',
    }
  ],
  external: [
    'ramda',
    'lodash/fp',
    '@rjhilgefort/export-dir'
  ],
  plugins: [
    commonjs({}),
    babel({
      exclude: 'node_modules/**',
      include: [
        'src/**',
        'node_modules/@rjhilgefort/export-dir',
      ],
    }),
  ],
};
