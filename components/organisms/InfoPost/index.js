import PostAuthor from "../PostAuthor";
import PostMetaTitle from "../PostMetaTitle";

export default function InfoPost({
  category,
  date,
  title,
  shortDescription,
  authorAvatar,
  authorName,
  authorJob,
}) {
  return (
    <>
      {/* Meta Info */}
      <PostMetaTitle category={category} date={date} title={title} />
      {/* Head line */}
      <p className="text-white/60 mt-5 w-10/12">{shortDescription}</p>
      <PostAuthor
        authorAvatar={authorAvatar}
        authorName={authorName}
        authorJob={authorJob}
      />
    </>
  );
}
