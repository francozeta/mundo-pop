import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/img/logo-removebg.png';

import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faXTwitter, faInstagram, faSpotify, faTiktok } from '@fortawesome/free-brands-svg-icons'


import '../styles/NavBar.css'
const NavBar = () => {

	const navBgResponsiveRef = useRef(null);
	const navResponsiveRef = useRef(null);
	const isScreenSmall = window.innerWidth <= 600;
	
	const openNav = () => {
		navBgResponsiveRef.current.style.opacity = '1';
		navBgResponsiveRef.current.style.visibility = 'visible';
	
		if (isScreenSmall) {
			navResponsiveRef.current.style.transform = 'translateY(0)';
		} else {
			navResponsiveRef.current.style.transform = 'translateX(0)';
		}
		document.body.style.overflow = 'hidden';
	};
	
	const closeNav = () => {
		navBgResponsiveRef.current.style.opacity = '0';
		navBgResponsiveRef.current.style.visibility = 'hidden';
	
		if (isScreenSmall) {
			navResponsiveRef.current.style.transform = 'translateY(110%)';
		} else {
			navResponsiveRef.current.style.transform = 'translateX(110%)';
		}
		document.body.style.overflow = 'auto';
	};

	return (
		<>
		<header id="header">
			<nav className="nav__menu">
				<div className="logo">
					<a href="/"><img src={logo}/></a>
				</div>
				<ul className="nav__links">
					<li><a href="/">Inicio</a></li>
					<li><a href="/letras">Letras</a></li>
					<li><a href="/noticias">Noticias</a></li>
					<li><a href="/reseñas">Reseñas</a></li>
					<li><a href="/registrarse">Registrate</a></li>
				</ul>

				<button className="btn__bars" onClick={openNav}><FontAwesomeIcon icon={faBars}/></button>
				<div className="nav__bg__responsive" ref={navBgResponsiveRef}>
					<div className="nav__responsive" ref={navResponsiveRef}>
						<div className="container__btn__exit">
							<button className="btn__exit" onClick={closeNav}><FontAwesomeIcon icon={faTimes}/></button>
						</div>
						<ul className="nav__links__responsive">
							<li><a href="/">Inicio</a></li>
							<li><a href="/ofertas">Letras</a></li>
							<li><a href="/noticias">Noticias</a></li>
							<li><a href="reseñas">Reseñas</a></li>
							<li><a href="registrarse">Registrate</a></li>
						</ul>
			
						<ul className="nav__links__socialmedia__responsive">
							<li><a href=""><FontAwesomeIcon icon={faFacebook} /></a></li>
							<li><a href=""><FontAwesomeIcon icon={faInstagram}/></a></li>
							<li><a href=""><FontAwesomeIcon icon={faSpotify}/></a></li>
							<li><a href=""><FontAwesomeIcon icon={faXTwitter}/></a></li>
							<li><a href=""><FontAwesomeIcon icon={faTiktok}/></a></li>
						</ul>
			
						<ul className="nav__link__us__responsive">
							<li><a href="/nosotros">¿Quienes somos?</a></li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
		</>
	)
}
export default NavBar;
	