import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { Container, Content, Imagens, Imagem } from './style';

const animacao = {
	inicia: {
		opacity: 0,
		y: 0,
		x: -30,
	},

	termina : {
		opacity: 1,
		y: 0,
		x: 0,
	},
}

const imagemAnima = {
	inicia: {
		opacity: 0,
		top: -10,
	},
	
	termina: {
		opacity: 1,
		top: 0,
	},
}

const Banner = () => {
	return (
		<Container>
			<Content>
				<motion.p
					variants={animacao}
					initial="inicia"
					animate="termina"
					transition={{ duration: 1 }}
				>
					02.
				</motion.p>

				<motion.p
					variants={animacao}
					initial="inicia"
					animate="termina"
					transition={{ duration: 1, delay: 1 }}	
				>
					Dark
				</motion.p>


				<motion.p
					variants={animacao}
					initial="inicia"
					animate="termina"
					transition={{ duration: 1, delay: 1 }}
				>
					Interior
				</motion.p>

				<motion.p
					variants={animacao}
					initial="inicia"
					animate="termina"
					transition={{ duration: 1, delay: 1.5 }}
				><div></div>
					Learn More
				</motion.p>

			</Content>
			<Imagens>
				<motion.div
					variants={imagemAnima}
					initial="inicia"
					animate="termina"
					transition={{ duration: 1, delay: 2 }}
				>
					<Image
						src="/image/image01.jpg"
						alt="imagem"
						width={270}
						height={500}
					/>
				</motion.div>

				<motion.div
					variants={imagemAnima}
					initial="inicia"
					animate="termina"
					transition={{ duration: 1, delay: 2.2 }}
				>
					<Image
						src="/image/image02.jpg"
						alt="imagem"
						width={270}
						height={500}
					/>
				</motion.div>

				<motion.div
					variants={imagemAnima}
					initial="inicia"
					animate="termina"
					transition={{ duration: 1, delay: 2.4 }}
				>
					<Image 
						src="/image/image03.jpg"
						alt="imagem"
						width={200}
						height={500}
					/>
				</motion.div>
				
			</Imagens>
		</Container>
	)
}

export default Banner;
