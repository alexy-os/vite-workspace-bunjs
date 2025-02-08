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
  Handle,
  Position,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { Box } from 'lucide-react';

// Простой тип для данных ноды
type NodeData = {
  label: string | React.ReactNode;
  message?: string;
};

// Кастомная нода с handles
const CustomNode = ({ data }: { data: NodeData }) => (
  <div className="flex flex-col items-center p-6 rounded-lg border bg-card hover:shadow-md transition-shadow min-w-[200px]">
    {/* Top Handle */}
    <Handle 
      type="target" 
      position={Position.Top} 
      className="w-4 h-4 bg-primary/50 rounded-full" 
    />
    
    <div className="p-3 rounded-full bg-primary/10 text-primary mb-4">
      <Box className="w-6 h-6" />
    </div>
    
    {typeof data.label === 'string' ? (
      <h3 className="text-lg font-semibold mb-2">{data.label}</h3>
    ) : (
      data.label
    )}
    
    {/* Bottom Handle */}
    <Handle 
      type="source" 
      position={Position.Bottom} 
      className="w-4 h-4 bg-primary/50 rounded-full" 
    />
  </div>
);

const nodeTypes = { custom: CustomNode };

const initialNodes: Node[] = [
  {
    id: '1',
    type: 'custom',
    position: { x: 100, y: 100 },
    data: { 
      label: 'Welcome'
    },
  },
  {
    id: '2',
    type: 'custom',
    position: { x: 100, y: 250 },
    data: { 
      label: 'to Flow Builder'
    },
  },
  {
    id: '3',
    type: 'custom',
    position: { x: 100, y: 400 },
    data: { 
      label: 'Check',
      message: '' 
    },
  },
];

const initialEdges: Edge[] = [];

export function WelcomePage() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  // Simplified hasDeletedNodes calculation
  const hasDeletedNodes = nodes.length < initialNodes.length;

  const checkConnections = useCallback(() => {
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

  const resetNodes = useCallback(() => {
    setNodes(initialNodes);
    setEdges(initialEdges);
  }, [setNodes, setEdges]);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        colorMode="dark"
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        deleteKeyCode={'Delete'}
        fitView
      >
        <Background className="bg-background dark:bg-slate-950" />
        <Controls />
        {hasDeletedNodes && (
          <Panel position="top-right">
            <button 
              onClick={resetNodes}
              className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
            >
              Restore nodes
            </button>
          </Panel>
        )}
        {nodes.find(node => node.id === '3') && (
          <Panel position="bottom-right">
            <button 
              onClick={() => checkConnections()}
              className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
            >
              Check Connections
            </button>
          </Panel>
        )}
      </ReactFlow>
    </div>
  );
} 