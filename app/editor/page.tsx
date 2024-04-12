"use client"
import ReactMarkdown from "react-markdown";
import React, {useRef, useState} from "react";
import markdownStyles from "@/app/posts/[...slug]/markdown-styles.module.css";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkStringify from "remark-stringify";
import remarkRehype from "remark-rehype";
import rehypeFormat from "rehype-format";
import rehypeMinifyWhitespace from "rehype-minify-whitespace";
import rehypeStringify from "rehype-stringify";
import {PrismLight as SyntaxHighlighter} from "react-syntax-highlighter";
import {prism} from "react-syntax-highlighter/dist/esm/styles/prism";
import {useAuth0} from "@auth0/auth0-react";
import remarkMath from 'remark-math'
import remarkGemoji from 'remark-gemoji'
import rehypeKatex from "rehype-katex";
import {Progress} from "@/components/shadcn/ui/progress";

export default function EditorPage() {
    const [markdown, setMarkdown] = useState("");
    const [cursorPosition, setCursorPosition] = useState(0);
    const textareaRef = useRef(null);
    const markdownRef = useRef(null);
    const [undoStack, setUndoStack] = useState<string[]>([]);
    const [redoStack, setRedoStack] = useState<string[]>([]);


    React.useEffect(() => {
        const savedText = localStorage.getItem('savedText');
        if (savedText) {
            setMarkdown(savedText);
        }
    }, []);


    React.useEffect(() => {
        let timeout: any;

        const handleScroll = (event: any) => {
            const {scrollTop, scrollHeight, clientHeight} = event.target;
            const percentage = scrollTop / (scrollHeight - clientHeight);
            const targetElement = event.target === markdownRef.current ? textareaRef.current : markdownRef.current;

            // Check if the scroll position is significantly different to avoid unnecessary updates
            // @ts-ignore
            if (Math.abs(targetElement.scrollTop - percentage * (targetElement.scrollHeight - targetElement.clientHeight)) > 5) {
                // @ts-ignore
                targetElement.scrollTop = percentage * (targetElement.scrollHeight - targetElement.clientHeight);
            }
        };

        const debouncedHandleScroll = (event: any) => {
            if (timeout) {
                clearTimeout(timeout);
            }
            timeout = setTimeout(() => handleScroll(event), 50); // Adjust the delay as needed
        };

        if (textareaRef.current && markdownRef.current) {
            // @ts-ignore
            textareaRef.current.addEventListener('scroll', debouncedHandleScroll);
            // @ts-ignore
            markdownRef.current.addEventListener('scroll', debouncedHandleScroll);
        }

        return () => {
            if (textareaRef.current && markdownRef.current) {
                // @ts-ignore
                textareaRef.current.removeEventListener('scroll', debouncedHandleScroll);
                // @ts-ignore
                markdownRef.current.removeEventListener('scroll', debouncedHandleScroll);
            }
        };
    }, []);


    const handleChange = (e: any) => {
        const newMarkdown = e.target.value;
        setRedoStack([]); // Clear redo stack when new changes are made
        setMarkdown(newMarkdown);
        setUndoStack((prevStack) => [...prevStack, markdown]);
        localStorage.setItem('savedText', newMarkdown);
    };

    const handleUndo = () => {
        if (undoStack.length === 0) return;

        const previousMarkdown = undoStack.pop() || "";
        setRedoStack((prevStack) => [markdown, ...prevStack]);
        setMarkdown(previousMarkdown);
        localStorage.setItem('savedText', previousMarkdown);

        // @ts-ignore
        textareaRef.current.focus();
    };

    const handleRedo = () => {
        if (redoStack.length === 0) return;

        const nextMarkdown = redoStack.shift() || "";
        setUndoStack((prevStack) => [...prevStack, markdown]);
        setMarkdown(nextMarkdown);
        localStorage.setItem('savedText', nextMarkdown);

        // @ts-ignore
        textareaRef.current.focus();
    };


    const handleButtonClick = (markdownText: string) => {
        setMarkdown((prevMarkdown) => {
            // @ts-ignore
            const selectionStart = textareaRef.current.selectionStart;
            // @ts-ignore
            const selectionEnd = textareaRef.current.selectionEnd;


            const lines = prevMarkdown.split('\n');
            const currentLineIndex = getLineNumber(prevMarkdown, selectionStart);
            const currentLine = lines[currentLineIndex];


            // Check if the previous line is a numbered list
            if (currentLine.match(/^\d+\.\s/)) {
                // @ts-ignore
                const nextNumber = parseInt(currentLine.match(/^\d+/)[0]) + 1;
                markdownText = `\n${nextNumber}. `;
            }


            const updatedMarkdown =
                prevMarkdown.slice(0, selectionStart) +
                markdownText +
                prevMarkdown.slice(selectionEnd);


            setCursorPosition(selectionStart + markdownText.length);
            return updatedMarkdown;
        });


        // @ts-ignore
        textareaRef.current.focus();
    };


    const getLineNumber = (text: string, cursorPosition: number) => {
        const lines = text.split('\n');
        let charCount = 0;
        for (let i = 0; i < lines.length; i++) {
            charCount += lines[i].length + 1; // +1 to account for the newline character
            if (charCount > cursorPosition) {
                return i;
            }
        }
        return lines.length - 1;
    };


    const handleTextareaClick = () => {
        // @ts-ignore
        textareaRef.current.focus();
    };


    const handleCursorPositionChange = (e: any) => {
        setCursorPosition(e.target.selectionStart);
    };


    const {user, isAuthenticated, isLoading, logout} = useAuth0();
    const [progress, setProgress] = useState(13);

    React.useEffect(() => {
        const timer = setTimeout(() => setProgress(70), 1000);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <div className={"flex justify-center items-center w-full h-[100vh]"}>
                <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-[2rem] md:text-5xl font-bold dark:text-white main">Loading
                    Editor...</h1>
                <Progress value={progress} className="w-3/5"/>
            </div>
        )
    }


    return (
        <div className='w-full h-full p-2'>
            <div className={"flex"}>
                <section className='w-full h-full border-r border-gray-300 p-4'>
                    <div className="flex space-x-3 mb-2 border-white rounded-lg bg-gray-200 p-2">
                        <button
                            className="px-2 py-1 hover:bg-gray-400 text-white rounded-md"
                            title={"Undo"}
                            onClick={handleUndo}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16}
                                 className="icon">
                                <path
                                    d="M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z"></path>
                            </svg>
                        </button>
                        <button
                            className="px-2 py-1 hover:bg-gray-400 text-white rounded-md"
                            title={"Redo"}
                            onClick={handleRedo}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16}
                                 className="icon">
                                <path
                                    d="M18.4,10.6C16.55,9 14.15,8 11.5,8C6.85,8 2.92,11.03 1.54,15.22L3.9,16C4.95,12.81 7.95,10.5 11.5,10.5C13.45,10.5 15.23,11.22 16.62,12.38L13,16H22V7L18.4,10.6Z"></path>
                            </svg>
                        </button>
                        <div className="border-l dark:border-gray-300 border-gray-900 h-8 "/>
                        <button
                            className="px-2 py-1 hover:bg-gray-400 text-white rounded-md"
                            title={"Heading"}
                            onClick={() => handleButtonClick('# Heading')}
                        >
                            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16"
                                 data-view-component="true" className="octicon octicon-heading Button-visual">
                                <path
                                    d="M3.75 2a.75.75 0 0 1 .75.75V7h7V2.75a.75.75 0 0 1 1.5 0v10.5a.75.75 0 0 1-1.5 0V8.5h-7v4.75a.75.75 0 0 1-1.5 0V2.75A.75.75 0 0 1 3.75 2Z"></path>
                            </svg>
                        </button>
                        <button
                            className="px-2 py-1 hover:bg-gray-400 text-white rounded-md"
                            title={"Bold"}
                            onClick={() => handleButtonClick('**Text**')}
                        >
                            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16"
                                 data-view-component="true" className="octicon octicon-bold Button-visual">
                                <path
                                    d="M4 2h4.5a3.501 3.501 0 0 1 2.852 5.53A3.499 3.499 0 0 1 9.5 14H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Zm1 7v3h4.5a1.5 1.5 0 0 0 0-3Zm3.5-2a1.5 1.5 0 0 0 0-3H5v3Z"></path>
                            </svg>
                        </button>
                        <button
                            className="px-2 py-1 hover:bg-gray-400 text-white rounded-md"
                            title={"Italic"}
                            onClick={() => handleButtonClick('*Text*')}
                        >
                            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16"
                                 data-view-component="true" className="octicon octicon-italic Button-visual">
                                <path
                                    d="M6 2.75A.75.75 0 0 1 6.75 2h6.5a.75.75 0 0 1 0 1.5h-2.505l-3.858 9H9.25a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5h2.505l3.858-9H6.75A.75.75 0 0 1 6 2.75Z"></path>
                            </svg>
                        </button>
                        <button
                            className="px-2 py-1 hover:bg-gray-400 text-white rounded-md"
                            title={"Strikethrough"}
                            onClick={() => handleButtonClick('~~Text~~')}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height={16} width={16}
                                 className="icon">
                                <path
                                    d="M20.874,12.059l0,1.729l-3.541,0c0.806,1.851 0.766,6.918 -5.026,6.918c-6.721,0.043 -6.463,-5.621 -6.463,-5.621l3.203,0.044c0.024,2.914 2.55,2.914 3.05,2.879c0.516,-0.043 2.444,-0.034 2.598,-2.058c0.064,-0.942 -0.823,-1.66 -1.791,-2.162l-9.778,0l0,-1.729l17.748,0m-2.896,-3.554l-3.211,-0.026c0,0 0.137,-2.395 -2.646,-2.404c-2.783,-0.017 -2.541,1.902 -2.541,2.144c0.032,0.243 0.274,1.436 2.42,2.007l-5.074,0c0,0 -2.816,-5.82 4.057,-6.814c7.027,-1.038 7.011,5.11 6.995,5.093Z"
                                    style={{fillRule: 'nonzero'}}></path>
                            </svg>
                        </button>
                        <button
                            className="px-2 py-1 hover:bg-gray-400 text-white rounded-md"
                            title={"Quote"}
                            onClick={() => handleButtonClick('> ')}
                        >
                            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16"
                                 data-view-component="true" className="octicon octicon-quote Button-visual">
                                <path
                                    d="M1.75 2.5h10.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Zm4 5h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5Zm0 5h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5ZM2.5 7.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 1.5 0Z"></path>
                            </svg>
                        </button>
                        <button
                            className="px-2 py-1 hover:bg-gray-400 text-white rounded-md"
                            title={"Code"}
                            onClick={() => handleButtonClick('\n```lang\ncode\n```')}
                        >
                            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16"
                                 data-view-component="true" className="octicon octicon-code Button-visual">
                                <path
                                    d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"></path>
                            </svg>
                        </button>
                        <button
                            className="px-2 py-1 hover:bg-gray-400 text-white rounded-md"
                            title={"Link"}
                            onClick={() => handleButtonClick('[Name](url)')}
                        >
                            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16"
                                 data-view-component="true" className="octicon octicon-link Button-visual">
                                <path
                                    d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path>
                            </svg>
                        </button>
                        <div className="border-l dark:border-gray-300 border-gray-900 h-8 "/>
                        <button
                            className="px-2 py-1 hover:bg-gray-400 text-white rounded-md"
                            title={"List Ordered"}
                            onClick={() => handleButtonClick('\n1. ')}
                        >
                            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16"
                                 data-view-component="true" className="octicon octicon-list-ordered Button-visual">
                                <path
                                    d="M5 3.25a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 5 3.25Zm0 5a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 5 8.25Zm0 5a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75ZM.924 10.32a.5.5 0 0 1-.851-.525l.001-.001.001-.002.002-.004.007-.011c.097-.144.215-.273.348-.384.228-.19.588-.392 1.068-.392.468 0 .858.181 1.126.484.259.294.377.673.377 1.038 0 .987-.686 1.495-1.156 1.845l-.047.035c-.303.225-.522.4-.654.597h1.357a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5c0-1.005.692-1.52 1.167-1.875l.035-.025c.531-.396.8-.625.8-1.078a.57.57 0 0 0-.128-.376C1.806 10.068 1.695 10 1.5 10a.658.658 0 0 0-.429.163.835.835 0 0 0-.144.153ZM2.003 2.5V6h.503a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1h.503V3.308l-.28.14a.5.5 0 0 1-.446-.895l1.003-.5a.5.5 0 0 1 .723.447Z"></path>
                            </svg>
                        </button>
                        <button
                            className="px-2 py-1 hover:bg-gray-400 text-white rounded-md"
                            title={"Unordered List"}
                            onClick={() => handleButtonClick('\n- ')}
                        >
                            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16"
                                 data-view-component="true" className="octicon octicon-list-unordered Button-visual">
                                <path
                                    d="M5.75 2.5h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5Zm0 5h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5Zm0 5h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5ZM2 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-6a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM2 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path>
                            </svg>
                        </button>
                        <button
                            className="px-2 py-1 text-white rounded-md"
                            title={"Table"}
                            onClick={() => handleButtonClick('\n| Name | Name |\n| ------- | ------- | \n| Values | Values |')}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height={16} width={16}
                                 className="icon">
                                <path
                                    d="M 5,4L 19,4C 20.1046,4 21,4.89543 21,6L 21,18C 21,19.1046 20.1046,20 19,20L 5,20C 3.89543,20 3,19.1046 3,18L 3,6C 3,4.89543 3.89543,4 5,4 Z M 5,8L 5,12L 11,12L 11,8L 5,8 Z M 13,8L 13,12L 19,12L 19,8L 13,8 Z M 5,14L 5,18L 11,18L 11,14L 5,14 Z M 13,14L 13,18L 19,18L 19,14L 13,14 Z "></path>
                            </svg>
                        </button>
                        <div className="border-l dark:border-gray-300 border-gray-900 h-8 "/>
                        <button
                            className="px-2 py-1 text-white rounded-md"
                            title={"Image"}
                            onClick={() => handleButtonClick('\n![Name](Image url)')}
                        >
                            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16"
                                 data-view-component="true" className="octicon octicon-paperclip Button-visual">
                                <path
                                    d="M12.212 3.02a1.753 1.753 0 0 0-2.478.003l-5.83 5.83a3.007 3.007 0 0 0-.88 2.127c0 .795.315 1.551.88 2.116.567.567 1.333.89 2.126.89.79 0 1.548-.321 2.116-.89l5.48-5.48a.75.75 0 0 1 1.061 1.06l-5.48 5.48a4.492 4.492 0 0 1-3.177 1.33c-1.2 0-2.345-.487-3.187-1.33a4.483 4.483 0 0 1-1.32-3.177c0-1.195.475-2.341 1.32-3.186l5.83-5.83a3.25 3.25 0 0 1 5.553 2.297c0 .863-.343 1.691-.953 2.301L7.439 12.39c-.375.377-.884.59-1.416.593a1.998 1.998 0 0 1-1.412-.593 1.992 1.992 0 0 1 0-2.828l5.48-5.48a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-5.48 5.48a.492.492 0 0 0 0 .707.499.499 0 0 0 .352.154.51.51 0 0 0 .356-.154l5.833-5.827a1.755 1.755 0 0 0 0-2.481Z"></path>
                            </svg>
                        </button>


                    </div>


                    <textarea
                        placeholder="Write your markdown here"
                        value={markdown}
                        autoFocus={true}
                        ref={textareaRef}
                        onChange={handleChange}
                        onClick={handleTextareaClick}
                        onSelect={handleCursorPositionChange}
                        className="w-full resize-none border rounded-md focus:outline-none focus:ring px-4 py-2 min-h-[75vh] max-h-[150vh]"
                    />
                </section>
                <div
                    className={"w-full text-wrap break-words h-full p-4 overflow-x-hidden whitespace-normal max-h-[85vh]"}
                    ref={markdownRef}>
                    <div className="prose max-w-none dark:prose-invert ">
                        <ReactMarkdown
                            className={markdownStyles["markdown"]}
                            remarkPlugins={[remarkGfm, remarkParse, remarkStringify, remarkRehype, remarkMath, remarkGemoji]}
                            rehypePlugins={[rehypeFormat, rehypeMinifyWhitespace, rehypeStringify, rehypeKatex]}
                            components={{
                                code({node, inline, className, children, ...props}: any) {
                                    const match = /language-(\w+)/.exec(className || '');


                                    return !inline && match ? (
                                        <SyntaxHighlighter style={prism} PreTag="div" language={match[1]} {...props}
                                                           className={"not-prose"}>
                                            {String(children).replace(/\n$/, '')}
                                        </SyntaxHighlighter>
                                    ) : (
                                        <code className={className} {...props}>
                                            {children}
                                        </code>
                                    );
                                },
                            }}
                        >
                            {markdown}
                        </ReactMarkdown>
                    </div>
                </div>
            </div>
        </div>
    )
}

