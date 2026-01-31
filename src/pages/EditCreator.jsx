import { useCreator } from "../hooks/useCreators";

const EditCreator = () => {
  const {
    currentCreator,
    handleCreatorNameChange,
    handleYouTubeURLChange,
    handleTwitterURLChange,
    handleInstagramURLChange,
    handleDescriptionChange,
  } = useCreator();
  return (
    <form className="container">
      <h1>Edit Creator</h1>
      <input
        type="text"
        name="name"
        placeholder="Creator Name"
        aria-label="Text"
        onChange={handleCreatorNameChange}
        value={currentCreator.name}
      />
      <input
        type="text"
        name="Youtube url"
        placeholder="Youtube URL"
        aria-label="Text"
        onChange={handleYouTubeURLChange}
        value={currentCreator.url}
      />
      <input
        type="text"
        name="Twitter url"
        placeholder="Twitter URL"
        onChange={handleTwitterURLChange}
        aria-label="Text"
      />
      <input
        type="text"
        name="Instagram url"
        placeholder="Instagram URL"
        onChange={handleInstagramURLChange}
        aria-label="Text"
      />
      <textarea
        name="description"
        placeholder="Write a short description of your creator..."
        aria-label="Short description"
        onChange={handleDescriptionChange}
        value={currentCreator.description}
      />
      <input type="submit" />
    </form>
  );
};

export default EditCreator;
