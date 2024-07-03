import { Outlet } from "react-router-dom"

import './listChat.style.css'

const ListChatLayout = () => {

  return (
    <section className="layout-list-chat">
      <div className="list-chat">
        <div className="list-chat__search">
          {/* input para buscar usuario */}
        </div>

        <div className="list-chat__list">
          {/* lista de usuarios */}
        </div>
      </div>
      <>
        <Outlet />
      </>
    </section>
  )
}

export default ListChatLayout