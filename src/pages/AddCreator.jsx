import { supabase } from "../client";
import { useCreator } from "../hooks/useCreators";
import { useNavigate } from "react-router-dom";

const AddCreator = () => {
  const {
    creatorName,
    youtubeURL,
    twitterURL,
    instagramURL,
    description,
    setCurrentCreator,
    setCreators,
    creators,
    handleCreatorNameChange,
    handleYouTubeURLChange,
    handleTwitterURLChange,
    handleInstagramURLChange,
    handleDescriptionChange,
    setIsAddBtnClicked
  } = useCreator();

  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newCreator = { name: creatorName, youtubeURL, twitterURL, instagramURL, description };

    const insertCreator = async () => {
      try {
        const { data, error } = await supabase
          .from("creators")
          .insert({
            name: newCreator.name,
            youtubeURL: newCreator.youtubeURL,
            instagramURL: newCreator.instagramURL,
            twitterURL: newCreator.twitterURL,
            description: newCreator.description,
          })
          .select();
        if (data[0]) {
          setCreators([...creators, data[0]]);
          setCurrentCreator(data[0]);
        } else {
          throw error;
        }
      } catch (err) {
        console.log(err);
      }
    };
    insertCreator();
    setIsAddBtnClicked(false);
    navigate("/");
  };

  return (
    <form className="container add-creator-component" onSubmit={handleFormSubmit}>
      <h1>Add Creator</h1>
      <input
        type="text"
        name="name"
        placeholder="Creator Name"
        aria-label="Text"
        onChange={handleCreatorNameChange}
      />
      <input
        type="text"
        name="Youtube url"
        placeholder="Youtube URL"
        aria-label="Text"
        onChange={handleYouTubeURLChange}
      />
      <input
        type="text"
        name="Twitter url"
        placeholder="Twitter URL"
        aria-label="Text"
        onChange={handleTwitterURLChange}
      />
      <input
        type="text"
        name="Instagram url"
        placeholder="Instagram URL"
        aria-label="Text"
        onChange={handleInstagramURLChange}
      />
      <textarea
        name="description"
        type="text"
        placeholder="Write a short description of your creator..."
        aria-label="Short description"
        onChange={handleDescriptionChange}
      />
      <input type="submit" />
    </form>
  );
};

export default AddCreator;
