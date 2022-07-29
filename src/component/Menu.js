import React from "react";

const Menu = () => {
  return (
    <div className="container-fluid">
      <nav class="nav menu_color">
        <a class="nav-link active" href="#">
          Log Calls
        </a>
        <a class="nav-link" href="#">
          Tasks
        </a>
        <a class="nav-link" href="#">
          Events
        </a>
        <a class="nav-link " href="#">
          Make Note
        </a>
        <a class="nav-link " href="#">
          Add Attachment
        </a>
        <a class="nav-link " href="#">
          Activity Set
        </a>
        <a class="nav-link " href="#">
          Custom Field
        </a>
      </nav>
    </div>
  );
};

export default Menu;
