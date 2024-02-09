'use client'
import React, {useState} from 'react';

const Settings = (props) => {


    //nodes,updateNodes,nodeId

    //contentType
    //promptTemplate

    const [contentType,setContentType]=useState(props.contentType ??'text')
    const [promptTemplate,setPromptTemplate]=useState(props.promptTemplate??'')


    const updateNode=()=>{
        let nodeIndex=props.nodes.findIndex(item=>item.id==props.nodeId)
        let temp=[...props.nodes]
        temp[nodeIndex].data.contentType=contentType
        temp[nodeIndex].data.promptTemplate=promptTemplate
        props.updateNodes([...temp]);
    }

    const [isSaved,setIsSaved]=useState(false);
    const saveData=()=>{
        setIsSaved(true)
        setTimeout(()=>{setIsSaved(false)},3000)
    }

    const [isLoading,setIsLoading]=useState('false')

    return (
        <div className={'h-full flex flex-col justify-between gap-12'}>
            <div className={'flex bg-gray-100 p-2 flex-col gap-2'}>
                <div className={'w-full flex flex-col gap-2'}>
                    <p>Шаблон промпта:</p>
                    <textarea className={'p-1 rounded-lg'} rows={5} value={props.promptTemplate} onChange={(event)=>{setPromptTemplate(event.target.value)}}>
                        {props.promptTemplate}
                    </textarea>
                </div>
                <div className={'w-full flex flex-col gap-2'}>
                    <p>Тип контента:</p>
                    <select className={'w-full rounded-lg p-1 text-sm bg-white'} onChange={(event) => {
                        setContentType(event.target.value)
                    }} value={contentType}>
                        <option value={'text'}>Текст</option>
                        <option value={'photo'}>Фото</option>
                        <option value={'video'}>Видео</option>
                    </select>
                </div>
            </div>
            <div onClick={() => {
                updateNode()
                console.log(props.nodes)
                saveData()
            }}
                 className={'w-full p-2 cursor-pointer rounded-lg text-pink-600 border-2 h-12 border-pink-600 flex items-center justify-center'}>
                {!isSaved ? 'Сохранить' : 'Сохранено!'}
            </div>
        </div>
    );
};

export default Settings;