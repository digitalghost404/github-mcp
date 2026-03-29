# github-mcp

MCP server that wraps the official [`@modelcontextprotocol/server-github`](https://github.com/modelcontextprotocol/servers/tree/main/src/github) package, giving Claude Code native GitHub integration.

## Features

- Repository operations (search, get contents, create, fork)
- Issue management (create, list, update, comment)
- Pull request operations (create, list, merge, review)
- File operations (create/update, push)
- Branch management
- Code, issue, and user search

## Setup

```bash
npm install
```

Set the `GITHUB_PERSONAL_ACCESS_TOKEN` environment variable with a GitHub PAT.

## Usage

```bash
npm start
```

The server communicates over stdio using the MCP protocol. Configure it in your Claude Code MCP settings:

```json
{
  "mcpServers": {
    "github": {
      "command": "node",
      "args": ["/path/to/github-mcp/index.js"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "<your-token>"
      }
    }
  }
}
```

## Tech Stack

- Node.js (>=18)
- `@modelcontextprotocol/server-github`
- `@modelcontextprotocol/sdk`
