import { useCreator } from "../hooks/useCreators";

const CreatorCard = ({ creator }) => {
  const username = creator.url.match(/@([^/]+)/)?.[1];
  const {setCurrentCreator} = useCreator();
  
  const handleClick = (creator) => {
    setCurrentCreator(creator);
    console.log(creator);
  }
  return (
    <article className="creator-card" onClick={() => handleClick(creator)}>
      <header className="creator-avatar">
        <img
          src={`https://unavatar.io/youtube/${username}`}
          alt={`${creator.name} avatar`}
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/150?text=No+Image";
          }}
        />
        <p>{creator.name}</p>
        <p>{creator.description}</p>
      </header>
      <footer>
        <a href={creator.url}>Visit Channel →</a>
      </footer>
    </article>
  );
};

export default CreatorCard;
