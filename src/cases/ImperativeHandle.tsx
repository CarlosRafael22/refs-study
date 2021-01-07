import React, { useRef, forwardRef, useImperativeHandle } from 'react';

type BoxProps = {
    size: string,
    color: string
}

type IncrementedRef = {
    getYLocation: () => number | undefined,
    current: HTMLDivElement | null
}

const Box = forwardRef<IncrementedRef, BoxProps>(({size, color}, ref) => {
    const divRef = useRef<HTMLDivElement>(null);
    useImperativeHandle(ref, () => ({
        getYLocation: () => divRef.current?.getBoundingClientRect().top,
        current: divRef.current
    }));

    return (
        <div style={{
            height: size,
            width: size,
            backgroundColor: color,
            margin: '0 auto'
        }}
        ref={divRef}></div>
    );
});

const ImperativeHandle = () => {
    const refs = [useRef<IncrementedRef>(null), useRef<IncrementedRef>(null), useRef<IncrementedRef>(null)];

    const goToBox = (position: number) => {
        console.log('Go to box: ', refs[position].current?.current)
        const boxTop = refs[position].current?.getYLocation();
        window.scrollTo({ top: boxTop, behavior: 'smooth'})
    }

    return (
        <>
        <div>
            <button onClick={() => goToBox(0)}>Go to 1st box</button>
            <button onClick={() => goToBox(1)}>Go to 2nd box</button>
            <button onClick={() => goToBox(2)}>Go to 3rd box</button>
        </div>
        <Box size='500px' color='red' ref={refs[0]} />
        <Box size='500px' color='blue' ref={refs[1]} />
        <Box size='500px' color='green' ref={refs[2]} />
        </>
    );
};

export default ImperativeHandle;