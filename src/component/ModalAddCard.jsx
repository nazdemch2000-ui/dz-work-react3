import "./ModalAddCard.css";

function ModalAddCard({ onAddPost, onClose }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const post = {
      title: formData.get("title"),
      text: formData.get("text"),
      date: formData.get("date"),
      img: formData.get("img") || "/blank-profile-picture-973460_1280.png",
    };

    onAddPost(post);
  }

  return (
    <div className="modalOverlay">
      <div className="modalCard">
        <h2>Add new post</h2>

        <form onSubmit={handleSubmit}>
          <input type="text" name="title" placeholder="Post title" required />

          <textarea name="text" placeholder="Post text" required />

          <input type="date" name="date" required />

          <input type="text" name="img" placeholder="Image URL" />

          <div className="modalButtons">
            <button type="submit">Add post</button>

            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalAddCard;
