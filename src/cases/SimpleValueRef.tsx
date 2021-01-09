import React, { useState, useRef } from 'react';

const SimpleValueRef = () => {
    const [show, setShow] = useState(false);
    let count = 0;
    let refCount = useRef(0);

    const increment = () => {
        refCount.current++;
        count++;
        console.log('The count: ', count)
        console.log('The refCount: ', refCount)
    };

    const showCounter = () => setShow(true);

    console.log(`Rendering SimpleValueRef with refCount as ${refCount.current} and count as ${count}`)
    return (
        <div>
            <button onClick={increment}>Click to increment!</button>
            <button onClick={showCounter}>Show counter</button>
            {show && <p>Times you clicked on button: with ref {refCount.current}, without ref {count}</p>}
        </div>
    )
};

export default SimpleValueRef;