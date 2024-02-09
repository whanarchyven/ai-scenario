import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

export default memo(function Spider({ data, isConnectable }){
    return (
        <div className={'border-2 border-[#6ECDFB] p-2 text-[#6ECDFB] rounded-full'}>
            <Handle
                type="target"
                position={Position.Left}
                style={{ background: '#6ECDFB' }}
                onConnect={(params) => console.log('handle onConnect', params)}
                isConnectable={isConnectable}
            />
            <div className={'flex gap-4 items-center w-fit'}>
                <p className={'font-black'}>Spider</p>
                <img className={'w-8 aspect-square'} src={'/nodes_icons/spider.svg'}/>
            </div>
            <Handle
                type="source"
                position={Position.Right}
                id="b"
                style={{ background: '#6ECDFB' }}
                isConnectable={isConnectable}
            />
        </div>
    );
});