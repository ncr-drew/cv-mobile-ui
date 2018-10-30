import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'umd',
    name: 'cvMobileUI',
    globals: {
      react: 'React',
      classnames: 'classNames',
    },
  },
  plugins: [
    postcss({
      plugins: [],
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    terser(),
  ],
  external: ['react', 'classnames'],
};
