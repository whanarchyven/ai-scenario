import React from 'react';
import Image from "next/image";

const ResourceTabType = (props) => {

    const getCategoryIcon=(category)=>{
        const categories= new Map();
        categories.set('x','/resources_categories/x.svg')
        categories.set('linkedin','/resources_categories/linkedin.svg')
        categories.set('telegram','/resources_categories/telegram.svg')
        categories.set('web','/resources_categories/web.svg')
        categories.set('facebook','/resources_categories/facebook.svg')
        return categories.get(category);
    }

    return (
        <div className={'flex cursor-pointer items-center w-full gap-3'}>
            <div className={'w-8 aspect-square relative'}>
                <Image src={getCategoryIcon(props.category)} alt={props.category} layout={'fill'}/>
            </div>
            <p className={'text-black font-normal'}>{props.category}</p>
        </div>
    );
};

export default ResourceTabType;