import { exec, spawn } from 'child_process';

/* eslint-disable */
var __TEARDOWN_MESSAGE__: string;

module.exports = async function () {
  // Start services that that the app needs to run (e.g. database, docker-compose, etc.).
  console.log('\nSetting up...\n');

  const controller = new AbortController();
  const serveReady = new Promise((resolve, reject) => {
    console.log('in promise');
    const serveProcess = exec('nx serve my-app', { env: process.env }).on(
      'error',
      (err) => {
        throw err;
      }
    );
    serveProcess.stdout.on('data', (data) => {
      console.log(data.toString());
      if (data.includes('Listening at')) {
        resolve(data);
      }
    });
    process.on('exit', () => serveProcess.kill());
    process.on('SIGTERM', () => serveProcess.kill());
  });

  // Hint: Use `globalThis` to pass variables to global teardown.
  globalThis.__TEARDOWN_MESSAGE__ = '\nTearing down...\n';

  return serveReady;
};
