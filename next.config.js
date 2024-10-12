module.exports = {
    async redirects() {
        return [
            {
                source: '/dash',
                destination: '/dashboard',
                permanent: true
            },
        ];
    },
}