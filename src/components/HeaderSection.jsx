import { useNavigate } from "react-router-dom";

const HeaderSection = () => {
    const navigate = useNavigate();

    const handleAddCreatorClick = () => {
        navigate("/add-creator");
    }
    return (
        <section>
            <button className="outline" onClick={handleAddCreatorClick}>Add Creator</button>
        </section>
    )
}

export default HeaderSection;