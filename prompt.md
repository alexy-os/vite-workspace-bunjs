### Техническое задание

**Цель**: Создать минимальное приветственное приложение с использованием Vite + React в среде BunJS с монорепозиторием.

**Структура проекта**:
```
root/
  ├── package.json
  ├── packages/
  │   └── ui/
  │       ├── package.json
  │       ├── src/
  │       │   ├── Button.tsx
  │       │   └── index.ts
  │       ├── tsconfig.json
  │       └── vite.config.ts
  └── apps/
      └── app/
          ├── package.json
          ├── src/
          │   ├── App.tsx
          │   └── main.tsx
          ├── index.html
          ├── tsconfig.json
          └── vite.config.ts
```

**Шаг 1: Настройка корневого package.json**
```json:package.json
{
  "name": "vite-workspace-demo",
  "private": true,
  "version": "1.0.0",
  "workspaces": [
    "packages/*",
    "apps/*"
  ],
  "scripts": {
    "dev": "bun run --cwd apps/app dev",
    "build": "bun run --cwd apps/app build"
  }
}
```

**Шаг 2: Настройка UI пакета (@packages/ui)**
```json:packages/ui/package.json
{
  "name": "@packages/ui",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "main": "src/index.ts",
  "scripts": {
    "build": "vite build"
  },
  "dependencies": {
    "react": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "typescript": "^5.0.0",
    "vite": "^5.0.0",
    "@vitejs/plugin-react": "^5.0.0"
  },
  "peerDependencies": {
    "react": "^18.2.0"
  }
}
```

**Шаг 3: Создание компонента Button**
```typescript:packages/ui/src/Button.tsx
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button 
      onClick={onClick}
      style={{
        padding: '10px 20px',
        backgroundColor: '#646cff',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      }}
    >
      {children}
    </button>
  );
};
```

**Шаг 4: Экспорт компонентов UI**
```typescript:packages/ui/src/index.ts
export * from './Button';
```

**Шаг 5: Настройка приложения (@apps/app)**
```json:apps/app/package.json
{
  "name": "@apps/app",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@packages/ui": "workspace:*",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@vitejs/plugin-react": "^5.0.0",
    "typescript": "^5.0.0",
    "vite": "^5.0.0"
  }
}
```

**Шаг 6: Создание приложения**
```typescript:apps/app/src/App.tsx
import { Button } from '@packages/ui';

function App() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      minHeight: '100vh'
    }}>
      <h1>Vite + React + BunJS Workspaces</h1>
      <Button onClick={() => alert('Hello from UI package!')}>
        Click me!
      </Button>
    </div>
  );
}

export default App;
```

**Шаг 7: Точка входа приложения**
```typescript:apps/app/src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

**Шаг 8: HTML шаблон**
```html:apps/app/index.html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + BunJS</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

**Запуск проекта**:
1. Установка зависимостей:
```bash
bun install
```

2. Запуск в режиме разработки:
```bash
bun run dev
```

**Ожидаемый результат**:
- Приложение запустится на `http://localhost:5173`
- На странице будет отображаться заголовок и кнопка из UI пакета
- При клике на кнопку появится alert с сообщением