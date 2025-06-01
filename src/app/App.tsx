import Login from '../pages/Login';
import styles from './styles/App.module.scss';
import './styles/reset.scss';
function App() {
	return (
		<div className={styles['App']}>
			<Login />
		</div>
	);
}

export default App;
