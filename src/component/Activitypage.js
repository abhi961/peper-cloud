import React from "react";
import FilterForm from "./FilterForm";
import Menu from "./Menu";
import Navbar from "./Navbar";
import Statuspage from "./Statuspage";
import TaskForm from "./TaskForm";

const Activitypage = (props) => {
  return (
    <>
      <Statuspage />
      <Navbar />
      <div className="container-fluid">
        <div className="row mt-4">
          <div className="col-md-8">
            <div class="card">
              <div class="card-body">
                <Menu />
                <hr></hr>
              </div>
              <div className="task-title">
                <p> New Task</p>
              </div>
              <TaskForm/>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card">
              <div class="card-body">
                <FilterForm text={props}/>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Activitypage;
