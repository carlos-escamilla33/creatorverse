import { useNavigate } from "react-router-dom";
import { useCreator } from "../hooks/useCreators";
import { FaRegEdit } from "react-icons/fa";

const CreatorCard = ({ creator }) => {
  const username = creator.url.match(/@([^/]+)/)?.[1];
  const { setCurrentCreator, setCreatorName, setYoutubeURL, setDescription } =
    useCreator();
  const navigate = useNavigate();

  const handleClick = (creator) => {
    setCurrentCreator(creator);
    console.log(creator);
  };

  const handleEditClick = (creator) => {
    setCurrentCreator(creator);
    setCreatorName(creator.name);
    setYoutubeURL(creator.url);
    setDescription(creator.description);
    setCurrentCreator(creator);
    navigate("/edit-creator");
  };
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
      <FaRegEdit onClick={() => handleEditClick(creator)} />
    </article>
  );
};

export default CreatorCard;
