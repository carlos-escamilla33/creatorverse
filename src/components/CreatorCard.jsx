const CreatorCard = ({creator}) => {

  return (
    <article className="creator-card">
      <header>{creator.name}</header>
      {creator.description}
      <footer><a href={creator.url}>Visit Channel →</a></footer>
    </article>
  );
};

export default CreatorCard;
