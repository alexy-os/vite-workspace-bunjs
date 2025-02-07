import { useCallback } from 'react';
import { 
  ReactFlow,
  Node,
  Edge,
  Connection,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  Background,
  Panel,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

let checkConnections: () => void;

const initialNodes: Node[] = [
  {
    id: '1',
    type: 'default',
    position: { x: 100, y: 100 },
    data: { 
      label: 'Welcome'
    },
  },
  {
    id: '2',
    type: 'default',
    position: { x: 100, y: 200 },
    data: { 
      label: 'to Flow Builder'
    },
  },
  {
    id: '3',
    type: 'default',
    position: { x: 100, y: 300 },
    data: { 
      label: <button onClick={() => checkConnections && checkConnections()}>Check</button>,
      message: '' 
    },
  },
];

const initialEdges: Edge[] = [];

export function WelcomePage() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  checkConnections = useCallback(() => {
    if (edges.length === 2) {
      const correctConnection = 
        edges.some(e => e.source === '1' && e.target === '2') &&
        edges.some(e => e.source === '2' && e.target === '3');
      
      if (correctConnection) {
        setNodes((nds) =>
          nds.map((node) => {
            if (node.id === '3') {
              return {
                ...node,
                data: {
                  ...node.data,
                  label: 'Welcome to Flow Builder',
                },
              };
            }
            return node;
          })
        );
      }
    }
  }, [edges, setNodes]);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );
  
  const hasDeletedNodes = nodes.length < initialNodes.length;
  
  const resetNodes = useCallback(() => {
    setNodes(initialNodes);
    setEdges(initialEdges);
  }, [setNodes, setEdges]);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        colorMode="dark"
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        deleteKeyCode={'Delete'}
        fitView
      >
        <Background />
        <Controls />
        {hasDeletedNodes && (
          <Panel style={{ marginTop: '10px' }}>
            <button 
              onClick={resetNodes}
              style={{
                padding: '8px 16px',
                backgroundColor: '#000',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Restore nodes
            </button>
          </Panel>
        )}
      </ReactFlow>
    </div>
  );
} 