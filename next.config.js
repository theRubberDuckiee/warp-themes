module.exports = {
	i18n: {
		locales: ['en'],
		defaultLocale: 'en',
	},
	async rewrites() {
		return [
			{
				source: '/d/:hash*',
				destination: '/api/:hash*',
			},
		];
	},
	async redirects() {
		return [
			{
				source: '/companion',
				destination: 'https://github.com/haackt/warp-companion',
				permanent: true,
			},
		];
	},
};
