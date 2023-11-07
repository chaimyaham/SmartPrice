/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental :{
        serverActions : true , 
        serverComponentsExtrenalPackages : ['mongoose']
    },
    images :{
        domains : ['m.media-amazon.com']
    }
}

module.exports = nextConfig
