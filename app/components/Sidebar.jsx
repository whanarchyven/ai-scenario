import React from 'react';
import {Handle, Position} from "reactflow";

export const Sidebar= () => {
    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
    };

    return (
        <aside className={'flex flex-col gap-3'}>
            <div className="font-black text-xl">Доступные элементы</div>
            {/*<div className="dndnode input" onDragStart={(event) => onDragStart(event, 'input')} draggable>*/}
            {/*    Input Node*/}
            {/*</div>*/}
            {/*<div className="dndnode" onDragStart={(event) => onDragStart(event, 'default')} draggable>*/}
            {/*    Default Node*/}
            {/*</div>*/}
            {/*<div className="dndnode output" onDragStart={(event) => onDragStart(event, 'output')} draggable>*/}
            {/*    Output Node*/}
            {/*</div>*/}
            <div className="w-full cursor-grabbing" onDragStart={(event) => onDragStart(event, 'spiderNode')} draggable>
                <div className={'border-2 border-[#6ECDFB] p-2 text-[#6ECDFB] rounded-full'}>
                    <div className={'flex gap-4 items-center justify-center w-full'}>
                        <p className={'font-black text-2xl'}>Spider</p>
                        <img className={'w-8 aspect-square'} src={'/nodes_icons/spider.svg'}/>
                    </div>
                </div>
            </div>

            <div className="w-full cursor-grabbing" onDragStart={(event) => onDragStart(event, 'voiceRecognizerNode')}
                 draggable>
                <div className={'border-2 border-[#5B699C] p-2 text-[#5B699C] rounded-full'}>
                    <div className={'flex gap-4 items-center justify-center w-full'}>
                        <p className={'font-black text-lg'}>Voice Recognizer</p>
                        <img className={'w-8 aspect-square'} src={'/nodes_icons/voice.svg'}/>
                    </div>
                </div>
            </div>
            <div className="w-full cursor-grabbing" onDragStart={(event) => onDragStart(event, 'aicharmNode')}
                 draggable>
                <div className={'border-2 border-[#e12b80] p-2 text-[#e12b80] rounded-full'}>
                    <div className={'flex gap-4 items-center justify-center w-full'}>
                        <p className={'font-black text-2xl'}>AICHARM</p>
                        <img className={'w-8 aspect-square'} src={'/nodes_icons/aicharm.jpeg'}/>
                    </div>
                </div>
            </div>
            <div className="w-full cursor-grabbing" onDragStart={(event) => onDragStart(event, 'connectorNode')}
                 draggable>
                <div className={'border-2 border-[#FF3B30] p-2 text-[#FF3B30] rounded-full'}>
                    <div className={'flex gap-4 items-center justify-center w-full'}>
                        <p className={'font-black text-2xl'}>Connector</p>
                        <img className={'w-8 aspect-square'} src={'/nodes_icons/connector.svg'}/>
                    </div>
                </div>
            </div>
            <div className="w-full cursor-grabbing" onDragStart={(event) => onDragStart(event, 'summarizatorNode')}
                 draggable>
                <div className={'border-2 border-[#669df6] p-2 text-[#669df6] rounded-full'}>
                    <div className={'flex gap-4 items-center justify-center w-full'}>
                        <p className={'font-black text-xl'}>Summarizator</p>
                        <img className={'w-8 aspect-square'} src={'/nodes_icons/summarizator.svg'}/>
                    </div>
                </div>
            </div>
            <div className="w-full cursor-grabbing" onDragStart={(event) => onDragStart(event, 'prompterNode')}
                 draggable>
                <div className={'border-2 border-[#039B00] p-2 text-[#039B00] rounded-full'}>
                    <div className={'flex gap-4 items-center justify-center w-full'}>
                        <p className={'font-black text-xl'}>Prompter</p>
                        <img className={'w-8 aspect-square'} src={'/nodes_icons/prompter.svg'}/>
                    </div>
                </div>
            </div>
            <div className="w-full cursor-grabbing" onDragStart={(event) => onDragStart(event, 'voiceGeneratorNode')}
                 draggable>
                <div className={'border-2 border-[#98009B] p-2 text-[#98009B] rounded-full'}>
                    <div className={'flex gap-4 items-center justify-center w-full'}>
                        <p className={'font-black text-lg'}>Voice Generator</p>
                        <img className={'w-8 aspect-square'} src={'/nodes_icons/voice-generator.svg'}/>
                    </div>
                </div>
            </div>
            <div className="w-full cursor-grabbing" onDragStart={(event) => onDragStart(event, 'imageGeneratorNode')}
                 draggable>
                <div className={'border-2 border-[#7600FF] p-2 text-[#7600FF] rounded-full'}>
                    <div className={'flex gap-4 items-center justify-center w-full'}>
                        <p className={'font-black text-lg'}>Image Generator</p>
                        <img className={'w-8 aspect-square'} src={'/nodes_icons/image-generation.svg'}/>
                    </div>
                </div>
            </div>
            <div className="w-full cursor-grabbing" onDragStart={(event) => onDragStart(event, 'videoGeneratorNode')}
                 draggable>
                <div className={'border-2 border-[#B71C1C] p-2 text-[#B71C1C] rounded-full'}>
                    <div className={'flex gap-4 items-center justify-center w-full'}>
                        <p className={'font-black text-lg'}>Video Generator</p>
                        <img className={'w-8 aspect-square'} src={'/nodes_icons/video-generator.svg'}/>
                    </div>
                </div>
            </div>
            <div className="w-full cursor-grabbing" onDragStart={(event) => onDragStart(event, 'translatorNode')}
                 draggable>
                <div className={'border-2 border-[#FFB800] p-2 text-[#FFB800] rounded-full'}>
                    <div className={'flex gap-4 items-center justify-center w-full'}>
                        <p className={'font-black text-lg'}>Translator</p>
                        <img className={'w-8 aspect-square'} src={'/nodes_icons/translator.svg'}/>
                    </div>
                </div>
            </div>
            <div className="w-full cursor-grabbing" onDragStart={(event) => onDragStart(event, 'clusterizatorNode')}
                 draggable>
                <div className={'border-2 border-[#00CCCC] p-2 text-[#00CCCC] rounded-full'}>
                    <div className={'flex gap-4 items-center justify-center w-full'}>
                        <p className={'font-black text-lg'}>Clusterizator</p>
                        <img className={'w-8 aspect-square'} src={'/nodes_icons/clusterizator.svg'}/>
                    </div>
                </div>
            </div>
            <div className="w-full cursor-grabbing" onDragStart={(event) => onDragStart(event, 'parserNode')}
                 draggable>
                <div className={'border-2 border-[#FF9999] p-2 text-[#FF9999] rounded-full'}>
                    <div className={'flex gap-4 items-center justify-center w-full'}>
                        <p className={'font-black text-lg'}>Parser</p>
                        <img className={'w-8 aspect-square'} src={'/nodes_icons/parser.svg'}/>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar