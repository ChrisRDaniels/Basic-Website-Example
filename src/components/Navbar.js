import './NavbarStyles.css';
import React from 'react';
import {} from 'bootstrap';
import Logo from '../assets/Logo.png';

const Navbar = () => {
	return (
		<nav class='navbar navbar-expand-lg navbar navbar-light bg-navbar navbar-text'>
			<div class='container-fluid'>
				<img className='logo-img' src={Logo} alt='Logo'></img>
				<a class='navbar-brand' href='#'>
					Better Burritos
				</a>
				<button
					class='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span class='navbar-toggler-icon'></span>
				</button>
				<div class='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul class='navbar-nav me-auto mb-2 mb-lg-0'>
						<li class='nav-item'>
							<a class='nav-link active' aria-current='page' href='/'>
								Home
							</a>
						</li>
						<li class='nav-item'>
							<a class='nav-link' href='/contact'>
								Contact
							</a>
						</li>
						<li class='nav-item dropdown'>
							<a
								class='nav-link dropdown-toggle'
								href='#'
								id='navbarDropdown'
								role='button'
								data-bs-toggle='dropdown'
								aria-expanded='false'
							>
								Menu
							</a>
							<ul class='dropdown-menu' aria-labelledby='navbarDropdown'>
								<li>
									<a class='dropdown-item' href='#'>
										Full PDF Menu
									</a>
								</li>
								<hr class='dropdown-divider' />
								<li>
									<a class='dropdown-item' href='/breakfast'>
										Breakfast
									</a>
								</li>
								<li></li>
								<li>
									<a class='dropdown-item' href='/lunch'>
										Lunch
									</a>
								</li>
								<li>
									<a class='dropdown-item' href='/dinner'>
										Dinner
									</a>
								</li>
							</ul>
						</li>
						<li class='nav-item'>
							<a class='nav-link' href='/about'>
								About Us
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
