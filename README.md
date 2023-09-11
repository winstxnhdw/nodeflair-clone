# nodeflair-assignment

[![Netlify Status](https://api.netlify.com/api/v1/badges/c0c2e1a2-63b6-4106-aeac-3a4f320f7c8b/deploy-status)](https://app.netlify.com/sites/nodeflair-jobs/deploys)

> Finally, a clone that uses the actual data of the original site!

A clone of [nodeflair.com/jobs](https://nodeflair.com/jobs) in React, tested on Firefox Developer Edition. It uses [lambda-proxy](https://github.com/winstxnhdw/lambda-proxy) to retrieve the latest Nodeflair jobs.

## Setup

Run the following install all dependencies.

```bash
bun install
```

## Development

Populate the `.env` file.

```bash
echo VITE_PROXY_ENDPOINT=$YOUR_PROXY_ENDPOINT >> .env
```

Run the following to start the development server.

```bash
bun dev
```
