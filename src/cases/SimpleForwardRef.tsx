import React from 'react';

const ForwardedInput = React.forwardRef<HTMLInputElement, any>((props, ref) => (
    <input ref={ref} placeholder={props.placeholder} />
));

const SimpleForwardRef = () => {
    const inputRef = React.useRef<HTMLInputElement>(null);

    const selectText = () => {
        inputRef.current?.select();
    }

    return (
        <div>
            <ForwardedInput ref={inputRef} placeholder="Type here"/>
            <button onClick={selectText}>Select text</button>
        </div>
    );
};

export default SimpleForwardRef;