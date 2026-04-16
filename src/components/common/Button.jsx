import styles from './Button.module.css';

const Button = ({ children, variant = 'primary', className = '', type = 'button', ...props }) => {
  return (
    <button type={type} className={`${styles.button} ${styles[variant]} ${className}`.trim()} {...props}>
      {children}
    </button>
  );
};

export default Button;
