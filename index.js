#!/usr/bin/env node

// Thin wrapper that launches the official GitHub MCP server.
// The real server lives in node_modules/@modelcontextprotocol/server-github/dist/index.js
// and is registered as the `mcp-server-github` bin.
//
// This file exists so `node index.js` works from the project root.

import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const bin = join(__dirname, "node_modules", ".bin", "mcp-server-github");

try {
  execFileSync(bin, { stdio: "inherit", env: process.env });
} catch (e) {
  if (e.status) process.exit(e.status);
  throw e;
}
