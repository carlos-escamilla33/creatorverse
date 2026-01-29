import { Children, createContext, useContext, useState } from "react";

export const CreatorContext = createContext();

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

export const useCreator = () => {
    const context = useContext(CreatorContext);
    if (!context) {
        throw new Error("useCreator must be inside of the CreatorProvider");
    }
    return context;
}