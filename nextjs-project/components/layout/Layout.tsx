import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';
import { ReactNode } from 'react';

type layoutProps = {
    children: ReactNode;
};

function Layout(props: layoutProps) {
    return (
        <div>
            <MainNavigation />
            <main className={classes.main}>{props.children}</main>
        </div>
    );
}

export default Layout;
