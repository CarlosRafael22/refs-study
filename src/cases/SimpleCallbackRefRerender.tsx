import React, { useState } from 'react';

const SimpleCallbackRefRerender = () => {
    let inputRef: HTMLInputElement;
    const [count, setCount] = useState(0);

    const onClick = () => {
        console.log('INPUT VALUE: ', inputRef?.value);
    }

    const onFocusClick = () => {
        console.log('Focus input');
        inputRef?.focus();
    }

    const onRerenderClick = () => {
        console.log('Clicked to re-render');
        setCount(count+1);
    }

    return (
        <div>
            <input ref={node => { 
                console.log('Attached node: ', node)
                if (node) {
                    inputRef = node;
                }
             }} />
            <button onClick={onClick}>Log value</button>
            <button onClick={onFocusClick}>Focus on input</button>
            <button onClick={onRerenderClick}>Re-render count {count}</button>
        </div>
    );
};

export default SimpleCallbackRefRerender;