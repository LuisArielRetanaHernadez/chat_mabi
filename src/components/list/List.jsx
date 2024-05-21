import './list.style.css'

// components
import UserInfo from '../userInfo/UserInfo';
import ListChat from '../listChat/ListChat';

const List = () => {
  return (
    <div className='list'>
      <UserInfo />
      <ListChat />
    </div>
  )
}

export default List;