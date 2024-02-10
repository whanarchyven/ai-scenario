'use client'
import React, {useState} from 'react';
import Image from "next/image";

const Settings = (props) => {


    //nodes,updateNodes,nodeId
    //resources
    //filter
    //repeat

    const [resources,setResources]=useState(props.resources??[''])
    const [filter,setFilter]=useState(props.filter??'')
    const [repeat,setRepeat]=useState(props.repeat??'15minutes')

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
        temp[nodeIndex].repeat=repeat
        temp[nodeIndex].filter=filter
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
                <p>Ресурсы:</p>
                {resources.map((resource, counter) => {
                    return (
                        <div key={counter} className={'flex justify-between gap-3'}>
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
                <div className={'w-full flex flex-col gap-2'}>
                    <p>Фильтр:</p>
                    <textarea className={'p-1 rounded-lg'} rows={5} value={filter} onChange={(event) => {
                        setFilter(event.target.value)
                    }}>
                        {filter}
                    </textarea>
                </div>
                <div className={'w-full flex flex-col gap-2'}>
                    <p>Определение метода кластеризации:</p>
                    <select className={'w-full rounded-lg p-1 text-sm bg-white'} onChange={(event) => {
                        setRepeat(event.target.value)
                    }} value={repeat}>
                        <option value={'15minutes'}>каждые 15 минут</option>
                        <option value={'30minutes'}>каждые 30 минут</option>
                        <option value={'60minutes'}>каждые 60 минут</option>
                        <option value={'2hours'}>каждые 2 часа</option>
                        <option value={'4hours'}>каждые 4 часа</option>
                        <option value={'6hours'}>каждые 6 часов</option>
                        <option value={'12hours'}>каждые 12 часов</option>
                        <option value={'24hours'}>каждые 24 часа</option>
                        <option value={'7days'}>каждые 7 дней</option>
                    </select>
                </div>
            </div>
            <div onClick={() => {
                updateNode()
                saveData()
            }}
                 className={'w-full p-2 cursor-pointer rounded-lg text-pink-600 border-2 h-12 border-pink-600 flex items-center justify-center'}>
                {!isSaved ? 'Сохранить' : 'Сохранено!'}
            </div>
        </div>
    );
};

export default Settings;