import { Outlet } from "react-router-dom"

import './listChat.style.css'

const ListChatLayout = () => {

  return (
    <section className="layout-list-chat">
      <div className="list-chat__search">
        {/* input para buscar usuario */}
      </div>
      <div>
        {/* lista de usuarios */}
      </div>
      <>
        <Outlet />
      </>
    </section>
  )
}

export default ListChatLayout