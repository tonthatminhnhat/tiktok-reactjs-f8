import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);

function Button({
   to,
   href,
   children,
   outline,
   small = false,
   large = false,
   text = false,
   disable = false,
   rounded = false,
   className,
   leftIcon,
   rightIcon,
   onClick,
   primary,
   ...passProps
}) {
   let Comp = 'button';
   const props = {
      onClick,
      ...passProps,
   };
   if (disable) delete props.onClick;

   if (to) {
      props.to = to;
      Comp = Link;
   } else if (href) {
      props.href = href;
      Comp = 'a';
   }
   const classes = cx('wrapper', { [className]: className, primary, outline, small, large, text, disable, rounded });
   return (
      <Comp className={classes} {...props}>
         {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
         <span className={cx('title')}>{children}</span>
         {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
      </Comp>
   );
}

Button.propTypes = {
   to: PropTypes.string,
   href: PropTypes.string,
   primary: PropTypes.bool,
   outline: PropTypes.bool,
   text: PropTypes.bool,
   rounded: PropTypes.bool,
   disable: PropTypes.bool,
   children: PropTypes.node.isRequired,
   small: PropTypes.bool,
   large: PropTypes.bool,
   className: PropTypes.string,
   leftIcon: PropTypes.node,
   rightIcon: PropTypes.node,
   onClick: PropTypes.func,
};

export default Button;
