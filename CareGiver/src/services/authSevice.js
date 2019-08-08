import httpService from "./httpService";
const apiEndpoint = process.env.REACT_APP_API_URL;

export function signUpCareGiver(data) {
	return httpService.post(apiEndpoint + '/signup', data)
		.then((response) => {
			return response.data;
		});
}

export function sendSmsCode(phone) {
	let result = {
		"phone": phone
	}
	return httpService.post(apiEndpoint + '/send-sms-code', result)
		.then((response) => {
			return response.data;
		});
}

export function checkSmsCode(phone, smsCode) {
	let params = { phone: phone, sms_code: smsCode }
	return httpService.get(apiEndpoint + '/check-sms-code', { params: params })
		.then((response) => {
			return response.data;
		});
}

export function checkEmailSignUp(email) {
	return httpService.get(apiEndpoint + '/check-email-exists?email=' + email)
		.then((response) => {
			return response.data;
		});
}

export function checkPhoneNumber(phone) {
	return httpService.get(apiEndpoint + '/check-phone-exists?phone=' + phone)
		.then((response) => {
			return response.data;
		});
}

