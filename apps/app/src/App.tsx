import { Button } from '@packages/ui/components/ui/button';

function App() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      minHeight: '100vh'
    }}>
      <h1 className="text-2xl font-bold py-4">Vite + React + BunJS Workspaces</h1>
      <Button onClick={() => alert('Hello from UI package!')}>
        Click me!
      </Button>
    </div>
  );
}

export default App; 