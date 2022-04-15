import React from "react"
import { Routes, Route, Outlet, Navigate } from "react-router-dom"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { TaskForm } from "./tasks/TaskForm"
import { Tasklist } from "./tasks/Tasklist"

export const ApplicationViews = ({ isAuthenticated, setAuthUser }) => {
  const PrivateOutlet = () => {
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
  }

 
  return (
    <>
      <Routes>
        <Route path="/" element={<PrivateOutlet />} >
          <Route path="articles" element={""} />
          <Route path="friends" element={""} />
          <Route path="messages" element={""} />
          <Route path="tasks" element={<Tasklist />} />
          <Route path="task/create" element={<TaskForm />} />
          <Route path="events" element={""} />
        </Route>

        <Route path="/login" element={<Login setAuthUser={setAuthUser}/>} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}
