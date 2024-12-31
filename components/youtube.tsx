"use client";
import React, { useState } from 'react';

interface YouTubePlayerProps {
    videoId: string;
    loading?: "lazy" | "eager";
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ videoId, loading = "lazy" }) => {
    const [error, setError] = useState(false);

    if (error) {
        return (
            <div className="w-full h-full flex items-center justify-center bg-black/20 rounded-lg">
                <p className="text-gray-400">Video unavailable</p>
            </div>
        );
    }

    return (
        <div className="relative w-full h-full">
            <iframe
                src={`https://www.youtube.com/embed/${videoId}?rel=0`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                loading={loading}
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                onError={() => setError(true)}
            />
        </div>
    );
};

export default YouTubePlayer;