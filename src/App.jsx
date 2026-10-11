import UserProfile from "./component/UserProfile";
import PostList from "./component/PostList";

function App() {
  return (
    <div>
      <UserProfile
        name={"Nazar"}
        img={"./public/blank-profile-picture-973460_1280.png"}
        text={"asdadasdasdass"}
      />

      <PostList />
    </div>
  );
}

export default App;
