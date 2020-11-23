import React from 'react';
import Image from 'next/image';

import { Container, Content, Imagens, Imagem } from './style';

const Banner = () => {
	return (
		<Container>
			<Content>
				<p>02.</p>
				<p>Dark</p>
				<p>Interior</p>
				<p><div></div>Learn More</p>
			</Content>
			<Imagens>
				<Image
					src="/image/image01.jpg"
					alt="imagem"
					width={270}
					height={500}
				/>

				<Image
					src="/image/image02.jpg"
					alt="imagem"
					width={270}
					height={500}
				/>

				<Image 
					src="/image/image03.jpg"
					alt="imagem"
					width={200}
					height={500}
				/>
			</Imagens>
		</Container>
	)
}

export default Banner;
