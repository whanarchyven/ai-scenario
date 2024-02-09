import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

export default memo(function Spider({ data, isConnectable }){
    return (
        <div className={'border-2 border-[#669df6] p-2 text-[#669df6] rounded-full'}>
            <Handle
                type="target"
                position={Position.Left}
                style={{ background: '#669df6' }}
                onConnect={(params) => console.log('handle onConnect', params)}
                isConnectable={isConnectable}
            />
            <div className={'flex gap-4 items-center w-fit'}>
                <p className={'font-black'}>Summarizator</p>
                <img className={'w-8 aspect-square'} src={'/nodes_icons/summarizator.svg'}/>
            </div>
            <Handle
                type="source"
                position={Position.Right}
                id="b"
                style={{ background: '#669df6' }}
                isConnectable={isConnectable}
            />
        </div>
    );
});