'use client'
import React, {useState} from 'react';

const Settings = (props) => {


    //nodes,updateNodes,nodeId

    //firstLang
    //secondLang
    //dictionary

    const [firstLang, setFirstLang] = useState(props.firstLang ?? 'english')
    const [secondLang, setSecondLang] = useState(props.firstLang ?? 'english')
    const [dictionary,setDictionary]=useState(props.dictionary??'')


    const updateNode = () => {
        let nodeIndex = props.nodes.findIndex(item => item.id == props.nodeId)
        let temp = [...props.nodes]
        temp[nodeIndex].data.firstLang = firstLang
        temp[nodeIndex].data.secondLang = secondLang
        temp[nodeIndex].data.dictionary = dictionary
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
                    <p>Язык ввода:</p>
                    <select className={'w-full rounded-lg p-1 text-sm bg-white'} onChange={(event) => {
                        setFirstLang(event.target.value)
                    }} value={firstLang}>
                        <option value={'english'}> English</option>
                        <option value={'spanish'}> Español (Spanish)</option>
                        <option value={'mandarin chinese'}> 普通话 (Mandarin Chinese)</option>
                        <option value={'hindi'}> हिन्दी (Hindi)</option>
                        <option value={'arabic'}> العربية (Arabic)</option>
                        <option value={'portuguese'}> Português (Portuguese)</option>
                        <option value={'bengali'}> বাংলা (Bengali)</option>
                        <option value={'russian'}> Pусский (Russian)</option>
                        <option value={'japanese'}> 日本語 (Japanese)</option>
                        <option value={'german'}> Deutsch (German)</option>
                        <option value={'javanese'}> Javanese (Javanese)</option>
                        <option value={'punjabi (lahnda)'}> Lahnda (Punjabi)</option>
                        <option value={'wu chinese (wu)'}> Wu (Wu Chinese)</option>
                        <option value={'marathi'}> मराठी (Marathi)</option>
                        <option value={'vietnamese'}> Tiếng Việt (Vietnamese)</option>
                        <option value={'korean'}> 한국어 (Korean)</option>
                        <option value={'turkish'}> Türkçe (Turkish)</option>
                        <option value={'tamil'}> தமிழ் (Tamil)</option>
                        <option value={'urdu'}> اردو (Urdu)</option>
                        <option value={'italian'}> Italiano (Italian)</option>
                        <option value={'hausa'}> Hausa (Hausa)</option>
                        <option value={'thai'}> ภาษาไทย (Thai)</option>
                        <option value={'persian'}> فارسی (Persian)</option>
                        <option value={'eastern hindi (गढ़वळी)'}> गढ़वळी (Eastern Hindi)</option>
                        <option value={'malay'}> Melayu (Malay)</option>
                        <option value={'tagalog'}> Tagalog (Tagalog)</option>
                        <option value={'swahili'}> Kiswahili (Swahili)</option>
                        <option value={'yoruba'}> Yorùbá (Yoruba)</option>
                        <option value={'oromo'}> Oromo (Oromo)</option>
                        <option value={'igbo'}> Igbo (Igbo)</option>
                    </select>
                </div>
                <div className={'w-full flex flex-col gap-2'}>
                    <p>Язык перевода:</p>
                    <select className={'w-full rounded-lg p-1 text-sm bg-white'} onChange={(event) => {
                        setSecondLang(event.target.value)
                    }} value={secondLang}>
                        <option value={'english'}> English</option>
                        <option value={'spanish'}> Español (Spanish)</option>
                        <option value={'mandarin chinese'}> 普通话 (Mandarin Chinese)</option>
                        <option value={'hindi'}> हिन्दी (Hindi)</option>
                        <option value={'arabic'}> العربية (Arabic)</option>
                        <option value={'portuguese'}> Português (Portuguese)</option>
                        <option value={'bengali'}> বাংলা (Bengali)</option>
                        <option value={'russian'}> Pусский (Russian)</option>
                        <option value={'japanese'}> 日本語 (Japanese)</option>
                        <option value={'german'}> Deutsch (German)</option>
                        <option value={'javanese'}> Javanese (Javanese)</option>
                        <option value={'punjabi (lahnda)'}> Lahnda (Punjabi)</option>
                        <option value={'wu chinese (wu)'}> Wu (Wu Chinese)</option>
                        <option value={'marathi'}> मराठी (Marathi)</option>
                        <option value={'vietnamese'}> Tiếng Việt (Vietnamese)</option>
                        <option value={'korean'}> 한국어 (Korean)</option>
                        <option value={'turkish'}> Türkçe (Turkish)</option>
                        <option value={'tamil'}> தமிழ் (Tamil)</option>
                        <option value={'urdu'}> اردو (Urdu)</option>
                        <option value={'italian'}> Italiano (Italian)</option>
                        <option value={'hausa'}> Hausa (Hausa)</option>
                        <option value={'thai'}> ภาษาไทย (Thai)</option>
                        <option value={'persian'}> فارسی (Persian)</option>
                        <option value={'eastern hindi (गढ़वळी)'}> गढ़वळी (Eastern Hindi)</option>
                        <option value={'malay'}> Melayu (Malay)</option>
                        <option value={'tagalog'}> Tagalog (Tagalog)</option>
                        <option value={'swahili'}> Kiswahili (Swahili)</option>
                        <option value={'yoruba'}> Yorùbá (Yoruba)</option>
                        <option value={'oromo'}> Oromo (Oromo)</option>
                        <option value={'igbo'}> Igbo (Igbo)</option>
                    </select>
                </div>
                <div className={'w-full flex flex-col gap-2'}>
                    <p>Словарь специфических терминов</p>
                    <textarea className={'p-1 rounded-lg'} rows={5} value={dictionary} onChange={(event) => {
                        setDictionary(event.target.value)
                    }}>
                        {dictionary}
                    </textarea>
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