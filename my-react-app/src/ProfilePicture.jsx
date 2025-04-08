function ProfilePicture() {
    const imageUrl='./src/assets/face.webp';
    const handleClick =()=>console.log("ouch");
    return (
        <img  src={imageUrl} onClick={handleClick} />
    );
}  

export default ProfilePicture