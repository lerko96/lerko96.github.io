import React from 'react';

const Footer = () => (
	<footer>
		<span class='copyright'>&copy; 2021 Tyler Koenig</span>
		<div class='foot__links'>
			<a
				href='https://github.com/lerko96'
				rel='noreferrer'
				target='_blank'
				title='github'
			>
				<i class='fa fa-github fa-2x' aria-hidden='true'></i>
			</a>
			<a
				href='https://www.linkedin.com/in/tyler-koenig-72607a18b/'
				rel='noreferrer'
				target='_blank'
				title='LinkedIn'
			>
				<i class='fa fa-linkedin-square fa-2x' aria-hidden='true'></i>
			</a>
			<a
				href='mailto:tylerkng96@icloud.com'
				rel='noreferrer'
				target='_blank'
				title='email'
			>
				<i class='fa fa-envelope-o fa-2x' aria-hidden='true'></i>
			</a>
		</div>
	</footer>
);

export default Footer;
