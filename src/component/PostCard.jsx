import "./PostCard.css";
import React from "react";

class PostCard extends React.Component {
  render() {
    return (
      <div className="postCard">
        <span className="cardTitle">{this.props.title}</span>

        <small>{this.props.date}</small>

        <p>{this.props.text}</p>

        <img src={this.props.img} alt={this.props.title} />
        <button onClick={this.props.onDelete}>Delete</button>
      </div>
    );
  }
}

export default PostCard;
