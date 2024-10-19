/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    localPatterns: [
      {
        pathname: "./src/images/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
