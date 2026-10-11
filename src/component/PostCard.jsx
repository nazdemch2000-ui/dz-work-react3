import "./PostCard.css";
import React from "react";

class PostCard extends React.Component {
  constructor() {
    super();
    this.state = {
      isLiked: false,
      likeCount: 0,
    };
  }
  toggleLike = () => {
    this.setState((prevState) => ({
      isLiked: prevState.isLiked ? false : true,
      likeCount: prevState.isLiked
        ? prevState.likeCount - 1
        : prevState.likeCount + 1,
    }));
  };
  render() {
    return (
      <div className="postCard">
        <span className="cardTitle">{this.props.title}</span>

        <small>{this.props.date}</small>

        <p>{this.props.text}</p>

        <img src={this.props.img} alt={this.props.title} />
        <span>
          <button className="deleteButton" onClick={this.props.onDelete}>
            Delete
          </button>
          <button
            className={`likeButton ${this.state.isLiked ? "liked" : ""}`}
            onClick={this.toggleLike}
          >
            {this.state.isLiked ? "♥" : "♡"}
          </button>{" "}
          {this.state.likeCount}
        </span>
      </div>
    );
  }
}

export default PostCard;
