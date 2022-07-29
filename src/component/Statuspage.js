import React,{useState} from "react";

const Statuspage = () => {
   const [updatedStep , setUpdatedStep] = useState("")
  const labelArray =["Status 1", "New", "Working", "Nuturing", "Converted"]
  return (
    <div className="container-fluid">
     
        <div class="card mt-3">
          <div class="card-body">
            <div className="status_container">
           {labelArray.map((item)=> (
             <div class="old-ribbon txttt">
              <div className="circle"></div>
             <p>{item}</p>
           </div>
           ))}
            </div>
          </div>
        </div>
    
    </div>
  );
};

export default Statuspage;
