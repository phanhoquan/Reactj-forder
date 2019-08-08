import hospitalService from "../services/hospitalService";
import { observable, action, computed } from "mobx";

class HospitalStore {
	@observable hospitals;
	@observable patient;

	constructor(rootStore) {
		this.rootStore = rootStore;
		this.hospitals = [];
		this.patient = [];
	}

	async searchHospital(keyword) {
		return hospitalService.findHospitals(keyword)
			.then(response => {
				this.setHospitals(response);
				return response;
			});
	}

	@action
	setHospitals(data) {
		this.hospitals = data;
	}

	@computed
	get getHospital() {
		return this.hospital;
	}

	async searchPatient(id, name, address) {
		return hospitalService.findPatient(id, name, address)
			.then(response => {
				return response;
			});
	}

	async getPatientById(id) {
		return hospitalService.detailPatient(id)
			.then(response => {
				return response;
			});
	}

	async getRegisPatient(user_id, job_id) {
		return hospitalService.getRegisPatient(user_id, job_id)
			.then(response => {
				return response;
			});
	}
}

export default HospitalStore;