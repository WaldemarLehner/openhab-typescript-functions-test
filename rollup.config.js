import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: {
    dir: 'output',
    banner: "var ctx = this;",
    format: 'iife',
  },
  context: "ctx",
  plugins: [typescript()],
};