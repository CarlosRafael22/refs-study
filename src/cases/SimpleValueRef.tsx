import React, { useState, useRef } from 'react';

const SimpleValueRef = () => {
    const [show, setShow] = useState(false);
    let count = 0;
    let refCount = useRef(0);

    const increment = () => {
        refCount.current++;
        count++;
        console.log('O count: ', count)
        console.log('O ref count: ', refCount)
    };

    const showCounter = () => setShow(true);

    console.log(`Rendering SimpleValueRef with ref ${refCount.current}, without ref ${count}`)
    return (
        <div>
            <button onClick={increment}>Click here!</button>
            <button onClick={showCounter}>Show counter</button>
            {show && <p>Times you clicked on button: with ref {refCount.current}, without ref {count}</p>}
        </div>
    )
};

export default SimpleValueRef;