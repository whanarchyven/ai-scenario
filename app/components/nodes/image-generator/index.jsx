import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

export default memo(function Spider({ data, isConnectable }){
    return (
        <div className={'border-2 border-[#7600FF] p-2 text-[#7600FF] rounded-full'}>
            <Handle
                type="target"
                position={Position.Left}
                style={{ background: '#7600FF' }}
                onConnect={(params) => console.log('handle onConnect', params)}
                isConnectable={isConnectable}
            />
            <div className={'flex gap-4 items-center w-fit'}>
                <p className={'font-black'}>Image Generator</p>
                <img className={'w-8 aspect-square'} src={'/nodes_icons/image-generation.svg'}/>
            </div>
            <Handle
                type="source"
                position={Position.Right}
                id="b"
                style={{ background: '#7600FF' }}
                isConnectable={isConnectable}
            />
        </div>
    );
});