import React from 'react';

import wereHooked from '../images/were-hooked.png';
import donutClicker from '../images/donut-clicker.png';
import mysteryEducator from '../images/mystery-educator.png';
import trekkingSite from '../images/trek.png';
// import reviewSite from '../images/review-site.png';

const Projects = () => (
	<section id='projects'>
		<h2>projects</h2>

		<article class='project'>
			<a
				class='project__img_link'
				href='https://github.com/lerko96/were-hooked-repo'
				rel='noreferrer'
				target='_blank'
			>
				<img
					src={wereHooked}
					class='project__img'
					alt='were-hooked-img'
				/>
			</a>
			<div class='project__text'>
				<h3 class='project__title'>
					<a
						href='https://github.com/lerko96/were-hooked-repo'
						rel='noreferrer'
						target='_blank'
					>
						We're Hooked
					</a>
				</h3>
				<div class='project__subtitle_small'>
					<time datetime='2021-08-20 12:00:00'>
						<i class='fa fa-calendar mr-2'></i>Fri, August 20th 2021
					</time>
				</div>
				<div class='project__bar'></div>
				<div class='project__info'>
					<p>
						Designed, built and tested an MVC application that
						allows users to discover fishing locations in Ohio, as
						well as teach beginners how to get started fishing and
						the current regulations that are needed to follow. This
						project was built between a team of five in a completely
						remote environment with the help of Github, Zoom and
						Slack.
					</p>
				</div>
				<ul class='project__tagbox'>
					<li class='tag__item'>Java</li>
					<li class='tag__item'>Spring</li>
					<li class='tag__item'>JavaScript</li>
					<li class='tag__item'>Restful API</li>
					<li class='tag__item'>Thymeleaf</li>
					<li class='tag__item'>HTML</li>
					<li class='tag__item'>CSS</li>
					<li class='tag__item'>Responsive Design</li>
					{/* <li class='tag__item'>TDD</li> */}
					{/* <li class='tag__item'>VS Code</li> */}
					<li class='tag__item'>Git</li>
					<li class='tag__item'>Agile</li>
					<li class='tag__item'>Scrum</li>
					<li class='tag__item'>Zoom</li>
					<li class='tag__item'>Slack</li>
				</ul>
			</div>
		</article>
		<article class='project'>
			<a
				class='project__img_link'
				href='https://github.com/lerko96/mystery-educator'
				rel='noreferrer'
				target='_blank'
			>
				<img class='project__img' src={mysteryEducator} alt='' />
			</a>
			<div class='project__text'>
				<h3 class='project__title'>
					<a
						href='https://github.com/lerko96/mystery-educator'
						rel='noreferrer'
						target='_blank'
					>
						Mystery Educator
					</a>
				</h3>
				<div class='project__subtitle_small'>
					<time datetime='2021-07-23 12:00:00'>
						<i class='fas fa-calendar-alt mr-2'></i>Fri, July 23rd
						2021
					</time>
				</div>
				<div class='project__bar'></div>
				<div class='project__info'>
					<p>
						Designed, built and tested a single page application
						that renders unique data from the MET Museum and NASA
						APIs each time you visit. We also built a local backend
						database to store historical information. This project
						was built between a team of four in a completely remote
						environemnt with the help of Github, Zoom, and Slack.
					</p>
				</div>
				<ul class='project__tagbox'>
					<li class='tag__item'>JavaScript</li>

					<li class='tag__item'>Node.js</li>
					<li class='tag__item'>Spring</li>
					<li class='tag__item'>RESTful APIs</li>
					<li class='tag__item'>Java</li>
					<li class='tag__item'>HTML</li>
					<li class='tag__item'>CSS</li>
					<li class='tag__item'>Responsive Design</li>
					{/* <li class='tag__item'>TDD</li> */}
					{/* <li class='tag__item'>VS Code</li> */}
					<li class='tag__item'>Git</li>
					<li class='tag__item'>Agile</li>
					<li class='tag__item'>Scrum</li>
					<li class='tag__item'>Zoom</li>
					<li class='tag__item'>Slack</li>
				</ul>
			</div>
		</article>
		<article class='project'>
			<a
				class='project__img_link'
				href='https://github.com/lerko96/donut-clicker-lerko96'
				rel='noreferrer'
				target='_blank'
			>
				<img
					class='project__img'
					src={donutClicker}
					alt='donut-clicker-img'
				/>
			</a>
			<div class='project__text'>
				<h3 class='project__title'>
					<a
						href='https://github.com/lerko96/donut-clicker-lerko96'
						rel='noreferrer'
						target='_blank'
					>
						Donut Clicker
					</a>
				</h3>
				<div class='project__subtitle_small'>
					<time datetime='2021-07-09 12:00:00'>
						<i class='fas fa-calendar-alt mr-2'></i>Fri, July 9th
						2021
					</time>
				</div>
				<div class='project__bar'></div>
				<div class='project__info'>
					<p>
						Designed, built and tested a single page application
						that lets users make virtual donuts via clicking. Once
						enough donuts are made you have the ability to purchase
						upgrades such as auto-clickers and clicking-multipliers.
					</p>
				</div>
				<ul class='project__tagbox'>
					<li class='tag__item'>JavaScript</li>
					<li class='tag__item'>Node.js</li>
					<li class='tag__item'>HTML</li>
					<li class='tag__item'>CSS</li>
					<li class='tag__item'>Responsive Design</li>
					<li class='tag__item'>TDD</li>
					{/* <li class='tag__item'>VS Code</li> */}
					<li class='tag__item'>Git</li>
				</ul>
			</div>
		</article>
		<article class='project'>
			<a
				class='project__img_link'
				href='https://github.com/lerko96/trek'
				rel='noreferrer'
				target='_blank'
			>
				<img
					class='project__img'
					src={trekkingSite}
					alt='trekking-img'
				/>
			</a>
			<div class='project__text'>
				<h3 class='project__title'>
					<a
						href='https://github.com/lerko96/trek'
						rel='noreferrer'
						target='_blank'
					>
						Trekking Site
					</a>
				</h3>
				<div class='project__subtitle_small'>
					<time datetime='2021-06-18 12:00:00'>
						<i class='fas fa-calendar-alt mr-2'></i>Fri, June 18th
						2021
					</time>
				</div>
				<div class='project__bar'></div>
				<div class='project__info'>
					<p>
						Designed, built and tested an MVC application that lets
						users discover treks located by continent, region and
						type. This project was built between a team of four in a
						completely remote environemnt with the help of Github,
						Zoom and Slack.
					</p>
				</div>
				<ul class='project__tagbox'>
					<li class='tag__item'>Java</li>
					<li class='tag__item'>Spring</li>
					{/* <li class='tag__item'>OOP</li> */}
					<li class='tag__item'>HTML</li>
					<li class='tag__item'>CSS</li>
					<li class='tag__item'>Responsive Design</li>
					<li class='tag__item'>TDD</li>
					{/* <li class='tag__item'>IntelliJ</li> */}
					<li class='tag__item'>Git</li>
					<li class='tag__item'>Agile</li>
					<li class='tag__item'>Scrum</li>
					<li class='tag__item'>Zoom</li>
					<li class='tag__item'>Slack</li>
				</ul>
			</div>
		</article>
		{/* <article class='project'>
			<a
				class='project__img_link'
				href='https://github.com/lerko96/reviews-mvc'
				rel='noreferrer'
				target='_blank'
			>
				<img
					class='project__img'
					src={reviewSite}
					alt='review-site-img'
				/>
			</a>
			<div class='project__text'>
				<h3 class='project__title'>
					<a
						href='https://github.com/lerko96/reviews-mvc'
						rel='noreferrer'
						target='_blank'
					>
						Movie Reviews
					</a>
				</h3>
				<div class='project__subtitle_small'>
					<time datetime='2021-06-04 12:00:00'>
						<i class='fas fa-calendar-alt mr-2'></i>Fri, June 4th
						2021
					</time>
				</div>
				<div class='project__bar'></div>
				<div class='project__info'>
					<p>
						Designed, built and tested a Java application for movie
						reviews.
					</p>
				</div>
				<ul class='project__tagbox'>
					<li class='tag__item'>Java</li>
					<li class='tag__item'>SpringJPA</li>
					<li class='tag__item'>OOP</li>
					<li class='tag__item'>Thymeleaf</li>
					<li class='tag__item'>HTML</li>
					<li class='tag__item'>CSS</li>
					<li class='tag__item'>Responsive Design</li>
					<li class='tag__item'>TDD</li>
					<li class='tag__item'>IntelliJ</li>
					<li class='tag__item'>Github</li>
				</ul>
			</div>
		</article> */}
	</section>
);

export default Projects;
