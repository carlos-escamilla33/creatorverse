import { useCreator } from "../hooks/useCreators";
import { supabase } from "../client";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const EditCreator = () => {
  const {
    setCreators,
    currentCreator,
    creatorName,
    youtubeURL,
    twitterURL,
    instagramURL,
    description,
    setCurrentCreator,
    handleCreatorNameChange,
    handleYouTubeURLChange,
    handleTwitterURLChange,
    handleInstagramURLChange,
    handleDescriptionChange,
  } = useCreator();

  const [isDeleteBtn, setIsDeleteBtn] = useState(false);
  const navigate = useNavigate();

  const handleEditFormSubmission = (e) => {
    e.preventDefault();

    const updatedCreator = {
      id: currentCreator.id,
      name: creatorName,
      youtubeURL,
      twitterURL,
      instagramURL,
      description,
    };

    const updateCreator = async () => {
      try {
        const { data, error } = await supabase
          .from("creators")
          .update({
            name: updatedCreator.name,
            youtubeURL: updatedCreator.youtubeURL,
            instagramURL: updatedCreator.instagramURL,
            twitterURL: updatedCreator.twitterURL,
            description: updatedCreator.description,
            imageURL: null
          })
          .eq("id", updatedCreator.id)
          .select();
        if (data[0]) {
          setCreators((prevCreators) =>
            prevCreators.map((creator) =>
              creator.id === updatedCreator.id ? updatedCreator : creator,
            ),
          );
          setCurrentCreator(data[0]);
        } else {
          throw error;
        }
      } catch (err) {
        console.log(err);
      }
    };

    const deleteCreator = async () => {
      try {
        const { data, error } = await supabase
          .from("creators")
          .delete()
          .eq("id", currentCreator.id)
          .select();
        if (data[0]) {
          setCreators((prevCreators) =>
            prevCreators.filter((creator) => creator.id !== data[0].id),
          );
        } else {
          throw error;
        }
      } catch (err) {
        console.log(err);
      }
    };
    if (isDeleteBtn) {
      deleteCreator();
    } else {
      updateCreator();
    }
    navigate("/");
  };

  const handleIsDeleteClick = () => {
    setIsDeleteBtn(true);
  };

  return (
    <form
      className="container edit-creator-component"
      onSubmit={handleEditFormSubmission}
    >
      <h1>Edit Creator</h1>
      <input
        type="text"
        name="name"
        placeholder="Creator Name"
        aria-label="Text"
        onChange={handleCreatorNameChange}
        value={creatorName}
      />
      <input
        type="text"
        name="Youtube url"
        placeholder="Youtube URL"
        aria-label="Text"
        onChange={handleYouTubeURLChange}
        value={youtubeURL}
      />
      <input
        type="text"
        name="Twitter url"
        placeholder="Twitter URL"
        onChange={handleTwitterURLChange}
        value={twitterURL}
        aria-label="Text"
      />
      <input
        type="text"
        name="Instagram url"
        placeholder="Instagram URL"
        onChange={handleInstagramURLChange}
        value={instagramURL}
        aria-label="Text"
      />
      <textarea
        name="description"
        type="text"
        placeholder="Write a short description of your creator..."
        aria-label="Short description"
        onChange={handleDescriptionChange}
        value={description}
      />
      <input type="submit" />
      <input
        type="submit"
        value="Delete"
        id="delete-creator-btn"
        onClick={handleIsDeleteClick}
      />
    </form>
  );
};

export default EditCreator;
