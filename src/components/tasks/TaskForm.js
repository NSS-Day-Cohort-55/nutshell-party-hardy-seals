import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

export const TaskForm = () => {
    const nav = useNavigate()
    const [task, updateTask] = useState([])


    const saveTask = (event) => {

      const  newTask = {
            userId : JSON.parse(sessionStorage.nutshell_user).id,
            name: task.name,
            expectedCompletion: task.expectedCompletion,
            isComplete : false
        }

        event.preventDefault()
        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTask)
    }
    return fetch("http://localhost:8088/tasks", fetchOption)
        .then(() => {
            nav("/tasks")
        })
    
    }
    return (

        <>
           <form className="taskForm">
            <h2 className="taskForm__title">Enter A New Task</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name of Task:</label>
                    <input
                        required autoFocus
                        type="input"
                        className="form-control"
                        placeholder="Please enter a task."
                     onChange={
                        event => {
                            const copy = {...task}
                            copy.name = event.target.value
                            updateTask(copy)
                        }} />
                </div>
                </fieldset>
                <fieldset>
                <div className="form-group">
                    <label htmlFor="date">Expected Completion:</label>
                    <input type="date"
                        onChange={
                            event => {
                                const copy = {...task}
                                copy.expectedCompletion = event.target.value
                                updateTask(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={saveTask}>
                Submit Task
            </button>
        </form>
        
        </>

     
    )
}