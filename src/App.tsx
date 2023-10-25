import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import './i18n';
import Layout from './components/Layout/Layout';

const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const RegistrationPage = lazy(
	() => import('./pages/RegistrationPage/RegistrationPage')
);
const LibraryPage = lazy(() => import('./pages/LibraryPage/LibraryPage'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));

import './styles/styles.scss';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<LibraryPage />} />
				<Route path="home" element={<HomePage />} />
				<Route path="login" element={<LoginPage />} />
				<Route path="registration" element={<RegistrationPage />} />
				<Route path="*" element={<LibraryPage />} />
			</Route>
		</Routes>
	);
}

export default App;
