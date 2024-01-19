import {fork} from 'child_process';
import * as treeKill from 'tree-kill';
import { check as portCheck } from 'tcp-port-used';
export const kill = require('kill-port');

describe('MyApp', () => {

  it('should run the app', async () => {
    const pathToNx = require.resolve("nx");
    const waitForSuccess = () => new Promise<ReturnType<typeof fork>>((res, rej) => {
      const cp = fork(pathToNx, ['run', 'myapp:run'], {
        silent: true
      })
      let output = '';
      let complete = false;

      cp.stdout?.on('data', (log) => {
        output += log.toString();
        if (stripConsoleColors(output).includes("Running `dist/target/myapp/debug/myapp`") && !complete) {
          complete = true;
          res(cp);
        }
      })

      cp.stderr?.on('data', (log) => {
        output += log.toString();
        if (stripConsoleColors(output).includes("Running `dist/target/myapp/debug/myapp`") && !complete) {
          complete = true;
          res(cp);
        }
      })

      cp.on('exit', (code) => {
        if (!complete) {
          console.log("ERROR \n Original Output:", output);
          rej(`Exited with code ${code}`)
        } else {
          res(cp);
        }
      })
    })

    const cp = await waitForSuccess();
    await new Promise((res, rej) => {
      treeKill(cp.pid, 'SIGKILL', (err) => {
        if(err) {
          rej(false);
        } else {
          res(true);
        }
      });
    })
    await killPort(8080);
  });
});


function stripConsoleColors(log: string): string {
  return log?.replace(
    /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g,
    ''
  );
}

async function killPort(port: number): Promise<boolean> {
  if (await portCheck(port)) {
    try {
      await kill(port);
      await new Promise<void>((resolve) =>
        setTimeout(() => resolve(), 5000)
      );
      if (await portCheck(port)) {
      } else {
        return true;
      }
    } catch {
    }
    return false;
  } else {
    return true;
  }
}
