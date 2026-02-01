import { useNavigate, NavLink } from "react-router-dom";
import { useState } from "react";
import creatorImg from "../assets/creator.png";

const HeaderSection = () => {
    const [isAddBtnClicked, setIsAddBtnClicked] = useState(false);
    const navigate = useNavigate();

    const handleHeaderImgClick = () => {
        setIsAddBtnClicked(false);
    }

    const handleAddCreatorClick = () => {
        navigate("/add-creator");
        setIsAddBtnClicked(true);
    }

    return (
        <section className="container-fluid header-section">
            <NavLink to="/">
                <img src={creatorImg} alt="" onClick={handleHeaderImgClick}/>
            </NavLink>
            {
                !isAddBtnClicked && <button className="add-creator-btn" onClick={handleAddCreatorClick}>Add Creator</button>
            }
        </section>
    )
}

export default HeaderSection;