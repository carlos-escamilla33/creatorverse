import { useState } from "react";
import { CreatorContext } from "./CreatorContext";

export const CreatorProvider = ({ children }) => {
    const [creatorName, setCreatorName] = useState("");
    const [youtubeURL, setYoutubeURL] = useState("");
    const [twitterURL, setTwitterURL] = useState("");
    const [instagramURL, setInstagramURL] = useState("");
    const [description, setDescription] = useState("");
    const [creators, setCreators] = useState([]);

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
        setCreators
    }

    return (
        <CreatorContext.Provider value={value}>
            {children}
        </CreatorContext.Provider>
    )
}