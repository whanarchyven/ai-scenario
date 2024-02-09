import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

export default memo(function Aicharm({ data, isConnectable }){
    return (
        <div className={'border-2 border-[#e12b80   ] p-2 text-[#e12b80 ] rounded-full'}>
            <Handle
                type="target"
                position={Position.Left}
                style={{ background: '#e12b80   ' }}
                onConnect={(params) => console.log('handle onConnect', params)}
                isConnectable={isConnectable}
            />
            <div className={'flex gap-4 items-center w-fit'}>
                <p className={'font-black'}>AICHARM</p>
                <img className={'w-8 aspect-square'} src={'/nodes_icons/aicharm.jpeg'}/>
            </div>
            <Handle
                type="source"
                position={Position.Right}
                id="b"
                style={{ background: '#e12b80   ' }}
                isConnectable={isConnectable}
            />
        </div>
    );
});