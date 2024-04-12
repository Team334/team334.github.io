/** @type {import('next').NextConfig} */
const nextConfig = {
    modularizeImports: {
        "react-icons/?(((\\w*)?/?)*)": {
            transform: "@react-icons/all-files/{{ matches.[1] }}/{{ member }}",
            skipDefaultConversion: true
        }
    },
    reactStrictMode: false
}

module.exports = nextConfig