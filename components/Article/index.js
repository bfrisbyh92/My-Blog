import Link from "next/link";

export default function Article({ slug, title, publishedOn, readingTime }) {
  return (
    <Link href={slug}>
      <a>
        <div className="bg-black/50 p-2 rounded-[2rem] grid grid-cols-[30%_70%] mb-6 relative z-10">
          <div
            style={{
              backgroundImage: `url(./assets/blogs-media/${slug}/thumbnail.webp)`,
            }}
            className="rounded-[1.5rem] h-full w-full bg-center bg-no-repeat bg-cover"
          ></div>
          <div className="p-4 mt-2 max-w-full flex justify-center flex-col">
            <div className="text-white text-3xl line-clamp-2">{title}</div>
            <div className="text-xl opacity-50 text-white mt-2">
              {publishedOn} • {readingTime} read
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
