import { ServeFullstackExecutorSchema } from './schema';
import { ExecutorContext } from '@nx/devkit';
import { ChildProcess, exec } from 'child_process';
import * as chalk from 'chalk';

const LARGE_BUFFER = 1024 * 1000000;

export default async function runExecutor(
  options: ServeFullstackExecutorSchema,
  _context: ExecutorContext
) {
  const prefixSize =
    Math.max(options.backendProject.length, options.frontendProject.length) + 3;
  await startBackendServer(options, prefixSize);
}

async function startBackendServer(
  options: ServeFullstackExecutorSchema,
  targetPadSize: number
) {
  let frontendServerStarted = false;
  return new Promise(() => {
    const childProcess = exec(`npx nx serve ${options.backendProject}`, {
      maxBuffer: LARGE_BUFFER,
    });
    process.on('exit', () => childProcess.kill());
    process.on('SIGTERM', () => childProcess.kill());
    prefixTerminalOutput(
      childProcess,
      chalk.bgGreen(padTargetName(options.backendProject, targetPadSize))
    );
    childProcess.stdout.on('data', (data) => {
      if (
        !frontendServerStarted &&
        data.includes('build succeeded, watching for changes...')
      ) {
        startFrontendServer(options.frontendProject, targetPadSize);
        frontendServerStarted = true;
      }
    });
  });
}

async function startFrontendServer(
  frontendProject: string,
  targetPadSize: number
) {
  return new Promise(() => {
    const childProcess = exec(`npx nx serve ${frontendProject}`, {
      maxBuffer: LARGE_BUFFER,
    });
    process.on('exit', () => childProcess.kill());
    process.on('SIGTERM', () => childProcess.kill());
    prefixTerminalOutput(
      childProcess,
      chalk.bgBlue(padTargetName(frontendProject, targetPadSize))
    );
  });
}

function prefixTerminalOutput(cp: ChildProcess, prefix: string) {
  function logWithPrefix(data: string) {
    if (!data) {
      return;
    }
    console.log(
      data
        .split('\n')
        .map((line) => `${prefix} ${line}`)
        .join('\n')
    );
  }
  cp.stdout.on('data', logWithPrefix);
  cp.stdout.on('error', logWithPrefix);
  cp.stderr.on('data', logWithPrefix);
  cp.stderr.on('error', logWithPrefix);
}

function padTargetName(name: string, targetSize: number) {
  const builder = [`${name}`];
  builder.push(' '.repeat(Math.floor((targetSize - name.length) / 2)));
  builder.unshift(' '.repeat(Math.ceil((targetSize - name.length) / 2)));
  builder.push(' ');
  return builder.join('');
}
