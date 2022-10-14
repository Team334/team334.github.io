import React, { HTMLProps, useCallback, useEffect, useRef, useState } from 'react';
import { isMobile } from 'react-device-detect';
import NextImage from 'next/image';
import classNames from 'classnames';
import firstFrame from '../public/media/ultor/01.webp';

export const Ultor: React.FC<HTMLProps<HTMLCanvasElement>> = ({ className }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const requestIdRef = useRef<number | null>(null);

    const [frames, setFrames] = useState<HTMLImageElement[]>();
    const [mobile, setMobile] = useState<boolean>(true);

    useEffect(() => setMobile(isMobile), []);

    // Load a fifth of the frames at a time to improve user experience for slow connections
    // Each time this function runs, it updates the frames state and then runs again since the state has just updated
    useEffect(() => {
        if (mobile || !canvasRef.current) return;

        // Get the index of the first unloaded frame
        const offset = frames ? frames.findIndex((value) => !value) : 0;
        // Stops updating once all frames have been loaded
        if (offset >= 0) {
            const loadedFrames: HTMLImageElement[] = frames ? [...frames] : [];
            for (let i = offset; i < 50; i += 5) {
                const img = new Image();
                img.src = `/media/ultor/${(i + 1).toString().padStart(2, '0')}.webp`;
                loadedFrames[i] = img;
            }
            setFrames(loadedFrames);
        }
    }, [mobile, canvasRef.current, frames]);

    const paintFrame = useCallback(() => {
        if (frames) {
            const desiredFrame = Math.floor(document.documentElement.scrollTop / document.documentElement.clientHeight * 49);
            // If the desired frame is not yet loaded, paints the last available frame
            // Searches for any non-null value that is behind the desired frame by reversing the array and then subtracting that number
            const actualFrame = desiredFrame - frames.slice(0, desiredFrame + 1).reverse().findIndex((value) => value);
            const ctx = canvasRef.current!.getContext('2d');
            if (frames[actualFrame]) {
                ctx?.clearRect(0, 0, canvasRef.current!.width, canvasRef.current!.height);
                ctx?.drawImage(frames[actualFrame], 0, 0, 750, 750);
            }
        }
    }, [frames, canvasRef.current]);

    const updateFrame = useCallback(() => {
        if (!canvasRef.current || !frames) return;
        requestIdRef.current = window.requestAnimationFrame(paintFrame);
    }, [canvasRef.current, requestIdRef, frames]);

    useEffect(() => {
        if (!frames) return;
        updateFrame();
        document.addEventListener('scroll', updateFrame);
        return () => {
            cancelAnimationFrame(requestIdRef.current!);
            document.removeEventListener('scroll', updateFrame);
        };
    }, [updateFrame]);

    if (mobile) return null;

    return (
        <>
            <canvas ref={canvasRef} className={className} width={750} height={750} />
            {!frames && (
                <div className={classNames('relative', className)}>
                    <NextImage priority loader={({ src }) => src} src={firstFrame} alt="Ultor" width={750} height={750} />
                </div>
            )}
        </>
    );
};
