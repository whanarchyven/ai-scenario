'use client'
import React, {useState} from 'react';

const Settings = (props) => {


    //nodes,updateNodes,nodeId

    //method
    //sensitivity

    const [method, setMethod] = useState(props.method ?? 'automatic')
    const [sensitivity, setSensitivity] = useState(props.sensitivity ?? 3)


    const updateNode = () => {
        let nodeIndex = props.nodes.findIndex(item => item.id == props.nodeId)
        let temp = [...props.nodes]
        temp[nodeIndex].data.method = method
        temp[nodeIndex].data.sensitivity = sensitivity
        props.updateNodes([...temp]);
    }

    const [isSaved, setIsSaved] = useState(false);
    const saveData = () => {
        setIsSaved(true)
        setTimeout(() => {
            setIsSaved(false)
        }, 3000)
    }

    const [isLoading, setIsLoading] = useState('false')

    return (
        <div className={'h-full flex flex-col justify-between gap-12'}>
            <div className={'flex bg-gray-100 p-2 flex-col gap-2'}>
                <div className={'w-full flex flex-col gap-2'}>
                    <p>Определение метода кластеризации:</p>
                    <select className={'w-full rounded-lg p-1 text-sm bg-white'} onChange={(event) => {
                        setMethod(event.target.value)
                    }} value={method}>
                        <option value={'automatic'}>Автоматическое формирование категорий</option>
                        <option value={'default'}>Использование предопределённых категорий</option>

                    </select>
                </div>
                <div className={'w-full flex flex-col gap-2'}>
                    <p>Чувствительность: {sensitivity}</p>
                    <input
                        type="range"
                        min="1"
                        max="10"
                        value={sensitivity}
                        onChange={(event) => {
                            setSensitivity(event.target.value)
                        }}
                    />
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