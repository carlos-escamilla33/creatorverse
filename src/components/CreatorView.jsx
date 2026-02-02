import { FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";
import { useCreator } from "../hooks/useCreators";

const CreatorView = ({ creator }) => {
  const { validLink } = useCreator();
  const socialLink = validLink(
    creator.youtubeURL,
    creator.twitterURL,
    creator.instagramURL,
  );
  return (
    <div className="view-creator">
      <div className="img-view-container">
        <img
          src={socialLink}
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
