import React, { useState, useRef } from 'react';

const CallbackRefDynamicChild = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const secRef = useRef<HTMLInputElement>(null);
    const [visible, setVisibility] = useState(false);

    const onClick = () => {
        console.log('INPUT VALUE: ', inputRef.current?.value);
        setVisibility(true);
    }

    const onFocusClick = () => {
        console.log('Focus on first input');
        inputRef.current?.focus();
    }

    const callbackRef = (node: HTMLInputElement) => {
        console.log('Attached node: ', node);
        if(node) {
            node.focus();
        }
    }

    console.log('Rendering: ', inputRef, secRef);
    return (
        <div>
            <input ref={inputRef} />
            <button onClick={onClick}>Unlock next input</button>
            {visible && (
                <>
                <input ref={callbackRef} />
                <button onClick={onFocusClick}>Focus on first input</button>
                </>
            )}
        </div>
    );
};

export default CallbackRefDynamicChild;