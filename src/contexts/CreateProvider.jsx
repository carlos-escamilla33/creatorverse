import { useState } from "react";
import { CreatorContext } from "./CreatorContext";

export const CreatorProvider = ({ children }) => {
    const [creatorName, setCreatorName] = useState("");
    const [youtubeURL, setYoutubeURL] = useState("");
    const [instagramURL, setInstagramURL] = useState("");

    const value = {
        creatorName,
        setCreatorName,
        youtubeURL,
        setYoutubeURL,
        instagramURL,
        setInstagramURL
    }

    return (
        <CreatorContext.Provider value={value}>
            {children}
        </CreatorContext.Provider>
    )
}