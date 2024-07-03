import { Outlet } from "react-router-dom"

const ListChatLayout = () => {

  return (
    <section className="list-chat">
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