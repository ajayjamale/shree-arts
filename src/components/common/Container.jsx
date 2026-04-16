import styles from './Container.module.css';

const Container = ({ className = '', children }) => {
  return <div className={`${styles.container} ${className}`.trim()}>{children}</div>;
};

export default Container;
