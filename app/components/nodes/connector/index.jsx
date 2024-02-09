import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

export default memo(function Spider({ data, isConnectable }){
    return (
        <div className={'border-2 border-[#FF3B30] p-2 text-[#FF3B30] rounded-full'}>
            <Handle
                type="target"
                position={Position.Left}
                style={{ background: '#FF3B30' }}
                onConnect={(params) => console.log('handle onConnect', params)}
                isConnectable={isConnectable}
            />
            <div className={'flex gap-4 items-center w-fit'}>
                <p className={'font-black'}>Connector</p>
                <img className={'w-8 aspect-square'} src={'/nodes_icons/connector.svg'}/>
            </div>
            <Handle
                type="source"
                position={Position.Right}
                id="b"
                style={{ background: '#FF3B30' }}
                isConnectable={isConnectable}
            />
        </div>
    );
});