import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import s from './Layout.module.scss'
import Sidebar from './Sidebar/Sidebar';

type IProps={
	statePage: string
}
export const Layout = ({statePage}:IProps) => {
	return (
		<div className={s.wrapper}>
			<header>
				<Header className={s.header} statePage={statePage} />
			</header>
			<div className={s.sidebar}>
				<Sidebar className={''} />
			</div>
			<main>
				<div className={s.container}>
					<Outlet />
				</div>
			</main>
			<footer>
				<Footer className={s.footer} />
			</footer>
		</div>

	)
}
