import { useNavigate } from "react-router-dom";
import creatorImg from "../assets/creator.png";

const HeaderSection = () => {
    const navigate = useNavigate();

    const handleAddCreatorClick = () => {
        navigate("/add-creator");
    }
    return (
        <section className="container-fluid header-section">
            <div>
                <img src={creatorImg} alt="" />
            </div>
            <button className="add-creator-btn" onClick={handleAddCreatorClick}>Add Creator</button>
        </section>
    )
}

export default HeaderSection;