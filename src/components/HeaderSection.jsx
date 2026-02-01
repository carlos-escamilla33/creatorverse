import { useNavigate, NavLink } from "react-router-dom";
import creatorImg from "../assets/creator.png";

const HeaderSection = () => {
    const navigate = useNavigate();

    const handleAddCreatorClick = () => {
        navigate("/add-creator");
    }
    return (
        <section className="container-fluid header-section">
            <NavLink to="/">
                <img src={creatorImg} alt="" />
            </NavLink>
            <button className="add-creator-btn" onClick={handleAddCreatorClick}>Add Creator</button>
        </section>
    )
}

export default HeaderSection;