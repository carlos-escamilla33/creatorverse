import { FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";

const CreatorView = ({ creator }) => {
  const username = creator.youtubeURL.match(/@([^/]+)/)?.[1];
  return (
    <div className="view-creator">
      <div className="img-view-container">
        <img
          src={`https://unavatar.io/youtube/${username}`}
          alt={`${creator.name} avatar`}
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/150?text=No+Image";
          }}
        />
        <h3>{creator.name}</h3>
        <div className="creator-view-socials">
          <a href={creator.youtubeURL}>
            <FaYoutube size={35} />
          </a>
          <a href={creator.twitterURL}>
            <FaTwitter size={35} />
          </a>
          <a href={creator.instagramURL}>
            <FaInstagram size={35} />
          </a>
        </div>
      </div>
      <div className="creator-view-info-container">
        <p>{creator.description}</p>
      </div>
    </div>
  );
};

export default CreatorView;
