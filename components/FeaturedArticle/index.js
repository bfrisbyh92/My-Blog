import Link from "next/link";
export default function FeaturedArticle({
  slug,
  title,
  publishedOn,
  readingTime,
}) {
  return (
    <div className="bg-black/50 p-2 rounded-[3rem]">
      <Link href={slug}>
        <a>
          <div
            style={{
              backgroundImage: `url(./assets/blogs-media/${slug}/thumbnail.webp)`,
            }}
            className="rounded-[2.5rem] h-72 md:h-96 w-full bg-center bg-no-repeat bg-cover"
          ></div>
          <div className="p-4 mt-2">
            <div className="text-white text-4xl">{title}</div>
            <div className="text-xl opacity-50 text-white mt-2">
              {publishedOn} • {readingTime} read
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
