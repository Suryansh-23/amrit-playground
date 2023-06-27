/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (
        config,
        { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
    ) => {
        // Important: return the modified config
        config.experiments = {
            asyncWebAssembly: true,
            layers: true,
        };
        return config;
    },
};

module.exports = nextConfig;

