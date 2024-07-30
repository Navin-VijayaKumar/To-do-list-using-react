import React,{useState} from "react";

function To_do()
{
    const [tasks,setTasks]=useState([]);
    const [newtasks,setnewTasks]=useState("");

function hadleinputchange(event)
{
           setnewTasks(event.target.value);
}
function addtasks()
{
   
    setTasks(t=>[...t,newtasks]);
    setnewTasks("");
    
}
function removetasks(index)
{
    const updatedtask=tasks.filter((e,i)=>i!==index);
    setTasks(updatedtask);
}
function tasksup(index)
{
    if(index>0){

        const updatedtask=[...tasks];
        [updatedtask[index],updatedtask[index-1]]=[updatedtask[index-1],updatedtask[index]];
        setTasks(updatedtask);
    }
}

function tasksdown(index)
{
    if(index < tasks.length-1){

        const updatedtask=[...tasks];
        [updatedtask[index],updatedtask[index+1]]=[updatedtask[index+1],updatedtask[index]];
        setTasks(updatedtask);
    }
}





return(

<div className="to-do-body0">
    <h1>To-Do-List</h1>
    <div className="to-do-body1"></div>
    <input type="text" placeholder="ENTER THE TASK TO DO..."
    value={newtasks}
    onChange={hadleinputchange}></input>
    <button className="add-button" onClick={addtasks}>ADD</button>
<ol>
    {tasks.map((task,index)=>
   <li key={index}>
    <section className="text1">{task}

        </section>
    <button className="delete" 
    onClick={()=>removetasks(index)}>DELETE</button>

      <button className="taskup" 
    onClick={()=>tasksup(index)}>UP</button>
     <button className="taskdown" 
    onClick={()=>tasksdown(index)}>DOWN</button>
   </li>
    )}
</ol>
</div>

);

}

export default To_do