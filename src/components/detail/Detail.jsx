import './detail.style.css'

const Detail = () => {
  return (
    <div className='detail'>
      <div className='detail__user'>
        <img className='detail__user' />
        <h2>mabi Godzilla</h2>
        <p>Mamadisima</p>
      </div>
      <div className='detail__information'>
        <div className='detail__option'>
          <div className='detail__title'>
            <span>Chat Setting</span>
            <img alt='' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail