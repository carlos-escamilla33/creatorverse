import { FaYoutube } from "react-icons/fa";

const CreatorView = ({ creator }) => {
  const username = creator.url.match(/@([^/]+)/)?.[1];
  return (
    <div className="view-creator container-fluid">
      <div className="img-view-container">
        <img
          src={`https://unavatar.io/youtube/${username}`}
          alt={`${creator.name} avatar`}
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/150?text=No+Image";
          }}
        />
        <p>{creator.name}</p>
        <a href={creator.url}><FaYoutube size={35}/></a>
      </div>
      <div className="creator-view-info-container">
          <p>{creator.description}</p>
      </div>
    </div>
  );
};

export default CreatorView;
