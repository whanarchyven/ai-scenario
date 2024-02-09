'use client'
import React, {useState} from 'react';
import ResourceTabType from "./ui/ResourceTabType";
import ResourceDropDown from "@/app/components/nodes/spider/ui/ResourceDropDown";
import Image from "next/image";
import {classList} from "@/app/components/helpers/classList";

const Settings = (props) => {


    //nodes,updateNodes,nodeId

    const [compressionDegree,setCompressionDegree]=useState(props.compressionDegree ??'summary')
    const [makeSummary,setMakeSummary]=useState(props.makeSummary??false)


    const updateNode=()=>{
        let nodeIndex=props.nodes.findIndex(item=>item.id==props.nodeId)
        let temp=[...props.nodes]
        temp[nodeIndex].data.compressionDegree=compressionDegree
        temp[nodeIndex].data.makeSummary=makeSummary
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
                    <p>Степень сжатия:</p>
                    <select className={'w-full rounded-lg p-1 text-sm bg-white'} onChange={(event)=>{setCompressionDegree(event.target.value)}} value={compressionDegree}>
                        <option value={'summary'}>Summary</option>
                        <option value={'annotation'}>Annotation</option>
                        <option value={'full'}>Full retelling</option>
                    </select>
                </div>
                <div onClick={()=>{setMakeSummary(!makeSummary)}} className={'flex cursor-pointer items-center gap-3'}>
                    {makeSummary ? <img src={'/icons/checkbox_active.svg'}/> :
                        <img src={'/icons/checkbox.svg'}/>}
                    <p className={'text-sm'}>Save key words and phrases</p>
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