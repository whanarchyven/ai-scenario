'use client'
import React, {useState} from 'react';
import ResourceTabType from "./ui/ResourceTabType";
import ResourceDropDown from "@/app/components/nodes/spider/ui/ResourceDropDown";
import Image from "next/image";

const Settings = (props) => {


    //nodes,updateNodes,nodeId

    const [resources,setResources]=useState(props.resources??[''])
    const [category,setCategory]=useState(props.category??'x')

    const handleChange=(value,index)=>{
        let temp=[...resources]
        temp[index]=value
        setResources([...temp])
    }

    const addResource=()=>{
        setResources([...resources, ''])
    }

    const deleteResource=(resource)=>{
        let temp=[...resources]
        console.log(resource)
        let index=temp.findIndex(item=>item===resource)
        console.log(index)
        temp.splice(index,1)
        console.log(temp)
        setResources([...temp])
    }

    const updateNode=()=>{
        let nodeIndex=props.nodes.findIndex(item=>item.id==props.nodeId)
        let temp=[...props.nodes]
        temp[nodeIndex].resources=resources
        temp[nodeIndex].category=category
        props.updateNodes([...temp]);
    }

    const [isSaved,setIsSaved]=useState(false);
    const saveData=()=>{
        setIsSaved(true)
        setTimeout(()=>{setIsSaved(false)},3000)
    }

    return (
        <div className={'h-full flex flex-col justify-between gap-12'}>
            <div className={'flex bg-gray-100 p-2 flex-col gap-2'}>
                <div className={'w-full flex flex-col gap-2'}>
                    <p>Категория:</p>
                    <ResourceDropDown category={category} setCategory={setCategory}/>
                </div>
                <p>Ресурсы:</p>
                {resources.map((resource, counter) => {
                    return (
                        <div className={'flex justify-between gap-3'}>
                            <input value={resource} className={'w-full rounded-lg p-1 text-sm'} onChange={((event) => {
                                handleChange(event.target.value, counter)
                            })}/>
                            <div onClick={() => {
                                deleteResource(resource)
                            }} className={'w-4 aspect-square relative cursor-pointer'}>
                                <Image src={'/icons/delete.svg'} alt={'delete'} layout={'fill'}/>
                            </div>
                        </div>
                    )
                })}
                <div onClick={() => {
                    addResource()
                }}
                     className={'w-full p-2 cursor-pointer rounded-lg text-white bg-pink-600 flex items-center justify-center'}>
                    Добавить ресурс
                </div>
            </div>
            <div onClick={() => {
                updateNode()
                saveData()
            }}
                 className={'w-full p-2 cursor-pointer rounded-lg text-pink-600 border-2 h-12 border-pink-600 flex items-center justify-center'}>
                {!isSaved?'Сохранить':'Сохранено!'}
            </div>
        </div>
    );
};

export default Settings;