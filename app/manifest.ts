import {MetadataRoute} from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Techknights',
        short_name: 'Team 334',
        description: 'The 334th Team in FIRST Robotics Competition',
        start_url: '/',
        display: 'standalone',
        icons: [
            {
                src: '/logo.png',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],

    }
}