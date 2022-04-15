import React from "react"
import { Routes, Route, Outlet, Navigate } from "react-router-dom"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { ArticleForm } from "./article/ArticleForm"
import { ArticleList } from "./article/ArticleList"
import { ArticleEditForm } from "./article/ArticleEditForm"
import { MessageList } from "./Messages/MessageList"
import { MessageForm } from "./Messages/MessageForm"
import { MessageEditForm } from "./Messages/EditMessageForm"

export const ApplicationViews = ({ isAuthenticated, setIsAuthenticated }) => {
  const PrivateOutlet = () => {
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
  }

  const setAuthUser = (user) => {
    sessionStorage.setItem("nutshell_user", JSON.stringify(user))
    setIsAuthenticated(sessionStorage.getItem("nutshell_user") !== null)
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<PrivateOutlet />} >

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
