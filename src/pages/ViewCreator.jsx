import CreatorView from "../components/CreatorView";
import { useCreator } from "../hooks/useCreators";

const ViewCreator = () => {
    const {currentCreator} = useCreator();
    return (
        <div>
            <CreatorView key={currentCreator.id} creator={currentCreator}/>
        </div>
    )
}

export default ViewCreator;