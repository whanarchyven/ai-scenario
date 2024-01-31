import React, {useState, useRef, useCallback} from 'react';
import ReactFlow, {
    ReactFlowProvider,
    addEdge,
    useNodesState,
    useEdgesState,
    Controls, MarkerType,
} from 'reactflow';
import 'reactflow/dist/style.css';

import Sidebar from './Sidebar';
import Spider from "@/app/components/nodes/Spider";

import './dnd.css';
import Voice from "@/app/components/nodes/Voice";
import Aicharm from "@/app/components/nodes/Aicharm";

const initialNodes = [
    {
        id: '1',
        type: 'input',
        data: {label: 'input node'},
        sourcePosition: 'right',
        targetPosition: 'left',
        position: {x: 250, y: 5},
    },
];

let id = 0;
const getId = () => `dndnode_${id++}`;

const nodeTypes = {
    spiderNode: Spider,
    voiceNode:Voice,
    aicharmNode:Aicharm
};
const DnDFlow = () => {
    const reactFlowWrapper = useRef(null);
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);

    const [nodeInfo,setNodeInfo]=useState(null)

    const onConnect = useCallback(
        (params) => setEdges((eds) => addEdge(params, eds)),
        [],
    );

    const onDragOver = useCallback((event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);

    const onDrop = useCallback(
        (event) => {
            event.preventDefault();

            const type = event.dataTransfer.getData('application/reactflow');

            // check if the dropped element is valid
            if (typeof type === 'undefined' || !type) {
                return;
            }
            const position = reactFlowInstance.screenToFlowPosition({
                x: event.clientX,
                y: event.clientY,
            });
            const newNode = {
                id: getId(),
                type,
                position,
                sourcePosition: 'right',
                targetPosition: 'left',
                data: {label: `${type} node`},
            };

            setNodes((nds) => nds.concat(newNode));
        },
        [reactFlowInstance],
    );

    return (
        <div className="dndflow">
            <ReactFlowProvider>
                <Sidebar/>
                <div className={'flex w-full flex-col'}>
                    <div className={'p-5 border-b-2 flex w-full justify-between border-[#FF0072]'}>
                        <p className={'text-[#FF0072] text-2xl font-black'}>Название проекта</p>
                        <div className={'flex gap-8 items-center'}>
                            <div
                                className={'flex items-center justify-center p-2 bg-blue-500 text-white rounded-full font-black'}>
                                Сохранить
                            </div>
                            <div
                                className={'flex items-center justify-center p-2 bg-green-400 rounded-full font-black'}>
                                Запустить
                            </div>
                            <div className={'font-black'}>
                                Осталось токенов: <span className={'text-[#FF0072]'}>{12-nodes.length}</span>
                            </div>
                        </div>
                    </div>
                    <div className="reactflow-wrapper" ref={reactFlowWrapper}>
                        <ReactFlow
                            nodes={nodes} nodeTypes={nodeTypes}
                            edges={edges}
                            onNodesChange={onNodesChange}
                            onEdgesChange={onEdgesChange}
                            onNodeClick={(event, node) => {
                                console.log(node)
                                setNodeInfo(node)
                            }}
                            defaultEdgeOptions={{
                                animated: true, markerEnd: {
                                    type: MarkerType.ArrowClosed,
                                    width: 20,
                                    height: 20,
                                    color: '#FF0072',
                                }, style: {
                                    strokeWidth: 2,
                                    stroke: '#FF0072',
                                }, type: 'smoothstep'
                            }}
                            onConnect={onConnect}
                            onInit={setReactFlowInstance}
                            onDrop={onDrop}
                            onDragOver={onDragOver}
                            fitView
                        >
                            <Controls/>
                        </ReactFlow>
                    </div>
                </div>
                <div className={'w-72 h-full border-l-2 border-[#FF0072] p-2'}>
                    <p className={'text-2xl font-black'}>Настройки для узла</p>
                    {nodeInfo && (<p className={'text-2xl text-[#FF0072] font-black'}>{nodeInfo.data.label}</p>)}
                    {nodeInfo && (
                        <div className={'border-2 border-[#FF0072] p-2 h-96 mt-4'}>
                            всякие настройки
                        </div>
                    )}
                </div>
            </ReactFlowProvider>
        </div>
    );
};

export default DnDFlow;
