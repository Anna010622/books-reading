import { Suspense } from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
	return (
		<>
			<Header />
			<main>
				<div className="container">
					<Suspense fallback={<div>Loading...</div>}>
						<Outlet />
					</Suspense>
				</div>
			</main>
		</>
	);
};

export default Layout;
