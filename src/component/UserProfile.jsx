import "./UserProfile.css";

function UserProfile({ name, img, text }) {
  return (
    <div id="conteinet">
      <img id="userAvatar" src={img}></img>
      <h1 id="userName">{name}</h1>
      <p id="userText">{text}</p>
    </div>
  );
}
export default UserProfile;
