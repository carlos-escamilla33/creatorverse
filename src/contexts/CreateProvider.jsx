import { useState } from "react";
import { CreatorContext } from "./CreatorContext";

export const CreatorProvider = ({ children }) => {
    const [creatorName, setCreatorName] = useState("");
    const [youtubeURL, setYoutubeURL] = useState("");
    const [twitterURL, setTwitterURL] = useState("");
    const [instagramURL, setInstagramURL] = useState("");
    const [description, setDescription] = useState("");

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
        setDescription
    }

    return (
        <CreatorContext.Provider value={value}>
            {children}
        </CreatorContext.Provider>
    )
}