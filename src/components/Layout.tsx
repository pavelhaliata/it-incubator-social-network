import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
import { HeaderContainer } from './Header/HeaderContainer';
import style from './Layout.module.scss'
import Sidebar from './Sidebar/Sidebar';

type LayoutProps = {
	statePage: string
}
export const Layout = ({ statePage }: LayoutProps) => {
	return (
		<div className={style.wrapper}>
			<header>
				<HeaderContainer/>
			</header>
			<div className={style.sidebar}>
				<Sidebar className={''} />
			</div>
			<main>
				<div className={style.container}>
					<Outlet />
				</div>
			</main>
			<footer>
				<Footer className={style.footer} />
			</footer>
		</div>

	)
}
