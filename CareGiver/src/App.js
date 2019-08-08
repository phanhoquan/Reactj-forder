
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./public/css/main.css";
import Index from "./containers/home/index";
import { Provider } from 'mobx-react';
import MainStore from "./stores/MainStore";
import PrivateRoute from "./routes";
import MyPage from './components/mypage/myPage';
import ResetPassword from './components/mypage/resetPassword';
import Login from './containers/login/login';
import ListCaregiver from './containers/caregiver/listCaregiver';
import FindCaregiver from './components/caregiver/find';
import SignUp from './containers/signup/signup';
import SignUpSuccess from './components/signup/success';
import Privacy from './components/signup/privacy';
import Work from './containers/work/workList';
import WorkWorking from './components/work/working';
import WorkSchedule from './components/work/schedule';
import WorkCompleted from './components/work/completed';
import FindPassword from './containers/findPassword/findPassword';
import EditNames from './components/mypage/editName';
import ViewCard from './components/mypage/viewCard';
import Service from './components/mypage/service';
import Passbook from './components/passBook/passBook';
import PassbookDetail from './components/passBook/detail';
import Pay from './components/passBook/pay/pay';
import PayDetail from './components/passBook/pay/payDetail';
import AddCard from './components/mypage/addCard';
import AccountPay from './components/passBook/pay/account';
import IdClear from './components/findUser/idClear';
import MailClear from './components/findUser/mailClear';
import addAccount from './components/passBook/pay/addAccount';
import UpdateCard from './components/mypage/updateCard';
import Welcome from './components/common/welcome';

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			isWelcome: false
		}
	}

	componentWillMount() {
		if (sessionStorage.getItem("isWelcome") === null) {
			this.setState({
				isWelcome: true
			}, () => {
				setTimeout(() => {
					this.setState({
						isWelcome: false
					});
					sessionStorage.setItem("isWelcome", false);
				}, 1200);
			});
		}
	}

	render() {
		if (this.state.isWelcome) {
			return <Welcome />
		}

		return (
			<Provider rootStore={new MainStore()} >
				<Router>
					<Switch>
						<PrivateRoute exact path="/" component={Index} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/findpassword" component={FindPassword} />
						<Route path="/idclear" component={IdClear} />
						<Route path="/mailclear" component={MailClear} />
						<PrivateRoute exact path="/caregiver" component={ListCaregiver} />
						<PrivateRoute path="/caregiver/find" component={FindCaregiver} />
						<Route exact path="/signup" component={SignUp} />
						<Route path="/signup/success" component={SignUpSuccess} />
						<Route path="/signup/privacy" component={Privacy} />
						<PrivateRoute exact path="/work" component={Work} />
						<PrivateRoute path="/work/working/:id" component={WorkWorking} />
						<PrivateRoute path="/work/schedule/:id" component={WorkSchedule} />
						<PrivateRoute path="/work/completed/:id" component={WorkCompleted} />
						<PrivateRoute exact path="/mypage" component={MyPage} />
						<PrivateRoute exact path="/mypage/resetpassword" component={ResetPassword} />
						<PrivateRoute exact path="/mypage/editname" component={EditNames} />
						<PrivateRoute exact path="/mypage/card" component={ViewCard} />
						<PrivateRoute exact path="/mypage/card/add" component={AddCard} />
						<PrivateRoute exact path="/mypage/card/update" component={UpdateCard} />
						<PrivateRoute exact path="/mypage/service" component={Service} />
						<PrivateRoute exact path="/passbook" component={Passbook} />
						<PrivateRoute exact path="/passbook/detail" component={PassbookDetail} />
						<PrivateRoute exact path="/passbook/pay" component={Pay} />
						<PrivateRoute exact path="/passbook/pay/detail" component={PayDetail} />
						<PrivateRoute exact path="/passbook/pay/edit" component={AccountPay} />
						<PrivateRoute exact path="/passbook/pay/add" component={addAccount} />
					</Switch>
				</Router>
			</Provider>
		);
	}
}

export default App;
