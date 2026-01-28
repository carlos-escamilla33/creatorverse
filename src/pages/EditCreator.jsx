
const EditCreator = () => {
    return (
           <form className="container">
            <h1>Edit Creator</h1>
            <input type="text" name="name" placeholder="Creator Name" aria-label="Text" />
            <input type="text" name="Youtube url" placeholder="Youtube URL" aria-label="Text"/>
            <input type="text" name="Twitter url" placeholder="Twitter URL" aria-label="Text"/>
            <input type="text" name="Instagram url" placeholder="Instagram URL" aria-label="Text"/>
            <textarea name="description" placeholder="Write a short description of your creator..." aria-label="Short description"/>
            <input type="submit"/>
        </form>
    )
}

export default EditCreator;