import React, { useState } from "react";

const TaskForm = () => {
  const [infoData, setInfoData] = useState([]);
  const [addForm, setAddform] = useState({
    task: "",
    assigned: "",
    subject: "",
    remind: "",
  });

  const handleAddformChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...addForm };
    newFormData[fieldName] = fieldValue;
    setAddform(newFormData);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newContact = {
      task: addForm.task,
      assigned: addForm.assigned,
      subject: addForm.subject,
      remind: addForm.remind,
    };
    const newInfo = [...infoData, newContact];
    setInfoData(newInfo);
  };

  return (
    <div className="row m-2">
      <div className="col-md-6">
        <form>
          <div className="form-group">
            <label className="label_title">
              Task Type <span style={{ color: "tomato" }}>*</span>
            </label>
            <select
              class="form-control"
              name="task"
              onChange={handleAddformChange}
            >
              <option>Select Type</option>
              <option>To Do</option>
              <option>Hire</option>
            </select>
          </div>
          <div className="form-group mt-4">
            <label className="label_title">
              Assigned to <span style={{ color: "tomato" }}>*</span>
            </label>
            <select
              class="form-control"
              name="assigned"
              onChange={handleAddformChange}
            >
              <option>Assigned</option>
              <option>Ravi Kumar</option>
              <option>Anand Pai</option>
              <option>Jayaram Ramesh</option>
              <option>Allan Gomez</option>
            </select>
          </div>
          <div className="date_conatiner">
            <div className="form-group">
              <label className="label_title">
                Start Date <span style={{ color: "tomato" }}>*</span>
              </label>
              <input type="date" className="form-control bts" />
            </div>
            <div className="form-group">
              <label className="label_title">
                End Date date <span style={{ color: "tomato" }}>*</span>
              </label>
              <input type="date" className="form-control bts" />
            </div>
          </div>
          <div className="form-group">
            <label className="label_title">
              Remind on <span style={{ color: "tomato" }}>*</span>
            </label>
            <input
              type="date"
              className="form-control"
              name="remind"
              onChange={handleAddformChange}
            ></input>
          </div>
        </form>
      </div>

      <div className="col-md-6">
        <div className="form-group">
          <label className="sub-title">Subject</label>
          <input
            type="email"
            class="form-control"
            
            onChange={handleAddformChange}
            name="subject"
          ></input>
        </div>
        <div class="form-group mt-4">
          <label className="sub-title">Details</label>
          <textarea
            class="form-control"
            id="ontrolTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div className="btn_container">
          <div className="btn">
            <button type="submit">Cancel</button>
          </div>
          <div className="btn apply">
            <button type="submit" onClick={handleFormSubmit}>
              Apply
            </button>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="tasklist_txt">
          <p>Task List</p>
        </div>
        <div className="table_conatiner">
          <table class="table">
            <thead>
              <tr>
                {/* <th scope="col">#</th> */}
                <th scope="col">Subject</th>
                <th scope="col">Type</th>
                <th scope="col">Assigned to</th>
                <th scope="col">Due Date</th>
              </tr>
            </thead>
            <tbody>
              {infoData.map((itemVal) => {
                return (
                  <>
                    <tr>
                      <td>{itemVal.subject}</td>
                      <td>{itemVal.task}</td>
                      <td>{itemVal.assigned}</td>
                      <td>{itemVal.remind}</td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          
          </table>
        </div>

      </div>
    </div>
  );
};

export default TaskForm;
