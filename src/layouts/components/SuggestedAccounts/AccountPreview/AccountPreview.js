import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/compoments/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountPreview() {
   return (
      <div className={cx('wrapper')}>
         <div className={cx('header')}>
            <img
               className={cx('avatar')}
               src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/81cb5c3fa8095b560f221818193463e4~c5_100x100.webp?lk3s=a5d48078&x-expires=1711962000&x-signature=bC4LUtiAyFL4KYRn37M1qMb8ZBc%3D"
               alt=""
            />

            <Button className={cx('follow-btn')} primary small>
               Follow
            </Button>
         </div>
         <div className={cx('body')}>
            <p className={cx('nickname')}>
               <strong>Minh Nhật</strong>
               <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </p>
            <p className={cx('name')}>Tôn Thất Minh Nhật</p>
            <p className={cx('analytics')}>
               <strong className={cx('value')}>8.2M </strong>
               <span className={cx('label')}>Followers </span>
               <strong className={cx('value')}>8.2M </strong>
               <span className={cx('label')}>Likes </span>
            </p>
         </div>
      </div>
   );
}

export default AccountPreview;
