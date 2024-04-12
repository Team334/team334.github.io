import React, {useEffect, useState} from 'react';
import YouTube from 'react-youtube';
import {Skeleton} from "@/components/shadcn/ui/skeleton";

interface YouTubePlayerProps {
    videoId: string;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({videoId}) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        // Simulate loading delay
        const timeout = setTimeout(() => {
            setLoaded(true);
        }, 1200);

        return () => clearTimeout(timeout);
    }, []);

    const opts = {
        width: '100%',
        height: '100%',
        playerVars: {
            autoplay: 0,
        },
    };

    return (
        <div className="youtube-player relative mt-2 w-full h-[95%] md:h-[90%] flex flex-col">
            {loaded ? (
                <YouTube
                    videoId={videoId}
                    opts={opts}
                    className={"w-full max-h-full object-scale-down h-full flex-1 p-2"}
                />
            ) : (
                <Skeleton className="w-full max-h-full object-scale-down h-full flex-1 p-2"/>
            )}
        </div>
    );
};

export default React.memo(YouTubePlayer);