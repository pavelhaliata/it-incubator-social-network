import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import s from './Layout.module.scss'
import Sidebar from './Sidebar/Sidebar';


export const Layout = () => {
	return (
		<div className={s.wrapper}>
			<header>
				<Header className={s.header} />
			</header>
			<div className={s.sidebar}>
				<Sidebar className={''} />
			</div>
			<main>
				<Outlet/>
			</main>
			<footer>
				<Footer className={s.footer} />
			</footer>
		</div>

	)
}
