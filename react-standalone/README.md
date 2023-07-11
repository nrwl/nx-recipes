# Tutorial: Standalone React Application

[![standalone application](https://img.shields.io/static/v1?label=Nx%20setup&message=standalone%20app&color=blue)](https://nx.dev/concepts/integrated-vs-package-based#standalone-applications)

Source code for the React standalone application tutorial on the Nx docs:
- Tutorial: https://nx.dev/getting-started/react-standalone-tutorial
- Video: https://youtu.be/dqCZteGFP4k

## What's inside?

This example contains a single Vite-based React application that has been generated with the `react-standlone` preset. It contains a single root-level application and two libraries, `cart` and `ui` that are imported into the app.

Follow through the tutorial linked above for more details.

## How to run it

Install all dependencies using `npm install`. You can then run commands Like

- `npx nx build` to build the React application
- `npx nx serve` to serve the app
- you can use `npx nx graph` to visualize the structure

## Learn more

- [Video: Standalone Applications with Nx](https://youtu.be/qEaVzh-oBBc)