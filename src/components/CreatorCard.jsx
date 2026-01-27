const CreatorCard = ({creator}) => {

  return (
    <article>
      <header>{creator.name}</header>
      {creator.description}
      <div>
        <footer>{creator.url}</footer>
      </div>
    </article>
  );
};

export default CreatorCard;
