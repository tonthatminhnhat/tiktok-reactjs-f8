import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import PopperWrapper from '~/compoments/Popper/Wrapper';
import Tippy from '@tippyjs/react/headless';
import AccountPreview from './AccountPreview/AccountPreview';
const cx = classNames.bind(styles);

function AccountItem() {
   const renderPreview = (props) => {
      return (
         <div tabIndex="-1" {...props}>
            <PopperWrapper>
               <div classNames={cx('preview')}>
                  <AccountPreview />
               </div>
            </PopperWrapper>
         </div>
      );
   };
   return (
      <div>
         <Tippy interactive delay={[800, 0]} offset={[-20, 0]} render={renderPreview} placement="bottom">
            <div className={cx('account-item')}>
               <img
                  src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/81cb5c3fa8095b560f221818193463e4~c5_100x100.webp?lk3s=a5d48078&x-expires=1711962000&x-signature=bC4LUtiAyFL4KYRn37M1qMb8ZBc%3D"
                  alt=""
                  className={cx('avatar')}
               />
               <div className={cx('item-info')}>
                  <p className={cx('nickname')}>
                     <strong>Minh Nhật</strong>
                     <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                  </p>
                  <p className={cx('name')}>1111</p>
               </div>
            </div>
         </Tippy>
      </div>
   );
}
AccountItem.propTypes = {};
export default AccountItem;
