import React, {useState, useRef, useCallback, useEffect} from 'react';
import ReactFlow, {
    ReactFlowProvider,
    addEdge,
    useNodesState,
    useEdgesState,
    Controls, MarkerType,
} from 'reactflow';
import 'reactflow/dist/style.css';

import Sidebar from './Sidebar';
import Spider from "@/app/components/nodes/spider";

import './dnd.css';
import VoiceRecognizer from "@/app/components/nodes/voice-recognizer";
import Aicharm from "@/app/components/nodes/aicharm";
import SettingsSpider from "@/app/components/nodes/spider/Settings";
import SettingsConnector from "@/app/components/nodes/connector/Settings";
import SettingsSummarizator from "@/app/components/nodes/summarizator/Settings";
import SettingsPrompter from "@/app/components/nodes/prompter/Settings";
import SettingsVoiceRecognizer from "@/app/components/nodes/voice-recognizer/Settings";
import SettingsVoiceGenerator from "@/app/components/nodes/voice-generator/Settings";
import SettingsImageGenerator from "@/app/components/nodes/image-generator/Settings";
import SettingsVideoGenerator from "@/app/components/nodes/video-generator/Settings";
import SettingsTranslator from "@/app/components/nodes/translator/Settings"
import SettingsClusterizator from "@/app/components/nodes/clusterizator/Settings"
import SettingsParser from "@/app/components/nodes/parser/Settings"
import Connector from "@/app/components/nodes/connector";
import Summarizator from "@/app/components/nodes/summarizator";
import Prompter from "@/app/components/nodes/prompter";
import VoiceGenerator from "@/app/components/nodes/voice-generator";
import ImageGenerator from "@/app/components/nodes/image-generator";
import VideoGenerator from "@/app/components/nodes/video-generator";
import Translator from "@/app/components/nodes/translator";
import Clusterizator from "@/app/components/nodes/clusterizator";
import Parser from "@/app/components/nodes/parser";

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
const getId = () => `dndnode_${Math.floor(Math.random() * 10000000000)}`;

const nodeTypes = {
    spiderNode: Spider,
    voiceRecognizerNode:VoiceRecognizer,
    aicharmNode:Aicharm,
    connectorNode:Connector,
    summarizatorNode:Summarizator,
    prompterNode:Prompter,
    voiceGeneratorNode:VoiceGenerator,
    imageGeneratorNode:ImageGenerator,
    videoGeneratorNode:VideoGenerator,
    translatorNode:Translator,
    clusterizatorNode:Clusterizator,
    parserNode:Parser
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

    const [tokens,setTokens]=useState(0)

    const RenderSettings=(node)=>{
        switch (node.data.label){
            case "spiderNode node":return <SettingsSpider nodes={nodes} updateNodes={setNodes} nodeId={nodeInfo.id} resources={nodeInfo.resources} category={nodeInfo.category}/>;
            case "connectorNode node":return <SettingsConnector nodes={nodes} updateNodes={setNodes} nodeId={nodeInfo.id} connectorKey={nodeInfo.data.connectorKey} category={nodeInfo.data.category}/>
            case "summarizatorNode node":return <SettingsSummarizator nodes={nodes} updateNodes={setNodes} nodeId={nodeInfo.id} compressionDegree={nodeInfo.data.compressionDegree} makeSummary={nodeInfo.data.makeSummary}/>
            case "prompterNode node":return <SettingsPrompter nodes={nodes} updateNodes={setNodes} nodeId={nodeInfo.id} contentType={nodeInfo.data.contentType} promptTemplate={nodeInfo.data.promptTemplate}/>
            case "voiceRecognizerNode node":return <SettingsVoiceRecognizer nodes={nodes} updateNodes={setNodes} nodeId={nodeInfo.id} language={nodeInfo.data.language} voiceSplitting={nodeInfo.data.voiceSplitting}  sensitivity={nodeInfo.data.sensitivity}/>
            case "voiceGeneratorNode node":return <SettingsVoiceGenerator nodes={nodes} updateNodes={setNodes} nodeId={nodeInfo.id} language={nodeInfo.data.language}  voice={nodeInfo.data.voice}/>
            case "imageGeneratorNode node":return <SettingsImageGenerator nodes={nodes} updateNodes={setNodes} nodeId={nodeInfo.id} styleType={nodeInfo.data.styleType}  promptText={nodeInfo.data.promptText} division={nodeInfo.data.division}/>
            case "videoGeneratorNode node":return <SettingsVideoGenerator nodes={nodes} updateNodes={setNodes} nodeId={nodeInfo.id} styleType={nodeInfo.data.styleType} duration={nodeInfo.data.duration} promptText={nodeInfo.data.promptText}/>
            case "translatorNode node":return <SettingsTranslator nodes={nodes} updateNodes={setNodes} nodeId={nodeInfo.id} firstLang={nodeInfo.data.firstLang} secondLang={nodeInfo.data.secondLang} dictionary={nodeInfo.data.dictionary}/>
            case "clusterizatorNode node":return <SettingsClusterizator nodes={nodes} updateNodes={setNodes} nodeId={nodeInfo.id} method={nodeInfo.data.method} sensitivity={nodeInfo.data.sensitivity}/>
            case "parserNode node":return <SettingsParser nodes={nodes} updateNodes={setNodes} nodeId={nodeInfo.id} resources={nodeInfo.resources} filter={nodeInfo.filter} repeat={nodeInfo.repeat}  />
        }
    }

    const calculateNodesPrice=(node)=>{
        switch (node.data.label){
            case 'spiderNode node':return 5
            case "connectorNode node":return 1
            case "summarizatorNode node":return 2
            case "prompterNode node":return 4
            case "voiceRecognizerNode node":return 3
            case "voiceGeneratorNode node":return 4
            case "imageGeneratorNode node":return 4
            case "videoGeneratorNode node":return 5
            case "translatorNode node":return 2
            case "clusterizatorNode node":return 3
            case "parserNode node":return 3
            default:return 0
        }
    }

    useEffect(()=>{
        let temp=0;
        nodes.map((item)=>{
            temp+=calculateNodesPrice(item)
        })
        setTokens(temp)
    },[nodes])

    const [isRunning,setIsRunning]=useState(false)

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
                            <div onClick={()=>{setIsRunning(true);}}
                                className={'flex items-center justify-center p-2 bg-green-400 rounded-full font-black'}>
                                Запустить
                            </div>
                            <div className={'font-black'}>
                                Токенов: <span className={'text-[#FF0072]'}>{tokens}</span>
                            </div>
                        </div>
                    </div>
                    <div className="reactflow-wrapper" ref={reactFlowWrapper}>
                        <ReactFlow
                            nodes={nodes} nodeTypes={nodeTypes}
                            edges={edges}
                            onNodesChange={onNodesChange}
                            onEdgesChange={onEdgesChange}
                            onNodesDelete={(nodes)=>{}}
                            onNodeClick={(event, node) => {
                                // console.log(nodes,node)
                                setNodeInfo(null)
                                setNodeInfo(node)
                            }}
                            defaultEdgeOptions={{
                                animated: true, markerEnd: {
                                    type: MarkerType.ArrowClosed,
                                    width: 13,
                                    height: 13,
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
                <div className={'w-96 h-full border-l-2 border-[#FF0072] p-2'}>
                    <p className={'text-2xl font-black'}>Настройки для узла</p>
                    {nodeInfo && (<p className={'text-2xl text-[#FF0072] font-black'}>{nodeInfo.data.label}</p>)}
                    {nodeInfo && (
                        <div>
                            {RenderSettings(nodeInfo)}
                        </div>
                    )}
                </div>
            </ReactFlowProvider>
        </div>
    );
};

export default DnDFlow;
