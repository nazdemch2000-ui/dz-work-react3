import "./PostList.css";
import React from "react";
import PostCard from "./PostCard";
import ModalAddCard from "./ModalAddCard";

class PostList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
      postlist: [
        {
          id: 1,
          title: "First post",
          text: "My first React post",
          img: "/blank-profile-picture-973460_1280.png",
          date: "11.10.2026",
        },
      ],
    };
  }

  delBtn = (id) => {
    this.setState({
      postlist: this.state.postlist.filter((card) => card.id !== id),
    });
  };

  addPost = (post) => {
    this.setState((prevState) => ({
      postlist: [
        ...prevState.postlist,
        {
          ...post,
          id: Date.now(),
        },
      ],
      isModalOpen: false,
    }));
  };

  render() {
    return (
      <div id="conteiner">
        <button onClick={() => this.setState({ isModalOpen: true })}>
          + Add Post
        </button>
        {this.state.isModalOpen && (
          <ModalAddCard
            onAddPost={this.addPost}
            onClose={() => this.setState({ isModalOpen: false })}
          />
        )}
        <span>{this.state.postlist.length === 0 ? "List is empty" : ""}</span>

        <ul id="cardList">
          {this.state.postlist.map((card) => (
            <PostCard
              key={card.id}
              title={card.title}
              text={card.text}
              img={card.img}
              date={card.date}
              onDelete={() => this.delBtn(card.id)}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default PostList;
