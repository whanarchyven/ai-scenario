import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

export default memo(function Voice({ data, isConnectable }){
    return (
        <div className={'border-2 border-[#5B699C] p-2 text-[#5B699C] rounded-full'}>
            <Handle
                type="target"
                position={Position.Left}
                style={{ background: '#5B699C' }}
                onConnect={(params) => console.log('handle onConnect', params)}
                isConnectable={isConnectable}
            />
            <div className={'flex gap-4 items-center w-fit'}>
                <p className={'font-black'}>Voice Recognizer</p>
                <img className={'w-8 aspect-square'} src={'/nodes_icons/voice.svg'}/>
            </div>
            <Handle
                type="source"
                position={Position.Right}
                id="b"
                style={{ background: '#5B699C' }}
                isConnectable={isConnectable}
            />
        </div>
    );
});