import { useState, forwardRef } from 'react';
import classNames from 'classnames';
import images from '~/assets/images';
import style from './Image.module.scss';

const Image = forwardRef(({ src, className, fallback: customFallback = images.noImage, ...props }, ref) => {
   const [fallback, setFallback] = useState('');

   const handleError = () => {
      setFallback(customFallback);
   };
   return (
      <img
         className={classNames(style.wrapper, className)}
         ref={ref}
         src={fallback || src}
         {...props}
         onError={handleError}
      />
   );
});

export default Image;
