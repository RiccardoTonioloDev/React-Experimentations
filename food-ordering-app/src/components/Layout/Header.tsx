import mealsImage from '../../assets/img.png';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

type HeaderProps = {
    onShowCart: () => void;
};

const Header = (props: HeaderProps) => {
    return (
        <>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="A table full of delicious food." />
            </div>
        </>
    );
};

export default Header;
