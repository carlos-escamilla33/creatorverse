import { useState } from "react";
import { CreatorContext } from "./CreatorContext";

export const CreatorProvider = ({ children }) => {
  const [creatorName, setCreatorName] = useState("");
  const [youtubeURL, setYoutubeURL] = useState("");
  const [twitterURL, setTwitterURL] = useState("");
  const [instagramURL, setInstagramURL] = useState("");
  const [description, setDescription] = useState("");
  const [creators, setCreators] = useState([]);
  const [currentCreator, setCurrentCreator] = useState({});
  const [isAddBtnClicked, setIsAddBtnClicked] = useState(false);

  const validLink = (youtubeLink, twitterLink, instagramLink) => {
    let username;
    let link;
    if (youtubeLink) {
      username = youtubeLink.match(/@([^/]+)/)?.[1];
      link = `https://unavatar.io/youtube/${username}`;
    } else if (twitterLink) {
      username = twitterLink.match(/@([^/]+)/)?.[1];
      link = `https://unavatar.io/twitter/${username}`;
    } else if (instagramLink) {
      username = instagramLink.match(/@([^/]+)/)?.[1];
      link = `https://unavatar.io/instagram/${username}`;
    }

    return link;
  };

  const handleCreatorNameChange = (e) => {
    setCreatorName(e.target.value);
  };

  const handleYouTubeURLChange = (e) => {
    setYoutubeURL(e.target.value);
  };

  const handleTwitterURLChange = (e) => {
    setTwitterURL(e.target.value);
  };

  const handleInstagramURLChange = (e) => {
    setInstagramURL(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const value = {
    creatorName,
    setCreatorName,
    youtubeURL,
    setYoutubeURL,
    twitterURL,
    setTwitterURL,
    instagramURL,
    setInstagramURL,
    description,
    setDescription,
    creators,
    setCreators,
    currentCreator,
    setCurrentCreator,
    handleCreatorNameChange,
    handleYouTubeURLChange,
    handleTwitterURLChange,
    handleInstagramURLChange,
    handleDescriptionChange,
    isAddBtnClicked,
    setIsAddBtnClicked,
    validLink,
  };

  return (
    <CreatorContext.Provider value={value}>{children}</CreatorContext.Provider>
  );
};
