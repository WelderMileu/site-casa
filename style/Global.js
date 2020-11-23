import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
	:root {
		--primary-color: #909090;
		--light-color: #f1f1f1;
	}

	*,
	html,
	#root {
		padding:0;
		margin:0;
		box-sizing: border-box;
		outline: none;
	}

	body {
		font-family: "Roboto", sans-serif;
		font-size: 1rem;
		font-weight: 300;
		color: var(--light-color);
		background-color: #262626;
	}
`;

export default GlobalStyle;
