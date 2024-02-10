import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

export default memo(function Voice({ data, isConnectable }){
    return (
        <div className={'border-2 border-[#00CCCC] p-2 text-[#00CCCC] rounded-full'}>
            <Handle
                type="target"
                position={Position.Left}
                style={{ background: '#00CCCC' }}
                onConnect={(params) => console.log('handle onConnect', params)}
                isConnectable={isConnectable}
            />
            <div className={'flex gap-4 items-center w-fit'}>
                <p className={'font-black'}>Clusterizator</p>
                <img className={'w-8 aspect-square'} src={'/nodes_icons/clusterizator.svg'}/>
            </div>
            <Handle
                type="source"
                position={Position.Right}
                id="b"
                style={{ background: '#00CCCC' }}
                isConnectable={isConnectable}
            />
        </div>
    );
});