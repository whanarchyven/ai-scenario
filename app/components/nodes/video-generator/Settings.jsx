'use client'
import React, {useState} from 'react';

const Settings = (props) => {


    //nodes,updateNodes,nodeId

    //styleType
    //promptText
    ///duration

    const [styleType, setStyleType] = useState(props.styleType ?? 'realistic')
    const [promptText, setPromptText] = useState(props.promptText ?? '')


    const updateNode = () => {
        let nodeIndex = props.nodes.findIndex(item => item.id == props.nodeId)
        let temp = [...props.nodes]
        temp[nodeIndex].data.styleType = styleType
        temp[nodeIndex].data.promptText = promptText
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
            <div className={'flex bg-gray-100 p-2 flex-col gap-4'}>
                <div className={'w-full flex flex-col gap-2'}>
                    <p>Ключевые слова для генерации</p>
                    <textarea className={'p-1 rounded-lg'} rows={5} value={props.promptText} onChange={(event) => {
                        setPromptText(event.target.value)
                    }}>
                        {props.promptText}
                    </textarea>
                </div>
                <div className={'w-full flex flex-col gap-2'}>
                    <p>Стиль</p>
                    <select className={'w-full rounded-lg p-1 text-sm bg-white'} onChange={(event) => {
                        setStyleType(event.target.value)
                    }} value={styleType}>
                        <option value={'documentary'}>Документальный</option>
                        <option value={'animation'}>Анимационный</option>
                        <option value={'gaming'}>Игровой</option>
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