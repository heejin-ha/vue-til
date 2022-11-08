import axios from 'axios';

const registerUser = userData => {
	const url = `http://localhost:3000/signup`;
	return axios.post(url, userData);
};

export { registerUser };
