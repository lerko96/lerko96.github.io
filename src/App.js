// import logo from './logo.svg';
import React from 'react';

import './App.scss';
import Nav from './components/Nav';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
	const [darkMode, setDarkMode] = React.useState(false);

	React.useEffect(() => {
		const json = localStorage.getItem('lerko96-dark-mode');
		const currentMode = JSON.parse(json);
		if (currentMode) {
			setDarkMode(true);
		} else {
			setDarkMode(false);
		}
	}, []);

	React.useEffect(() => {
		if (darkMode) {
			document.body.classList.add('dark');
		} else {
			document.body.classList.remove('dark');
		}
		const json = JSON.stringify(darkMode);
		localStorage.setItem('lerko96-dark-mode', json);
	}, [darkMode]);

	return (
		<div className='App'>
			<div class='app__wrapper'>
				<Nav />
				<div class='switch-container'>
					<label class='switch-wrap'>
						<input
							type='checkbox'
							onClick={() => setDarkMode(!darkMode)}
						/>
						<div class='switch'></div>
					</label>
				</div>
				<Profile />
				<Projects />
				<Footer />
			</div>
		</div>
	);
}

export default App;
