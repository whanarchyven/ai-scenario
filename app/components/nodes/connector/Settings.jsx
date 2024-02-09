'use client'
import React, {useState} from 'react';
import ResourceTabType from "./ui/ResourceTabType";
import ResourceDropDown from "@/app/components/nodes/spider/ui/ResourceDropDown";
import Image from "next/image";
import {classList} from "@/app/components/helpers/classList";

const Settings = (props) => {


    //nodes,updateNodes,nodeId

    const [key,setKey]=useState(props.connectorKey??'')
    const [category,setCategory]=useState(props.category??'x')


    const updateNode=()=>{
        let nodeIndex=props.nodes.findIndex(item=>item.id==props.nodeId)
        let temp=[...props.nodes]
        temp[nodeIndex].data.connectorKey=key
        temp[nodeIndex].data.category=category
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
                    <p>Категория:</p>
                    <ResourceDropDown category={category} setCategory={setCategory}/>
                </div>
                <p>Ключ:</p>
                <div className={'flex justify-between items-center gap-3'}>
                    <input value={key} className={'w-full rounded-lg p-1 text-sm'} onChange={((event) => {
                        setKey(event.target.value)
                    })}/>
                    <div onClick={()=>{setIsLoading('loading');setTimeout(()=>{setIsLoading('done')},3000)}} className={classList('w-6 h-6 relative flex items-center justify-center cursor-pointer',isLoading=='loading'?'animate-spin':'')}>
                        {isLoading == 'done' ? <img className={'w-full h-full'} src={'/icons/done.svg'}/> :
                            <img className={'w-full h-full'} src={'/icons/check_connection.svg'}/>}
                    </div>
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