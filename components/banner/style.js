import styled from 'styled-components';


export const Container = styled.div`
	width: 100%;
	height: 80vh;

	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const Content = styled.div`
	padding-left: 100px;

	p:nth-child(1) {
		font-weight: bold;
		font-size: 2rem;
	}

	p:nth-child(2), 
	p:nth-child(3) {
		font-size: 5rem;
	}

	p:nth-child(4) {
		font-size: 1.5rem;
		color: orange;
		
		display:flex;
		flex-direction: row;
		align-items: center;
		
		div {
			width: 50px;
			height: 2px;
			background-color: orange;
			margin-right: 10px;
		}
	}

	@media (max-width:600px) {
		padding-left: 40px;
		
		p:nth-child(2),
		p:nth-child(3) {
			font-size: 3rem;
		}
	}
`;

export const Imagens = styled.div`
	width: 60%;

	display:flex;
	flex-direction: row;
	justify-content: space-around;

	@media (max-width: 900px) {
		flex-direction: column;
		max-height: 500px;
		max-width: 30%;
	}
`;


