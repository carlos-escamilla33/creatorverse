import { Children, createContext, useContext, useState } from "react";

export const CreatorContext = createContext();

export const CreatorProvider = () => {
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
            {Children}
        </CreatorContext.Provider>
    )
}