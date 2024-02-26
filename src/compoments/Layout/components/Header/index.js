import {
   faCircleQuestion,
   faCoins,
   faEarthAsia,
   faEllipsisVertical,
   faGears,
   faKeyboard,
   faSignOut,
   faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Tippy from '@tippyjs/react';

import Button from '~/compoments/Button';
import Menu from '~/compoments/Popper/Menu';
import 'tippy.js/dist/tippy.css';
import { IconCloudUpload, IconMessage, IconPlane } from '~/compoments/Icons';
import Image from '~/compoments/Image';
import Search from '../../Search';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
   {
      icon: <FontAwesomeIcon icon={faEarthAsia} />,
      title: 'English',
      children: {
         title: 'Language',
         data: [
            {
               type: 'language',
               code: 'en',
               title: 'English',
            },
            {
               type: 'language',
               code: 'vi',
               title: 'Tiếng Việt',
               // children: {
               //    title: 'Language',
               //    data: [
               //       {
               //          code: 'en',
               //          title: 'English1',
               //       },
               //       {
               //          code: 'vi',
               //          title: 'Tiếng Việt1',
               //          children: {
               //             title: 'Language',
               //             data: [
               //                {
               //                   code: 'en',
               //                   title: 'English2',
               //                },
               //                {
               //                   code: 'vi',
               //                   title: 'Tiếng Việt2',
               //                },
               //             ],
               //          },
               //       },
               //    ],
               // },
            },
         ],
      },
   },
   {
      icon: <FontAwesomeIcon icon={faCircleQuestion} />,
      title: 'Feedback and help',
      to: '/feedback',
   },
   {
      icon: <FontAwesomeIcon icon={faKeyboard} />,
      title: 'Keyboard shortcuts',
   },
];

function Header() {
   const currenUser = true;

   const handleMenuChange = (menuItem) => {
      switch (menuItem.type) {
         case 'language':
            /// xuatsa ra
            break;
         default:
      }
   };
   const userMenu = [
      {
         icon: <FontAwesomeIcon icon={faUser} />,
         title: 'View profile',
         to: '/@hoaa',
      },
      {
         icon: <FontAwesomeIcon icon={faCoins} />,
         title: 'Get coin',
         to: '/coin',
      },
      {
         icon: <FontAwesomeIcon icon={faGears} />,
         title: 'Setting',
         to: '/setting',
      },
      ...MENU_ITEMS,
      {
         icon: <FontAwesomeIcon icon={faSignOut} />,
         title: 'Log out',
         to: '/logout',
         setparate: true,
      },
   ];
   return (
      <header className={cx('wrapper')}>
         <div className={cx('inner')}>
            {/*  */}
            <div className={cx('logo')}>
               <img src="https://inrenhat.com/wp-content/uploads/2022/08/logo-Tiktok.jpg" height={80}></img>
            </div>
            {/* Search */}
            <Search />
            {/*  */}
            <div className={cx('action')}>
               {currenUser ? (
                  <>
                     <Tippy delay={(0, 200)} content="Upload-video" placement="bottom">
                        <button className={cx('action-btn')}>
                           <IconCloudUpload />
                           {/* <FontAwesomeIcon icon={faCloudUpload} /> */}
                        </button>
                     </Tippy>
                     <Tippy delay={(0, 200)} content="Messege" placement="bottom">
                        <button className={cx('action-btn')}>
                           <IconPlane />
                           {/* <FontAwesomeIcon icon={faCloudUpload} /> */}
                        </button>
                     </Tippy>
                     <Tippy delay={(0, 200)} content="Inbox" placement="bottom">
                        <button className={cx('action-btn')} style={{ position: 'relative' }}>
                           <div className={cx('notification')}>22</div>
                           <IconMessage />
                        </button>
                     </Tippy>
                     {/* <button className={cx('action-btn')}>
                        <FontAwesomeIcon icon={faMessage} />
                     </button> */}
                  </>
               ) : (
                  <>
                     <Button text>Upload</Button>
                     <Button primary>Log in</Button>
                  </>
               )}
               <Menu items={currenUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                  {currenUser ? (
                     <Image
                        className={cx('user-avatar')}
                        src="https://i.ytimg.com/vi/MxdE7luY48c/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDKU8M144H6phOFWsYafdDHiC7o-A"
                        alt="Nguyen Van An"
                        // fallback="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                     />
                  ) : (
                     <button className={cx('more-btn')}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                     </button>
                  )}
               </Menu>
            </div>
         </div>
      </header>
   );
}

export default Header;
