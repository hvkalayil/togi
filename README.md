# Togi — Sharpen Your Skills. Host Locally. Share Globally.

Togi (研ぎ / とぎ) means “sharpening” in Japanese.
This tool helps you sharpen your technical skills by letting you deploy and share your local projects instantly — without cloud servers, deployments, or monthly bills.

Togi uses secure tunneling (via Cloudflare Tunnel) to expose your local applications to the internet safely.
Perfect for demos, prototypes, testing APIs, UI previews, or showcasing projects directly from your machine.

## 🚀 What Togi Does

- 🖥️ Expose localhost apps securely
Share your project running on ports like 3000, 5173, 8000, or any backend.

- 🔐 Zero-config Cloudflare authentication
Manage Cloudflare Tunnel login and keys automatically.

- 🌐 Automatic subdomain creation
Togi creates DNS entries (CNAME with Tunnel ID) for you.

- 📡 Tunnel creation & lifecycle management
Detect existing tunnels, create new ones, start/stop them as needed.

- ⚡ Real-time status checks
Ensure the local server is running before the tunnel goes live.

- 🧰 Clean UI using Wails + Svelte
Smooth desktop UI on Windows/macOS/Linux with Go backend.

## 🛠️ Tech Stack

- Go — backend, system control, Cloudflare API, tunnel execution
- Wails — for the desktop app shell
- Svelte — for the front-end UI
- Cloudflare Tunnel — secure public URLs with no port forwarding

## 📦 MVP Scope

- Login with Cloudflare (OAuth or API token)
- List active tunnels
- Create new tunnel
- Configure CNAME for subdomain
- Validate local server health
- Start/stop tunnels
- Show logs & connection status

## 🧭 Why Togi?

Because learning is a craft — and every craft needs sharpening.
Togi gives developers a simple, reliable way to host and share what they build, instantly and privately, using the compute power they already own.

## Prerequisites

Before starting, ensure you have the following installed:
- **Go** (latest version)
- **Node.js** (latest LTS)
- **Wails CLI**: `go install github.com/wailsapp/wails/v2/cmd/wails@latest`
- **golangci-lint**: Required for backend linting checks.
  - MacOS: `brew install golangci-lint`
  - Windows: `choco install golangci-lint` or `scoop install golangci-lint`
  - Linux: [Install Guide](https://golangci-lint.run/usage/install/)

## Project Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd togi
   ```

2. **Install Frontend Dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Configure Git Hooks**
   This project uses `husky` for git hooks to ensure code quality. Check that the hooks path is correctly configured:
   ```bash
   # From the project root
   git config core.hooksPath frontend/.husky
   ```
   *Note: This enables pre-commit checks for both Go (linting) and Svelte (linting, formatting, type checking).*

## Development

### Live Development (Wails)
To run the application in live development mode:
```bash
wails dev
```
- This runs a Vite dev server for the frontend.
- Provides hot reload for frontend changes.
- Go backend recompiles on changes.

### Code Quality

You can manually run the checks that are executed by the pre-commit hook:

**Backend (Go)**
```bash
golangci-lint run
```

**Frontend (Svelte/TS)**
```bash
cd frontend
npm run check   # Type checking
npm run lint    # Linting
npm run format  # Format code
```

## Building

To build a redistributable, production-mode package:
```bash
wails build
```
