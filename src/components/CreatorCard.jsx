import { useNavigate } from "react-router-dom";
import { useCreator } from "../hooks/useCreators";
import { FaInfoCircle, FaRegEdit } from "react-icons/fa";

const CreatorCard = ({ creator }) => {
  const username = creator.url.match(/@([^/]+)/)?.[1];
  const { setCurrentCreator, setCreatorName, setYoutubeURL, setDescription } =
    useCreator();
  const navigate = useNavigate();

  const handleClick = (creator) => {
    setCurrentCreator(creator);
    navigate("/view-creator");
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
    <div className="creator-card">
      <div className="creator-avatar">
        <img
          src={`https://unavatar.io/youtube/${username}`}
          alt={`${creator.name} avatar`}
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/150?text=No+Image";
          }}
        />
        <p>{creator.name}</p>
      </div>
      <div className="card-footer">
        <FaInfoCircle onClick={() => handleClick(creator)} className="card-footer-icon"/>
        <FaRegEdit onClick={() => handleEditClick(creator)} className="card-footer-icon"/>
      </div>
    </div>
  );
};

export default CreatorCard;
