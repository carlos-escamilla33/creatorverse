import { useCreator } from "../hooks/useCreators";

const AddCreator = () => {
    const {setCreatorName, setYoutubeURL, setTwitterURL, setInstagramURL, setDescription} = useCreator();

    const handleFormSubmit = (e) => {
        e.preventDefault();
    }

    const handleCreatorNameChange = (e) => {
        setCreatorName(e.target.value)
    }

    const handleYouTubeURLChange = (e) => {
        setYoutubeURL(e.target.value);
    }

    const handleTwitterURLChange = (e) => {
        setTwitterURL(e.target.value);
    }

    const handleInstagramURLChange = (e) => {
        setInstagramURL(e.target.value);
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }

    return (
        <form className="container" onSubmit={handleFormSubmit}>
            <h1>Add Creator</h1>
            <input type="text" name="name" placeholder="Creator Name" aria-label="Text" onChange={handleCreatorNameChange}/>
            <input type="text" name="Youtube url" placeholder="Youtube URL" aria-label="Text" onChange={handleYouTubeURLChange}/>
            <input type="text" name="Twitter url" placeholder="Twitter URL" aria-label="Text" onChange={handleTwitterURLChange}/>
            <input type="text" name="Instagram url" placeholder="Instagram URL" aria-label="Text" onChange={handleInstagramURLChange}/>
            <textarea name="description" placeholder="Write a short description of your creator..." aria-label="Short description" onChange={handleDescriptionChange}/>
            <input type="submit"/>
        </form>
    )
}

export default AddCreator;