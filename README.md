# Vite + React + BunJS Workspace

A minimal monorepo starter kit built with Vite, React, and BunJS. This workspace demonstrates how to set up a modular React application with a shared UI component library.

## Features

- 📦 Monorepo setup with Workspaces
- ⚡️ Vite for fast development and building
- 🏃 BunJS for enhanced performance
- 🎨 Shared UI component library
- 📱 System font stack for optimal rendering
- 💪 TypeScript support

## Project Structure

```
root/
  ├── packages/
  │   └── ui/          # Shared UI components
  │       ├── src/
  │       └── ...
  └── apps/
      └── app/         # Main application
          ├── src/
          └── ...
```

## Prerequisites

- [Bun](https://bun.sh/) (latest version)

## Getting Started

1. Clone the repository:
   ```bash
   git clone [repository-url]
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

3. Start development server:
   ```bash
   bun run dev
   ```

4. Build for production:
   ```bash
   bun run build
   ```

5. Preview production build:
   ```bash
   bun run preview
   ```

## Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run preview` - Preview production build
- `bun run clean` - Clean all node_modules directories

## Contributing

Feel free to submit issues and pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.