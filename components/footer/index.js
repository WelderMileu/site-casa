import React from 'react';
import { Container } from './style';
import { motion } from 'framer-motion';

const itemLeft = {
	inicia: {
		opacity: 0,
		x: -10,
		y: 0
	},

	termina: {
		opacity: 1,
		x: 0,
		y: 0
	}
}

const itemRight = {
	inicia: {
		opacity: 0,
		x: 10,
		y: 0
	},

	termina: {
		opacity: 1,
		x: 0,
		y: 0
	}
}

const Footer = () => {
	return (
		<Container>
			<motion.div
				variants={itemLeft}
				initial="inicia"
				animate="termina"
				transition={{ transition: .5, delay: 3 }}
			>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</motion.div>

			<motion.div
				variants={itemRight}
				initial="inicia"
				animate="termina"
				transition={{ transition: .5, delay: 3 }}	
			>
				<p>03 / 06</p>
				<div></div>
				<p>></p>
			</motion.div>
			
		</Container>
	)
}

export default Footer;
