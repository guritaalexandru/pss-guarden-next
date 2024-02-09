/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	output: 'standalone',
	images: {
		unoptimized: true,
	},
	eslint: {
		// Warning: This allows production builds to successfully complete even if
		// your project has ESLint errors.
		ignoreDuringBuilds: true,
	},
};

export default nextConfig;
