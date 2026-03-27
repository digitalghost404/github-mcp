# GitHub MCP Server — Design Spec

## Purpose

Install and configure the official `@modelcontextprotocol/server-github` package for Claude Code. No custom code — just setup and registration.

## Setup Steps

1. `npm init -y` in `~/projects/github-mcp`
2. `npm install @modelcontextprotocol/server-github`
3. Register with Claude Code via `claude mcp add`
4. Configure `GITHUB_PERSONAL_ACCESS_TOKEN` env var

## Configuration

- `GITHUB_PERSONAL_ACCESS_TOKEN` — required, GitHub PAT with repo/issues/PR scopes

## What It Provides

The official server exposes tools for:
- Repository operations (search, get contents, create/fork repos)
- Issue management (create, list, update, comment)
- Pull request operations (create, list, merge, review)
- File operations (create/update files, push)
- Branch management (create, list)
- Search (code, issues, users)
