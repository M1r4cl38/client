import { Outlet } from 'react-router-dom';

//import style from './Basiclayout.module.css';

export function BasicLayout() {
    return (
        <>
            <header>
                header
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                footer
            </footer>
        </>
    );
}