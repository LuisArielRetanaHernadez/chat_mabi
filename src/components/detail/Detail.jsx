import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './detail.style.css'
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons'

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
        <div className='detail__option'>
          <div className='detail__title'>
            <span>Privacy & help</span>
            <img alt='' />
          </div>
        </div>
        <div className='detail__option'>
          <div className='detail__title'>
            <span>Shered photos</span>
            <img alt='' />
          </div>
          <div className='photos'>
            <div className='photos__item'>
              <img alt='' />
              <span>photo_11-11-1.png</span>
            </div>
            <span className='photo__icon-download'>
              <FontAwesomeIcon icon={faFileArrowDown} />
            </span>
          </div>
        </div>
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