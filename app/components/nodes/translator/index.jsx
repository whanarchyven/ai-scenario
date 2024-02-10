import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

export default memo(function Voice({ data, isConnectable }){
    return (
        <div className={'border-2 border-[#FFB800] p-2 text-[#FFB800] rounded-full'}>
            <Handle
                type="target"
                position={Position.Left}
                style={{ background: '#FFB800' }}
                onConnect={(params) => console.log('handle onConnect', params)}
                isConnectable={isConnectable}
            />
            <div className={'flex gap-4 items-center w-fit'}>
                <p className={'font-black'}>Translator</p>
                <img className={'w-8 aspect-square'} src={'/nodes_icons/translator.svg'}/>
            </div>
            <Handle
                type="source"
                position={Position.Right}
                id="b"
                style={{ background: '#FFB800' }}
                isConnectable={isConnectable}
            />
        </div>
    );
});