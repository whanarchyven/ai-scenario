import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

export default memo(function Spider({ data, isConnectable }){
    return (
        <div className={'border-2 border-[#039B00] p-2 text-[#039B00] rounded-full'}>
            <Handle
                type="target"
                position={Position.Left}
                style={{ background: '#039B00' }}
                onConnect={(params) => console.log('handle onConnect', params)}
                isConnectable={isConnectable}
            />
            <div className={'flex gap-4 items-center w-fit'}>
                <p className={'font-black'}>Prompter</p>
                <img className={'w-8 aspect-square'} src={'/nodes_icons/prompter.svg'}/>
            </div>
            <Handle
                type="source"
                position={Position.Right}
                id="b"
                style={{ background: '#039B00' }}
                isConnectable={isConnectable}
            />
        </div>
    );
});