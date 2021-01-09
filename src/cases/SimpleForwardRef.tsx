import React from 'react';

type ForwardedInputProps = {
    placeholder?: string
};

const ForwardedInput = React.forwardRef<HTMLInputElement, ForwardedInputProps>(({ placeholder }, ref) => (
    <input ref={ref} placeholder={placeholder} />
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