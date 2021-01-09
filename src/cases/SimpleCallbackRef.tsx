import React, { useEffect } from 'react';

const SimpleCallbackRef = () => {
    let inputRef: HTMLInputElement;

    const onClick = () => {
        console.log('INPUT VALUE: ', inputRef?.value);
    }

    const onFocusClick = () => {
        console.log('Focus input');
        inputRef?.focus();
    }

    useEffect(() => {
        console.log('Mounted with inputRef: ', inputRef);

        return () => {
            console.log('Unmounted with inputRef: ', inputRef)
        }
    });

    console.log('Rendering')
    return (
        <div>
            <input ref={node => { 
                console.log('Attaching node: ', node)
                if (node) {
                    inputRef = node;
                }
             }} />
            <button onClick={onClick}>Log value</button>
            <button onClick={onFocusClick}>Focus on input</button>
        </div>
    );
};

export default SimpleCallbackRef;