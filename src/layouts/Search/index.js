import HeadlessTippy from '@tippyjs/react/headless';
import PopperWrapper from '~/compoments/Popper/Wrapper';
import AccountItem from '~/compoments/AccountItem';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { useEffect, useRef, useState } from 'react';
import { useDebounce } from '~/hooks';
import { search } from '~/Services/searchService';

const cx = classNames.bind(styles);
function Search() {
   const [searchValue, setSearchValue] = useState('');
   const [searchResult, setSearchResult] = useState([]);
   const [showResult, setShowResult] = useState(true);
   const [loading, setLoading] = useState(false);

   const debounced = useDebounce(searchValue, 500);
   const inputRef = useRef();
   useEffect(() => {
      if (!debounced.trim()) {
         setSearchResult([]);
         return;
      }

      const fetchApi = async () => {
         setLoading(true);
         const result = await search(debounced);
         setSearchResult(result);
         setLoading(false);
      };
      fetchApi();
   }, [debounced]);
   const handleHideResult = () => {
      setShowResult(false);
   };
   return (
      // úing a wrapper div or span
      <div>
         <HeadlessTippy
            interactive
            visible={searchResult.length > 0 && showResult}
            render={(attrs) => (
               <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                  <PopperWrapper>
                     <h4 className={cx('search-title')}>Accounts</h4>
                     {searchResult.map((result) => (
                        <AccountItem key={result.id} data={result} />
                     ))}
                  </PopperWrapper>
               </div>
            )}
            onClickOutside={handleHideResult}
         >
            <div className={cx('search')}>
               <input
                  ref={inputRef}
                  value={searchValue}
                  placeholder="Search accounts and videos"
                  spellCheck={false}
                  onChange={(e) => setSearchValue(e.target.value)}
                  onFocus={() => setShowResult(true)}
               />

               {/* chuyển mọi thứ thành boolean  */}
               {!!searchValue && !loading && (
                  <button
                     className={cx('clear')}
                     onClick={() => {
                        setSearchValue('');
                        setSearchResult([]);
                        inputRef.current.focus();
                     }}
                  >
                     <FontAwesomeIcon icon={faCircleXmark} />
                  </button>
               )}
               {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

               <button className={cx('search-btn')}>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
               </button>
            </div>
         </HeadlessTippy>
      </div>
   );
}

export default Search;
