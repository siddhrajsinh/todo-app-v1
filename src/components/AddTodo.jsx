function AddTodo() {
  return (
    <div className="container border">
      <div className="row my-row">
        <div className="col-4">
          <input type="text" placeholder="Enter todo here" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button className="btn btn-primary my-button">Add</button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
