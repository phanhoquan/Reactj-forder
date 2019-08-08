
import SessionStore from "./SessionStore";
import UserStore from "./UserStore";
import HospitalStore from "./HospitalStore";
import HistoryStore from "./HistoryStore";
import { create } from 'mobx-persist';

const hydrate = create({
	jsonify: true
})

class MainStore {
	sessionStore = new SessionStore(this);
	userStore = new UserStore(this);
	hospitalStore = new HospitalStore(this);
	historyStore = new HistoryStore(this);

	constructor() {
		// hydrate('hospital', this.hospitalStores);
		// hydrate('session', this.sessionStore);
		hydrate('user', this.userStore);
		// hydrate('history', this.historyStore);
	}
}

export default MainStore;