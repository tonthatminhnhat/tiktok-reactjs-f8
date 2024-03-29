import { useState, forwardRef } from 'react';
import classNames from 'classnames';
import images from '~/assets/images';
import style from './Image.module.scss';
import PropTypes from 'prop-types';

const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
   const [fallback, setFallback] = useState('');

   const handleError = () => {
      setFallback(customFallback);
   };
   return (
      <img
         className={classNames(style.wrapper, className)}
         ref={ref}
         alt={alt}
         src={fallback || src}
         {...props}
         onError={handleError}
      />
   );
});
Image.propTypes = {
   alt: PropTypes.string,
   className: PropTypes.string,
   fallback: PropTypes.string,
   src: PropTypes.string,
};
export default Image;
