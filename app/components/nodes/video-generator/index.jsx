import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

export default memo(function Spider({ data, isConnectable }){
    return (
        <div className={'border-2 border-[#B71C1C] p-2 text-[#B71C1C] rounded-full'}>
            <Handle
                type="target"
                position={Position.Left}
                style={{ background: '#B71C1C' }}
                onConnect={(params) => console.log('handle onConnect', params)}
                isConnectable={isConnectable}
            />
            <div className={'flex gap-4 items-center w-fit'}>
                <p className={'font-black'}>Video Generator</p>
                <img className={'w-8 aspect-square'} src={'/nodes_icons/video-generator.svg'}/>
            </div>
            <Handle
                type="source"
                position={Position.Right}
                id="b"
                style={{ background: '#B71C1C' }}
                isConnectable={isConnectable}
            />
        </div>
    );
});