import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import s from './Layout.module.scss'
import Main from './Main/Main';
import Sidebar from './Sidebar/Sidebar';


export const Layout = () => {
	return (
		<div className={s.container}>
			<Header className={s.header} />
			<Sidebar className={s.sidebar} />
			<Main className={s.main} />
			<Footer className={s.footer} />
		</div>

	)
}

