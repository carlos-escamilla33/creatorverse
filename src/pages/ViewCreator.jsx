import CreatorCard from "../components/CreatorCard";
import { useCreator } from "../hooks/useCreators";

const ViewCreator = () => {
    const {currentCreator} = useCreator();
    return (
        <CreatorCard key={currentCreator.id} creator={currentCreator}/>
    )
}

export default ViewCreator;