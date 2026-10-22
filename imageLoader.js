// next/image не добавляет basePath к src, делаем это сами
export default function imageLoader({ src, width }) {
  if (/^https?:\/\//.test(src)) {
    return src;
  }
  return `${process.env.NEXT_PUBLIC_BASE_PATH}${src}?w=${width}`;
}
