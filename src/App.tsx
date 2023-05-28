import { FC, Fragment } from 'react';
import './assets/styles/app.css';
import './assets/styles/app.scss';

import Login from './pages/Login';


const App: FC = () => {
	return (
		<Fragment>
			<Login />
		</Fragment>
	);
};

export default App;
