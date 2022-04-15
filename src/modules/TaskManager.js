const remoteURL = "http://localhost:8088"


export const getTaskById = (taskId) => {
    //gets the task by id
    return fetch(`${remoteURL}/tasks/${taskId}`)
    .then(res => res.json())
  }

  export const getAllTasks = () => {

    return fetch( `${remoteURL}/tasks`)
    .then( res => res.json())
  }

  export const deleteTask = id => {
    return fetch(`${remoteURL}/tasks/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  }
  export const updateTask  = editedTask => {
	return fetch(`${remoteURL}/tasks/${editedTask.id}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(editedTask)
	}).then(data => data.json());
}
  