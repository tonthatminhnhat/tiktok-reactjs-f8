import React, { useRef } from 'react';
import styles from './Icons.module.scss';

const IconCloudUpload = ({ width = '3.4rem', height = '3.4rem', className, props }) => {
   const cloudRef = useRef(null);
   const arrowRef = useRef(null);

   const handleHover = () => {
      const cloud = cloudRef.current;
      const arrow = arrowRef.current;
      cloud.classList.add(styles.rotate);
      arrow.classList.add(styles.rotate);
      setTimeout(() => {
         cloud.classList.remove(styles.rotate);
         arrow.classList.remove(styles.rotate);
      }, 600);
   };

   return (
      <svg
         viewBox="0 0 1024 1024"
         fill="currentColor"
         height={height}
         width={width}
         className={className}
         onMouseEnter={handleHover}
         {...props}
      >
         <path
            ref={arrowRef}
            d="M518.3 459a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V856c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V613.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 459z"
         />
         <path
            ref={cloudRef}
            d="M811.4 366.7C765.6 245.9 648.9 160 512.2 160S258.8 245.8 213 366.6C127.3 389.1 64 467.2 64 560c0 110.5 89.5 200 199.9 200H304c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8h-40.1c-33.7 0-65.4-13.4-89-37.7-23.5-24.2-36-56.8-34.9-90.6.9-26.4 9.9-51.2 26.2-72.1 16.7-21.3 40.1-36.8 66.1-43.7l37.9-9.9 13.9-36.6c8.6-22.8 20.6-44.1 35.7-63.4a245.6 245.6 0 0152.4-49.9c41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.2c19.9 14 37.5 30.8 52.4 49.9 15.1 19.3 27.1 40.7 35.7 63.4l13.8 36.5 37.8 10C846.1 454.5 884 503.8 884 560c0 33.1-12.9 64.3-36.3 87.7a123.07 123.07 0 01-87.6 36.3H720c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h40.1C870.5 760 960 670.5 960 560c0-92.7-63.1-170.7-148.6-193.3z"
         />
      </svg>
   );
};

const IconMessage = ({ width = '2.4rem', height = '3.2rem', className }) => {
   const messRef = useRef(null);

   const handleHover = () => {
      const mess = messRef.current;
      mess.classList.add(styles.rotate);
      setTimeout(() => {
         mess.classList.remove(styles.rotate);
      }, 600);
   };

   return (
      <svg
         fill="currentColor"
         viewBox="0 0 15 15"
         height={height}
         width={width}
         className={className}
         onMouseEnter={handleHover}
         // style={{ position: 'relative' }}
      >
         <path
            ref={messRef}
            fill="currentColor"
            stroke="currentColor" // Màu viền
            strokeWidth="0.5" // Độ rộng của viền
            d="M5.5 11.493l.416-.278a.5.5 0 00-.416-.222v.5zm2 2.998l-.416.277a.5.5 0 00.832 0l-.416-.277zm2-2.998v-.5a.5.5 0 00-.416.222l.416.278zm-4.416.277l2 2.998.832-.555-2-2.998-.832.555zm2.832 2.998l2-2.998-.832-.555-2 2.998.832.555zM9.5 11.993h4v-1h-4v1zm4 0c.829 0 1.5-.67 1.5-1.5h-1c0 .277-.223.5-.5.5v1zm1.5-1.5V1.5h-1v8.994h1zM15 1.5C15 .67 14.329 0 13.5 0v1c.277 0 .5.223.5.5h1zM13.5 0h-12v1h12V0zm-12 0C.671 0 0 .67 0 1.5h1c0-.277.223-.5.5-.5V0zM0 1.5v8.993h1V1.5H0zm0 8.993c0 .83.671 1.5 1.5 1.5v-1a.499.499 0 01-.5-.5H0zm1.5 1.5h4v-1h-4v1zM5 7h5V6H5v1z"
         />
      </svg>
   );
};

const IconPlane = ({ width = '2.6rem', height = '3.2rem', className }) => {
   const messPlane = useRef(null);

   const handleHover = () => {
      const plane = messPlane.current;
      plane.classList.add(styles.rotate);
      setTimeout(() => {
         plane.classList.remove(styles.rotate);
      }, 600);
   };

   return (
      <svg
         fill="currentColor"
         viewBox="0 0 15 15"
         height={height}
         width={width}
         className={className}
         onMouseEnter={handleHover}
         style={{ transform: 'rotate(-30deg)', top: '-4px', position: 'relative' }}
      >
         <path
            ref={messPlane}
            fill="currentColor"
            fillRule="evenodd"
            stroke="currentColor"
            strokeWidth="0.2"
            d="M1.203 1.043a.5.5 0 00-.635.709L3.921 7.5.568 13.248a.5.5 0 00.635.709l13.5-6a.5.5 0 000-.914l-13.5-6zM4.846 7.1L2.212 2.586 13.27 7.5 2.212 12.414 4.846 7.9H9a.4.4 0 100-.8H4.846z"
            clipRule="evenodd"
         />
      </svg>
   );
};
export { IconCloudUpload, IconMessage, IconPlane };
