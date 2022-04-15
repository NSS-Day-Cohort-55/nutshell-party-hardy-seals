import React from "react"
import { Routes, Route, Outlet, Navigate } from "react-router-dom"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { TaskForm } from "./tasks/TaskForm"
import { Tasklist } from "./tasks/Tasklist"
import { ArticleForm } from "./article/ArticleForm"
import { ArticleList } from "./article/ArticleList"
import { ArticleEditForm } from "./article/ArticleEditForm"
import { MessageList } from "./Messages/MessageList"
import { MessageForm } from "./Messages/MessageForm"
import { MessageEditForm } from "./Messages/EditMessageForm"
import { FriendList } from "./friends/FriendList"

export const ApplicationViews = ({ isAuthenticated, setAuthUser }) => {
  const PrivateOutlet = () => {
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
  }

 
  return (
    <>
      <Routes>
        <Route path="/" element={<PrivateOutlet />} >
          <Route path="friends" element={<FriendList />} />
          <Route path="tasks" element={<Tasklist />} />
          <Route path="task/create" element={<TaskForm />} />
          <Route path="events" element={""} />

          <Route path="articles" element={<ArticleList />} />
          <Route path="articles/create" element={<ArticleForm />}/>
          <Route path="articles/:articleId/edit" element={<ArticleEditForm />} />
          
          <Route path="/messages" element={<MessageList />} />
          <Route path="/messages/create" element={<MessageForm />} />
          <Route path="/messages/:messageId/edit" element={<MessageEditForm />} />
          
        </Route>

        <Route path="/login" element={<Login setAuthUser={setAuthUser}/>} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}
