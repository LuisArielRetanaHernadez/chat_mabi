import { Outlet } from "react-router-dom"

import './listChatLayout.style.css'
import ListChat from "../../components/listChat/ListChat"

const ListChatLayout = () => {

  return (
    <section className="layout-list-chat">
      <div className="list-chat layout-list-chat__list-chat ">
        <div className="list-chat__search">
          {/* input para buscar usuario */}f
        </div>

        <div className="list-chat__list">
          <ListChat />
        </div>
      </div>
      <>
        <Outlet />
      </>
    </section>
  )
}

export default ListChatLayout