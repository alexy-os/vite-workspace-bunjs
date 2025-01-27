# @apps/app

A React application built with Vite and BunJS, showcasing the usage of the shared UI component library.

## Features

- ⚡️ Vite for lightning-fast development
- 🎨 Integration with `@packages/ui` components
- 📱 Responsive design with system fonts
- 💪 Full TypeScript support

## Getting Started

### Local Development

1. Install dependencies from the root directory:
   ```bash
   bun install
   ```

2. Start the development server:
   ```bash
   bun run dev
   ```

The app will be available at `http://localhost:5173`.

### Production Build

1. Build the application:
   ```bash
   bun run build
   ```

2. Preview the build:
   ```bash
   bun run preview
   ```

## Using UI Components

The app is configured to use components from the `@packages/ui` library. Import components directly:

```tsx
import { Button } from '@packages/ui/components/ui/button';

function MyComponent() {
  return (
    <Button onClick={() => alert('Clicked!')}>
      Click me
    </Button>
  );
}
```

### Adding New UI Components

1. Install any new dependencies in the app's package.json
2. Import the component from `@packages/ui`
3. Use it in your React components

## Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run preview` - Preview production build

## Project Structure

```
src/
  ├── App.tsx        # Main application component
  ├── main.tsx       # Application entry point
  └── index.css      # Global styles
```

## License

MIT License - see the [LICENSE](../../LICENSE) file for details. 