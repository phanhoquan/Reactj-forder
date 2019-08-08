
import userService from "../services/userService";
import { LOCALSTORAGE_ACCESS_TOKEN } from "../commons/constants";
import httpService from "../services/httpService";
import { observable, action, computed } from "mobx";
import { persist } from 'mobx-persist';

class UserStore {
	@persist('object') @observable user = {};

	constructor(rootStore) {
		this.rootStore = rootStore;
	}

	async
	login(email, password, remeberMe) {
		return userService.login(email, password).then(async (data) => {
			if (data.access_token) {
				this.setUser(data.user);
				if (data.user.role === "caregiver") {
					if (remeberMe) {
						localStorage.setItem(LOCALSTORAGE_ACCESS_TOKEN, data.access_token);
					} else {
						localStorage.removeItem(LOCALSTORAGE_ACCESS_TOKEN);
					}

					httpService.setAccessToken(data.access_token);
				}
				return data.user;
			} else {
				console.log('error');
			}
		})
	}

	async autoLogin() {
		const token = await localStorage.getItem(LOCALSTORAGE_ACCESS_TOKEN);
		if (token) {
			return;
		} else {

		}
	}

	async logOut() {
		const token = await httpService.getAccessToken();
		localStorage.removeItem(LOCALSTORAGE_ACCESS_TOKEN);
		if (token) {
			return userService.logOut().then((data) => {
				httpService.clearAuthorization();
				localStorage.removeItem(LOCALSTORAGE_ACCESS_TOKEN);
				return data.data;
			});
		} else {
			console.log('ERROP');
		}
	}

	@action
	setUser(user) {
		this.user = user;
	}

	@computed
	get getUserInfo() {
		return this.user;
	}

	async
	getUser() {
		return userService.getUser()
			.then(data => {
				return this.user = data.data;
			});
	}

	async  viewUser(idUser) {
		return userService.viewUser(idUser)
			.then(data => {
				return data;
			});
	}

	async updateUser(idUser, dataUpdate) {
		return userService.updateUser(idUser, dataUpdate)
			.then(data => {
				this.getUser();
				return data;
			});
	}

	async resetPassword(idUser, data) {
		return userService.resetPassword(idUser, data)
			.then(data => {
				return data;
			});
	}

	async findId(phone, code) {
		return userService.findId(phone, code)
			.then(data => {
				return data;
			})
	}

	async findPassword(email, phone, code) {
		return userService.findPassword(email, phone, code)
			.then(data => {
				return data;
			})
	}
}

export default UserStore;
