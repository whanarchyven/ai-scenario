import React, { useState } from 'react';

const VoiceSelector=(props)=> {
    const [selectedVoice, setSelectedVoice] = useState(props.voice??null);
    const [speaking, setSpeaking] = useState(false);

    const voices = window.speechSynthesis.getVoices();

    const handleVoiceChange = (event) => {
        setSelectedVoice(event.target.value);
        props.updateVoice(event.target.value)
    };

    const handlePlayVoice = () => {
        if (!selectedVoice) return;
        const message = new SpeechSynthesisUtterance('This voice will be speak your text');
        message.voice = voices.find(voice => voice.name === selectedVoice);
        window.speechSynthesis.speak(message);
        setSpeaking(true);
        message.onend = () => {
            setSpeaking(false);
        };
    };

    return (
        <div className={'flex gap-2 items-center'}>
            <select className={'p-1 bg-white rounded-lg w-full'} value={selectedVoice} onChange={handleVoiceChange}>
                <option value="" disabled>Выберите голос</option>
                {voices.map(voice => (
                    <option key={voice.name} value={voice.name}>{voice.name}</option>
                ))}
            </select>
            <img src={'/icons/play.svg'} className={'w-5 aspect-square cursor-pointer'} onClick={handlePlayVoice}>
                {/*{speaking ? 'Воспроизведение...' : 'Проиграть'}*/}
            </img>
        </div>
    );
}

export default VoiceSelector;