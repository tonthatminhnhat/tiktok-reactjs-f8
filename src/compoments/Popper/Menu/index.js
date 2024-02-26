import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import PopperWrapper from '~/compoments/Popper/Wrapper';
import Tippy from '@tippyjs/react/headless';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);
const defaultFn = () => {};

function Menu({ children, items = [], onChange }) {
   const [history, setHistory] = useState([{ data: items }]);
   const current = history[history.length - 1];
   // console.log('Test');
   // bị lặp vô hạn
   const renderItem = () => {
      return current.data.map((item, index) => {
         const isParent = !!item.children;
         return (
            <MenuItem
               key={index}
               data={item}
               onClick={() => {
                  if (isParent && !history.includes(item.children)) {
                     setHistory((prev) => [...prev, item.children]);
                  } else {
                     onChange(item);
                  }
               }}
            />
         );
      });
   };
   return (
      <Tippy
         trigger="click"
         interactive={true}
         delay={[0, 700]}
         offset={[10, 14]}
         placement="bottom-end"
         render={(attrs) => (
            <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
               <PopperWrapper className={cx('menu-popper')}>
                  {history.length > 1 && (
                     <Header
                        title="Language"
                        onBack={() => {
                           setHistory((prev) => prev.slice(0, prev.length - 1));
                        }}
                     />
                  )}
                  {renderItem()}
               </PopperWrapper>
            </div>
         )}
         onHide={() => setHistory((prev) => prev.slice(0, 1))}
      >
         {children}
      </Tippy>
   );
}

export default Menu;
