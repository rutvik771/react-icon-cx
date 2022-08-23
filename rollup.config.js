import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.cjs.js',
    format: 'cjs'
  },
  external:[/@babel\/runtime/ ,'react'],
  plugins: [resolve(), babel({ babelHelpers: 'runtime' , plugins: ["@babel/plugin-transform-runtime"] })]
};