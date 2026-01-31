import { useNavigate } from "react-router-dom";

const HeaderSection = () => {
    const navigate = useNavigate();

    const handleAddCreatorClick = () => {
        navigate("/add-creator");
    }
    return (
        <section>
            <input type="submit" onClick={handleAddCreatorClick}/>
        </section>
    )
}

export default HeaderSection;