import { useNavigate } from "react-router-dom";

const HeaderSection = () => {
    const navigate = useNavigate();

    const handleAddCreatorClick = () => {
        navigate("/add-creator");
    }
    return (
        <section className="container-fluid header-section">
            <div>
                <h1>Creatorverse</h1>
            </div>
            <button className="outline" onClick={handleAddCreatorClick}>Add Creator</button>
        </section>
    )
}

export default HeaderSection;