import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
   return (
      <header className={cx('wrapper')}>
         <div className={cx('inner')}>
            {/*  */}
            <div className={cx('logo')}>
               <img src="https://inrenhat.com/wp-content/uploads/2022/08/logo-Tiktok.jpg" height={80}></img>
            </div>
            {/*  */}
            <div className={cx('search')}>
               <input placeholder="Search accounts and videos" spellCheck={false} />
               <button className={cx('clear')}>
                  <FontAwesomeIcon icon={faCircleXmark} />
               </button>
               <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
               <button className={cx('search-btn')}>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
               </button>
            </div>
            {/*  */}
            <div className={cx('action')}></div>
         </div>
      </header>
   );
}

export default Header;
