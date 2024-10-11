import React, {useEffect, useState} from "react";
import {motion} from "framer-motion";
import {cn} from "@/components/cn";

const debounce = <T extends (...args: any[]) => any>(
    func: T,
    delay: number
) => {
    let timeout: NodeJS.Timeout;
    const debouncedFunc = (...args: Parameters<T>): void => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
    return debouncedFunc as T & { timeout: NodeJS.Timeout };
};

type Tab = {
    title: string;
    value: string;
    content?: string | React.ReactNode | any;
};

const Tabs = React.memo(({
                             tabs: propTabs,
                             containerClassName,
                             activeTabClassName,
                             tabClassName,
                             contentClassName,
                         }: {
    tabs: Tab[];
    containerClassName?: string;
    activeTabClassName?: string;
    tabClassName?: string;
    contentClassName?: string;
}) => {
    const [active, setActive] = useState<Tab>(propTabs[0]);
    const [tabs, setTabs] = useState<Tab[]>(propTabs);
    const [hovering, setHovering] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setActive(tabs[0]);
        }, 300);
        return () => clearTimeout(timeout);
    }, [tabs]);

    const moveSelectedTabToTop = debounce((idx: number) => {
        const newTabs = [...propTabs];
        const selectedTab = newTabs.splice(idx, 1);
        newTabs.unshift(selectedTab[0]);
        setTabs(newTabs);
        setActive(newTabs[0]);
    }, 75);

    return (
        <>
            <div
                className={cn(
                    "box-border border-shadow-lg flex flex-row items-center justify-center [perspective:1000px] relative sm:overflow-visible no-visible-scrollbar max-w-full w-full rounded-[3.5rem] shadow mx-auto bg-[#191915] ",
                    containerClassName
                )}
            >
                {propTabs.map((tab, idx) => (
                    <button
                        key={tab.title}
                        onClick={() => {
                            moveSelectedTabToTop(idx);
                        }}
                        onMouseEnter={() => setHovering(true)}
                        onMouseLeave={() => setHovering(false)}
                        className={cn(
                            "relative px-2 md:px-4 py-2 rounded-full my-4",
                            tabClassName
                        )}
                        style={{
                            transformStyle: "preserve-3d",
                        }}
                    >
                        {active.value === tab.value && (
                            <motion.div
                                layoutId="clickedbutton"
                                transition={{type: "spring", bounce: 0.3, duration: 0.6}}
                                className={cn(
                                    "absolute inset-0 bg-zinc-800 rounded-full ",
                                    activeTabClassName
                                )}
                            />
                        )}

                        <span className="relative block text-white secondary">
              {tab.title}
            </span>
                    </button>
                ))}
            </div>
            <FadeInDiv
                tabs={tabs}
                active={active}
                key={active.value}
                hovering={hovering}
                className={cn("", contentClassName)}
            />
        </>
    );
});

Tabs.displayName = "Tabs";

const FadeInDiv = React.memo(({
                                  className,
                                  tabs,
                                  hovering,
                              }: {
    className?: string;
    key?: any;
    tabs: Tab[];
    active: Tab;
    hovering?: boolean;
}) => {
    const isActive = (tab: Tab) => {
        return tab.value === tabs[0].value;
    };
    return (
        <div className="relative w-full h-full">
            {tabs.map((tab, idx) => (
                <motion.div
                    key={tab.value}
                    layoutId={tab.value}
                    style={{
                        scale: 1 - idx * 0.1,
                        top: hovering ? idx * -50 : 0,
                        zIndex: -idx,
                        opacity: idx < 3 ? 1 - idx * 0.1 : 0,
                    }}
                    animate={{
                        y: isActive(tab) ? [0, 40, 0] : 0,
                    }}
                    className={cn("w-full h-full absolute top-0 left-0 mt-8", className)}
                >
                    {tab.content}
                </motion.div>
            ))}
        </div>
    );
});

FadeInDiv.displayName = "FadeInDiv";

export {Tabs, FadeInDiv};
