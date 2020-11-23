import styled from 'styled-components';

export const Nav = styled.nav`
	width: 100%;
	
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	padding: 20px;
	border-bottom: 1px solid #3F3E45;

	a {
		text-decoration: none;
		color: var(--primary-color);
		letter-spacing: .2rem !important;
	}

	ul {
		display:flex;
		flex-direction: row;
		justify-content: space-around;

		list-style: none;
		width: 50%;
		font-weight: 700;

		li:nth-child(1) a {
			color: var(--light-color);
		}

		li:nth-child(5) {
			display: flex;
			flex-direction: column;
			align-items: flex-end;
			div {
				height: 3px;
				background-color: var(--primary-color);
				margin-bottom: 5px;
			}

			div:nth-child(1) {
				width: 15px;
			}

			div:nth-child(2) {
				width: 10px;
			}

			div:nth-child(3) {
				width: 20px;
			}
		}
	}

	@media (max-width: 900px) {
		ul {
			justify-content: flex-end;
		}

		li:nth-child(1),
		li:nth-child(2),
		li:nth-child(3),
		li:nth-child(4) {
			display: none;
		}
	}
`;

export const Logo = styled.a`
	letter-spacing: .8rem !important;
	color: var(--light-color) !important;
	font-weight: 700;
	font-size: 1.2rem;
`;




