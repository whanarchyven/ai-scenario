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

            <div className="w-full cursor-grabbing" onDragStart={(event) => onDragStart(event, 'voiceNode')} draggable>
                <div className={'border-2 border-[#5B699C] p-2 text-[#5B699C] rounded-full'}>
                    <div className={'flex gap-4 items-center justify-center w-full'}>
                        <p className={'font-black text-2xl'}>Voice</p>
                        <img className={'w-8 aspect-square'} src={'/nodes_icons/voice.svg'}/>
                    </div>
                </div>
            </div>
            <div className="w-full cursor-grabbing" onDragStart={(event) => onDragStart(event, 'aicharmNode')} draggable>
                <div className={'border-2 border-[#e12b80] p-2 text-[#e12b80] rounded-full'}>
                    <div className={'flex gap-4 items-center justify-center w-full'}>
                        <p className={'font-black text-2xl'}>AICHARM</p>
                        <img className={'w-8 aspect-square'} src={'/nodes_icons/aicharm.jpeg'}/>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar