import logo from '../../assets/shutterstock-152854481.webp';
import classes from './Logo.module.css';

const Logo = () => {
  return (
    <div className={classes.logo}>
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Logo;
