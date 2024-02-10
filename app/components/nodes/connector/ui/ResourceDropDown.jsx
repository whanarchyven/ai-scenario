import React, {useState} from 'react';
import ResourceTabType from "@/app/components/nodes/spider/ui/ResourceTabType";

const ResourceDropDown = (props) => {
    const categories = ['x',
        'linkedin',
        'telegram',
        'web',
        'facebook'
    ]
    const [isOpen,setIsOpen]=useState(false)

    return (
        <div className={'w-full relative'}>
            <div onClick={()=>{setIsOpen(!isOpen)}} className={'w-full rounded-full bg-white py-2 px-4'}>
                <ResourceTabType category={props.category}/>
            </div>
            {isOpen&& (
                <div className={'flex absolute w-full top-[150%] flex-col gap-2 bg-white rounded-lg'}>
                    {categories.map((category) => <div key={category} className={'border-y-2 p-1'} onClick={() => {
                        props.setCategory(category);setIsOpen(false)
                    }}><ResourceTabType category={category}/></div>)}
                </div>
            )}
        </div>
    );
};

export default ResourceDropDown;