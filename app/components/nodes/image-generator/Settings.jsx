'use client'
import React, {useState} from 'react';

const Settings = (props) => {


    //nodes,updateNodes,nodeId

    //styleType
    //promptText
    ///division

    const [styleType, setStyleType] = useState(props.styleType ?? 'realistic')
    const [division, setDivision] = useState(props.styleType ?? '1920x1080')
    const [promptText, setPromptText] = useState(props.promptText ?? '')


    const updateNode = () => {
        let nodeIndex = props.nodes.findIndex(item => item.id == props.nodeId)
        let temp = [...props.nodes]
        temp[nodeIndex].data.styleType = styleType
        temp[nodeIndex].data.promptText = promptText
        temp[nodeIndex].data.division = division
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
                        <option value={'realistic'}>Реалистичный</option>
                        <option value={'animation'}>Анимационный</option>
                        <option value={'abstract'}>Абстрактный</option>
                    </select>
                </div>
                <div className={'w-full flex flex-col gap-2'}>
                    <p>Разрешение и размер</p>
                    <select className={'w-full rounded-lg p-1 text-sm bg-white'} onChange={(event) => {
                        setDivision(event.target.value)
                    }} value={division}>
                        <option value={'1920x1080'}> 1920x1080 (Full HD): 1.5 MB - 3 MB</option>
                        <option value={'3840x2160'}> 3840x2160 (4K Ultra HD): 5 MB - 10 MB</option>
                        <option value={'2560x1440'}> 2560x1440 (Quad HD): 3 MB - 6 MB</option>
                        <option value={'1280x720'}> 1280x720 (HD): 500 KB - 1.5 MB</option>
                        <option value={'1366x768'}> 1366x768: 700 KB - 1.5 MB</option>
                        <option value={'1600x900'}> 1600x900: 1 MB - 2.5 MB</option>
                        <option value={'2560x1600'}> 2560x1600: 4 MB - 8 MB</option>
                        <option value={'1680x1050'}> 1680x1050: 1.5 MB - 3 MB</option>
                        <option value={'1440x900'}> 1440x900: 1 MB - 2.5 MB</option>
                        <option value={'1280x800'}> 1280x800: 600 KB - 1.5 MB</option>
                        <option value={'1024x768'}> 1024x768: 400 KB - 1 MB</option>
                        <option value={'1280x1024'}> 1280x1024: 800 KB - 2 MB</option>
                        <option value={'1920x1200'}> 1920x1200: 1.5 MB - 3 MB</option>
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