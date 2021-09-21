import React from 'react';

import headshot from '../images/headshot-tyler_koenig.png';

// function Greet() {
//     return <p>Hello TK</p>
// }

const Profile = () => (
	<section id='profile'>
		<article class='profile__card'>
			<div class='card__img'>
				<img id='headshot' src={headshot} alt='tyler' />
			</div>
			<div class='card__bio'>
				<div class='bio__name'>
					<a href='index.html'>TYLER KOENIG</a>
				</div>
				<div class='bio__desc'>
					<p>SOFTWARE DEVELOPER</p>
				</div>
				<div class='bio__contacts' id='contact'>
					<a
						href='https://www.linkedin.com/in/tyler-koenig-72607a18b/'
						rel='noreferrer'
						target='_blank'
						title='LinkedIn'
					>
						<i
							class='fa fa-linkedin-square fa-2x'
							aria-hidden='true'
						></i>
					</a>
					<a
						href='https://github.com/lerko96'
						rel='noreferrer'
						target='_blank'
						title='github'
					>
						<i class='fa fa-github fa-2x' aria-hidden='true'></i>
					</a>
					<a
						href='mailto:tylerkng96@icloud.com'
						rel='noreferrer'
						target='_blank'
						title='email'
					>
						<i
							class='fa fa-envelope-o fa-2x'
							aria-hidden='true'
						></i>
					</a>
				</div>
			</div>
		</article>
		<article class='profile__about'>
			<h2>about</h2>
			<p>
				Full-Stack Java Developer, with a focus on Front-End
				Development. I graduated with an Associate of Arts from Lorain
				County Community College in Spring of 2018. I began building
				HTML, CSS and JavaScript projects by the Summer of 2020 from
				courses provided on Udemy. I received my Certificate in Software
				Development from We Can Code IT in Fall of 2021. Thanks to the
				courses I've taken, I have developed strong skills needed for
				working in remote team environments, and ones that utilize Scrum
				and Agile practices. My passion comes from seeing ideas be
				brought to life. Let's get to work.
			</p>
		</article>
		<article class='profile__skills' id='skills'>
			<h2>skills</h2>
			<ul>
				<li>Java</li>
				<li>Spring</li>
				<li>MVC</li>
				<li>JavaScript</li>
				<li>JSON</li>
				<li>Restful APIs</li>
				<li>Test Driven Development</li>
				<li>Relational Databases</li>
				<li>Git</li>
				<li>Agile/ Scrum</li>
				<li>HTML</li>
				<li>CSS</li>
				<li>SCSS</li>
				<li>React</li>
				<li>Responsive Design</li>
				<li>Thymeleaf</li>
				{/* <li>Object Oriented Programming</li> */}
			</ul>
		</article>
	</section>
);

export default Profile;
