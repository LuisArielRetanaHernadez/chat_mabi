import { Outlet } from "react-router-dom"

import './listChatLayout.style.css'
import ListChat from "../../components/listChat/ListChat"

const ListChatLayout = () => {

  return (
    <section className="layout-list-chat">
      <div className="layout-list-chat__list-chat ">
        <ListChat />
      </div>
      <div className="layout-list-chat__box">
        <Outlet />
      </div>
    </section>
  )
}

export default ListChatLayout