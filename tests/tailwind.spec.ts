import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'path';
import { bundle } from '../src/tailwind-layer-plugin.js';

const getDirname = (url: string, ...paths: string[]) => {
  return join(dirname(fileURLToPath(url)), ...paths);
};

test('compile tailwind layer', async () => {
  const output = getDirname(import.meta.url, './tailwindcss-extend.cjs');
  await bundle('**/globals.css', 'commonjs', output);
  expect(existsSync(output)).toBe(true);
  expect(readFileSync(output, 'utf-8')).toMatch(
    "'.hyperce-head-xl': { '@apply font-extrabold text-4xl md:text-6xl'"
  );
});
