function TodoItem({ title, date }) {
  return (
    <div className="container border bg-light">
      <div className="row my-row">
        <div className="col-4">{title}</div>
        <div className="col-4">{date}</div>
        <div className="col-2 ">
          <button className="btn btn-danger my-button">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
