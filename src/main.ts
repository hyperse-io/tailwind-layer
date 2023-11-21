import chokidar from 'chokidar';
import sade from 'sade';
import { version, name } from '../package.json';
import { bundle } from './tailwind-layer-plugin.js';

export const cmdMain = () => {
  return sade(name, true)
    .version(version)
    .option('--pattern, -p', 'pattern to match files')
    .option('--type, -t', 'output type, "module" or "commonjs"', 'commonjs')
    .option('--output, -o', 'output path', 'tailwindcss-extend.cjs')
    .option('--watch, -w', 'watch for changes', false)
    .action(async ({ pattern, type, output, watch }) => {
      if (!pattern) {
        error('No pattern provided.');
      }
      if (!['module', 'commonjs'].includes(type)) {
        error('Invalid type specified.');
      }
      if (!output) {
        error('No output provided.');
      }

      const runBundle = () =>
        bundle(pattern, type, output).catch((err) => {
          console.error(err);
        });

      if (watch) {
        const watcher = chokidar.watch(pattern);

        watcher.on('all', () => {
          runBundle();
        });

        await runBundle();
      } else {
        await runBundle();
      }
    })
    .parse(process.argv);

  function error(str: string): never {
    console.error(`${str}`);
    console.error(`Type ${name} --help.`);
    process.exit(1);
  }
};
