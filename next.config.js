// На GitHub Pages сайт живёт в подпапке /animation-variation.
// В CI путь передаётся через PAGES_BASE_PATH, локально он пустой.
const basePath = process.env.PAGES_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // Статический экспорт в папку out/ — GitHub Pages умеет отдавать только статику
  output: "export",
  trailingSlash: true,
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    // Оптимизатор картинок требует сервер, поэтому свой loader, добавляющий basePath
    loader: "custom",
    loaderFile: "./imageLoader.js",
  },
};

module.exports = nextConfig;
