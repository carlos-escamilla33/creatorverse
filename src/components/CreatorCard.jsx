const CreatorCard = ({ creator }) => {
  const username = creator.url.match(/@([^/]+)/)?.[1];
  return (
    <article className="creator-card">
      <header className="creator-avatar">
        <img
          src={`https://unavatar.io/youtube/${username}`}
          alt={`${creator.name} avatar`}
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/150?text=No+Image";
          }}
        />
      </header>
      <header>{creator.name}</header>
      {creator.description}
      <footer>
        <a href={creator.url}>Visit Channel →</a>
      </footer>
    </article>
  );
};

export default CreatorCard;
