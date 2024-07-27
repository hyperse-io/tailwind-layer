import { Glob } from 'glob';
import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'path';
import { bundle } from '@/bundle.js';

const getDirname = (url: string, ...paths: string[]) => {
  return join(dirname(fileURLToPath(url)), ...paths);
};

describe('tailwind', () => {
  it('should correct glob files', async () => {
    const pattern = '**/fixtures/**/*.css';
    const g = new Glob(pattern, {
      nodir: true,
      absolute: true,
    });
    const item: string[] = [];
    for await (const file of g) {
      item.push(file);
    }
    expect(item).toHaveLength(1);
  });

  it('compile tailwind layer', async () => {
    const output = getDirname(import.meta.url, './tailwindcss-extend.cjs');
    await bundle('**/fixtures/**/*.css', 'commonjs', output);
    expect(existsSync(output)).toBe(true);
    expect(readFileSync(output, 'utf-8')).toMatch(
      "'.hyperce-head-xl': { '@apply font-extrabold text-4xl md:text-6xl'"
    );
  });
});
