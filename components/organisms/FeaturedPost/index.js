import Link from "next/link";
import InfoPost from "../InfoPost";

export default function FeaturedPost() {
  return (
    <article>
      <div className="flex -mx-4 items-center flex-wrap">
        <div className="px-6 lg:w-8/12 md:w-7/12">
          <Link href="/detail">
            <a>
              <img
                src="/img/featured-thumbnail.png"
                alt="thumnail-img"
                className="rounded-xl w-full mb-4 md:mb-0"
              />
            </a>
          </Link>
        </div>
        <div className="lg:w-4/12 md:w-5/12 w-full px-4">
          <InfoPost
            category="UI Design"
            date="July 2, 2021"
            title="Rizky darmawan menyabet juara 1 lomba koding nasional"
            shortDescription="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur est laboriosam consectetur dicta dolorum ad. Obcaecati, suscipit pariatur. Iste tenetur recusandae ducimus molestias reprehenderit molestiae dolore id ipsam adipisci dolores?"
            authorName="lesie"
            authorJob="UI Designet"
            authorAvatar="/img/author-1.png"
          />
        </div>
      </div>
      <hr className="border-white/10 mt-10 lg:hidden" />
    </article>
  );
}
