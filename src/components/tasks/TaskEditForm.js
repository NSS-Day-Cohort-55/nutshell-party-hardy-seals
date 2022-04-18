import React, {useState, isLoading, setIsLoading, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { getTaskById } from "../../modules/TaskManager";
import { useParams } from "react-router-dom";
import { updateTask } from "../../modules/TaskManager";


export const TaskEditForm = () => {

    const nav = useNavigate()
    const [task, setTask] = useState({name:"", expectedCompletion:""})
    const [isLoading, setIsLoading] = useState(false);
    const {taskId} = useParams()
    console.log(useParams())


        const handleFieldChange = evt => {
            const stateToChange = { ...task };
            stateToChange[evt.target.id] = evt.target.value;
            setTask(stateToChange);
          };
        
          const updateExistingTask = evt => {
            evt.preventDefault()
            setIsLoading(true);
        
            // default values for locationId and customerId
            // if you already have these components/modules in place, you will need to include the correct information
            const editedTaskForm = {
              id: taskId,
              name: task.name,
              expectedCompletion: task.expectedCompletion,
            isComplete: task.isComplete,
            userId: parseInt(sessionStorage.getItem("nutshell_user"))
            };
        
          //pass the editedTask object to the database
          updateTask(editedTaskForm)
            .then(() => nav("/tasks")
            )
          }
        
          useEffect(() => {
            getTaskById(taskId)
              .then(task => {
                setTask(task);
                setIsLoading(false);
              });
          }, []);
    
    
    return (

        <>
           <form className="taskForm">
            <h2 className="taskForm__title">Edit This Task</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name of Task:</label>
                    <input
                        id="name"
                        required autoFocus
                        type="input"
                        className="form-control"
                        placeholder="Please enter a task."
                        value={task.name}
                     onChange={(evt) => handleFieldChange (evt)} />
                </div>
                </fieldset>
                <fieldset>
                <div className="form-group">
                    <label htmlFor="date">Expected Completion:</label>
                    <input type="date"
                        id="expectedCompletion"
                        value={task.expectedCompletion}
                        onChange={handleFieldChange} />
                </div>
            </fieldset>
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingTask}
              className="btn btn-primary"
            >Submit</button>
        </form>
        
        </>

     
    )
}