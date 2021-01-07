import React from 'react';
import styles from './ButtonPrimary.module.scss';

interface Props {
  onClick?: Function;

  style?: Object;
  className?: String;
}

const ButtonPrimary = (props) => {
  const ButtonVariants = {
    Green: {
      backgroundColor: '#16D585',
      color: '#fafafa',
    },
    Danger: {
      backgroundColor: '#FF2E4B',
      color: '#fafafa',
    },
    DarkBlue: {
      backgroundColor: '#3520C4',
      color: '#fafafa',
    },
    Black: {
      backgroundColor: '#141414',
      color: '#ffffffde',
    },
  };
  const handleChange = () => {
    props.onClick();
  };
  return (
    <button
      className={`${styles.ButtonPrimary} ${props.className}`}
      style={{ ...props.style }}
      onClick={handleChange}
      type={props.type}
    >
      {props.children}
    </button>
  );
};
export default ButtonPrimary;
