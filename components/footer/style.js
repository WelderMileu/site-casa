import styled from 'styled-components';

export const Container = styled.footer`
	display:flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px;

	div:nth-child(1) {
		display: flex;
		flex-direction: row;
		margin-left: 20px;

		div {
			width: 10px;
			height: 10px;
			background-color: #666;
			margin-left: 30px;
		}

		div:nth-child(2) {
			background-color: orange;
			transform: scale(1.5);
		}
	}

	div:nth-child(2) {
		display: flex;
		flex-direction: row;
		align-items: center;
		color: var(--primary-color);
		font-weight: 500;
		font-size: 1.2rem;

		div {
			width: 50px;
			height: 1px;
			background-color: var(--primary-color);
			margin-right: 10px;
		}

		p:nth-child(1) {
			padding-right: 10px;
		}
	}

	@media (max-width: 600px) {
		div:nth-child(1) {
			margin-left: 1px;

			div {
				margin-left: 15px;
			}	
		}
	}
`;
