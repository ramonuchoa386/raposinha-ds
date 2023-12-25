import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { nodeResolve } from '@rollup/plugin-node-resolve';

const packageJson = require('./package.json');

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: packageJson.main,
                format: 'cjs',
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: 'esm',
                sourcemap: true,
            },
        ],
        plugins: [
            peerDepsExternal(),
            resolve(),
            commonjs(),
            typescript({ tsconfig: './tsconfig.json' }),
            terser(),
            nodeResolve(),
        ],
        external: ['react', 'react-dom', 'styled-components'],
    },
    {
        input: 'src/index.ts',
        output: [{ file: 'dist/types.d.ts', format: 'es' }],
        plugins: [dts.default(), nodeResolve()],
    },
    {
        input: 'src/@types/custom-theme.d.ts',
        output: [{ file: 'dist/interfaces/custom-theme.d.ts', format: 'es' }],
        plugins: [dts.default(), nodeResolve()],
    },
    {
        input: 'src/@types/global-styles.d.ts',
        output: [{ file: 'dist/interfaces/global-styles.d.ts', format: 'es' }],
        plugins: [dts.default(), nodeResolve()],
    },
];
