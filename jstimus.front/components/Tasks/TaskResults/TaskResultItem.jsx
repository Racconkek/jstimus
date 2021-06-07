import React from "react";

export default function TaskResultItem({item, status}) {
    return item ? <div className={'Assertions'}>
        <span>{item.ancestorTitles ? item.ancestorTitles.join(', ') : ''}</span>
        <span>{item.title ? item.title : ''}</span>
        <span className={item.status && item.status === 'passed' ? 'Passed' : 'Failed'}>
            {item.status ? item.status : ''}
        </span>
        {!status && <span>{item.failureMessages}</span>}
    </div> : ''
}

