import React, { HTMLProps, useCallback, useEffect, useRef, useState } from 'react';

interface BubbleProps extends HTMLProps<HTMLCanvasElement> {
    x: number;
    y: number;
    vx: number;
    vy: number;
    r: number;
    color: string;
}

export const Bubble: React.FC<BubbleProps> = ({ x, y, vx, vy, r, color, ...other }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationRef = useRef<number>();

    const [state, setState] = useState({ x, y, vx, vy, r, color });

    const updateCanvasSize = useCallback(() => {
        if (!canvasRef.current) return;
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
    }, [canvasRef]);

    const drawBubble = useCallback((ctx: CanvasRenderingContext2D) => {
        const { x, y, r, color } = state;

        ctx.clearRect(0, 0, canvasRef.current!.width, canvasRef.current!.height);
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.filter = 'blur(200px)';
        ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath();

        window.requestAnimationFrame(doAnimation);
    }, [canvasRef, state]);

    const doAnimation = useCallback(() => {
        if (!canvasRef.current) return;
        const ctx = canvasRef.current.getContext('2d');
        if (!ctx) return;

        const x = state.x + state.vx;
        const y = state.y + state.vy;
        const vx = state.vx * (x > canvasRef.current.width || x < 0 ? -1 : 1);
        const vy = state.vy * (y > canvasRef.current.height || y < 0 ? -1 : 1);

        setState({ ...state, x, y, vx, vy });
    }, [canvasRef, state, setState]);

    useEffect(() => {
        const ctx = canvasRef.current!.getContext('2d')!;
        drawBubble(ctx);
    }, [state]);

    useEffect(() => {
        updateCanvasSize();
        animationRef.current = window.requestAnimationFrame(doAnimation);
        window.addEventListener('resize', updateCanvasSize);
        return () => {
            window.cancelAnimationFrame(animationRef.current!);
            window.removeEventListener('resize', updateCanvasSize);
        };
    }, [canvasRef]);

    return (
        <canvas ref={canvasRef} {...other} />
    );
};
