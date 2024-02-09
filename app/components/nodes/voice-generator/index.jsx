import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

export default memo(function Voice({ data, isConnectable }){
    return (
        <div className={'border-2 border-[#98009B] p-2 text-[#98009B] rounded-full'}>
            <Handle
                type="target"
                position={Position.Left}
                style={{ background: '#98009B' }}
                onConnect={(params) => console.log('handle onConnect', params)}
                isConnectable={isConnectable}
            />
            <div className={'flex gap-4 items-center w-fit'}>
                <p className={'font-black'}>Voice Generator</p>
                <img className={'w-8 aspect-square'} src={'/nodes_icons/voice-generator.svg'}/>
            </div>
            <Handle
                type="source"
                position={Position.Right}
                id="b"
                style={{ background: '#98009B' }}
                isConnectable={isConnectable}
            />
        </div>
    );
});