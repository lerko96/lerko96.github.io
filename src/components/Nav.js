import React from 'react';

const Nav = () => (
	<header>
		<nav>
			<div id='logo'>
				<a href='index.html'>tk</a>
			</div>
			<div id='nav__list'>
				<ul>
					{/* <li id='nav__contact'>
						<a href='#contact' target='_self'>
							CONTACT
						</a>
					</li> */}
					<li>
						<a href='#profile' target='_self'>
							PROFILE
						</a>
					</li>
					<li>
						<a href='#projects' target='_self'>
							PROJECTS
						</a>
					</li>
					{/* <li>
						<button onClick={() => setDarkMode(!darkMode)}>
							Toggle Dark Mode
						</button>
					</li> */}
					{/* <li>
						<a href='#skills' target='_self'>
							SKILLS
						</a>
					</li> */}
				</ul>
			</div>
		</nav>
	</header>
);

export default Nav;
