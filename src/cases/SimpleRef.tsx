import React, { useRef } from 'react';

const SimpleRef = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const onClick = () => {
        console.log('INPUT VALUE: ', inputRef.current?.value);
    }

    const onClickFocus = () => {
        console.log('Focus input');
        inputRef.current?.focus();
    }

    return (
        <div>
            <input ref={inputRef} />
            <button onClick={onClick}>Log value</button>
            <button onClick={onClickFocus}>Focus on input</button>
        </div>
    );
};

export default SimpleRef;