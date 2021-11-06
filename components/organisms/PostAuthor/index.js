export default function PostAuthor({ authorAvatar, authorName, authorJob }) {
  return (
    <>
      {/* Avatar */}
      <div className="flex items-center">
        <img
          src={authorAvatar}
          alt="avatar"
          className="mt-5 w-14 h-14 rounded-full object-cover"
        />
        {/* Info avatar */}
        <div className="ml-4">
          <h3>{authorName}</h3>
          <div className="text-white/60 text-sm mt-1"> {authorJob}</div>
        </div>
      </div>
    </>
  );
}
