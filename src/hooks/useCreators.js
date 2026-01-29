import { useContext} from "react";
import { CreatorContext } from "../contexts/CreatorContext";


export const useCreator = () => {
    const context = useContext(CreatorContext);
    if (!context) {
        throw new Error("useCreator must be inside of the CreatorProvider");
    }
    return context;
}