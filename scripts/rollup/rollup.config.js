import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';

const extensions = ['.ts', '.tsx'];
const inputSrc = [
  ['./src/index.ts'],
];

export default inputSrc
  .map(([input, file]) => {
    return {
      input,
      output: {
        dir: 'dist2',
        format: 'es',
      },
      plugins: [
        babel({
          babelHelpers: 'runtime',
          exclude: 'node_modules/**',
          extensions,
        }),
        nodeResolve({
          extensions,
        }),
        // https://velog.io/@peterkimzz/rollup-%ED%94%8C%EB%9F%AC%EA%B7%B8%EC%9D%B8
        // commonJS 로 작성된 모듈들을 번들링 결과물에 포함시키려고 할 때 문제가 발생
        // CommonJS 로 작성된 모듈들을 ES6 바꾸어서 rollup이 해석할 수 있게 도와줍니다.
        commonjs({
          extensions: [...extensions, '.js'],
        }),
        peerDepsExternal(),
        postcss({
          plugins: [],
        }),
        terser(),
      ],
    };
  });
