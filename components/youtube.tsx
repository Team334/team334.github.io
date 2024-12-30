import React, {useEffect, useState} from 'react';
import YouTube from 'react-youtube';
import {Skeleton} from "@/components/shadcn/ui/skeleton";
import {Button} from "@/components/shadcn/ui/button";

interface YouTubePlayerProps {
    videoId: string;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({videoId}) => {
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);

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
            origin: typeof window !== 'undefined' ? window.location.origin : '',
        },
    };

    const handleError = () => {
        setError(true);
        setLoaded(true);
    };

    if (error) {
        return (
            <div className="youtube-player relative mt-2 w-full h-[95%] md:h-[90%] flex flex-col items-center justify-center bg-black/20 backdrop-blur-sm rounded-xl p-6">
                <p className="text-lg text-gray-300 mb-4 text-center">
                    Unable to load the video. It might be blocked by an ad blocker.
                </p>
                <Button
                    variant="outline"
                    size="lg"
                    className="hover:bg-white/20 text-white"
                    onClick={() => window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank')}
                >
                    Watch on YouTube →
                </Button>
            </div>
        );
    }

    return (
        <div className="youtube-player relative mt-2 w-full h-[95%] md:h-[90%] flex flex-col">
            {loaded ? (
                <YouTube
                    videoId={videoId}
                    opts={opts}
                    className={"w-full max-h-full object-scale-down h-full flex-1 p-2"}
                    onError={handleError}
                />
            ) : (
                <Skeleton className="w-full max-h-full object-scale-down h-full flex-1 p-2"/>
            )}
        </div>
    );
};

export default React.memo(YouTubePlayer);