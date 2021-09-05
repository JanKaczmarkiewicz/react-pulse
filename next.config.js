/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    path: "https://res.cloudinary.com/dclutl43c/image/upload/",
    loader: "cloudinary",
  },
};

module.exports = config;
