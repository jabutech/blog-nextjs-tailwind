import Link from "next/link";
import InfoPost from "../InfoPost";

export default function CardPost({ thumbnail, ...infoPost }) {
  return (
    <article>
      <Link href="/detail">
        <a>
          <img
            src={thumbnail}
            alt="thumbnail-img"
            className="w-full rounded mb-4"
          />
        </a>
      </Link>
      <InfoPost {...infoPost} />
    </article>
  );
}
