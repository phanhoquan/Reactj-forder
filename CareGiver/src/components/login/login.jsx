import React, { Component } from "react";
import login_logo from "../../public/images/login_logo.png";
import ico_id from "../../public/images/ico_id.png";
import ico_close from "../../public/images/ico_close2.png";
import ico_password from "../../public/images/ico_password.png";
import social_item from "../../public/images/social_item.png";
import Popup from "../common/popup";
import { isEmail } from "../../commons/common";
import { observer, inject } from "mobx-react";
import { Redirect, withRouter, Link } from "react-router-dom";
import { LOCALSTORAGE_ACCESS_TOKEN } from "../../commons/constants";

@withRouter
@inject("rootStore")
@observer
class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			dataLogin: {
				username: localStorage.username || "",
				password: localStorage.password || "",
				remember: localStorage.remember || false
			},
			modalOpen: "",
			errorPassword: "",
			errorUsername: "",
			messageError: ""
		};
	}

	async componentDidMount() {
		try {
			if (localStorage.getItem(LOCALSTORAGE_ACCESS_TOKEN)) {
				this.props.rootStore.userStore.autoLogin();
				this.props.rootStore.sessionStore.authenticate();
			}
		} catch (error) {
			console.log(error);
		}
	}

	handleChangeDataLogin = data => {
		this.setState({
			dataLogin: {
				...this.state.dataLogin,
				...data
			},
			errorUsername: "",
			errorPassword: ""
		});
	};

	handleChange = data => {
		this.setState({
			...data
		});
	};

	renderError = message => {
		return (
			<span className="invalid-feedback" role="alert">
				<strong>{message}</strong>
			</span>
		);
	};

	renderClose = (value, data) => {
		if (value.trim().length !== 0) {
			return (
				<img src={ico_close} alt="" className="mr-0 ml-2" onClick={() => this.handleChangeDataLogin(data)} />
			)
		}
	}

	validSubmit = () => {
		const { username, password } = this.state.dataLogin;
		let isError = false;

		if (username.trim().length === 0) {
			this.setState({
				errorUsername: "아이디를 입력해주세요."
			});
			isError = true;
		} else {
			if (!isEmail(username)) {
				this.setState({
					errorUsername: "이메일은 맞지 않습니다 "
				});
				isError = true;
			}
		}

		if (password.trim().length === 0) {
			this.setState({
				errorPassword: "비밀번호를 입력해주세요."
			});
			isError = true;
		}

		return isError;
	};

	handleSubmit = () => {
		const { sessionStore } = this.props.rootStore;
		if (this.validSubmit()) {
			return;
		}
		const { userStore } = this.props.rootStore;
		userStore.login(
			this.state.dataLogin.username,
			this.state.dataLogin.password,
			this.state.dataLogin.remember
		).then(data => {
			if (data.role === "caregiver") {
				sessionStore.authenticate();
			} else {
				this.setState({
					modalOpen: "active",
					messageError: "로그인 권한이 없습니다."
				})
			}

		})
			.catch(error => {
				this.setState({
					modalOpen: "active",
					messageError: "아이디/비밀번호가 일치 하지 않습니다. 다시 한번 확인해주세요."
				})
			});
	};

	render() {
		const { username, password, remember } = this.state.dataLogin;
		const { errorUsername, errorPassword, modalOpen, messageError } = this.state;
		const { sessionStore } = this.props.rootStore;
		const { from } = this.props.location.state || { from: { pathname: "/" } };
		const redirectToReferrer = sessionStore.redirectToReferrer;

		if (redirectToReferrer) {
			return (
				<Redirect to={from} />
			);
		}

		return (
			<div className="wrapper">
				<div className="content-body position">
					<div className="main-Container">
						<div className="content-wrap login-wrap">
							<div className="login-content-wrap">
								<div className="logo-header">
									<img src={login_logo} alt="" />
								</div>
								<div className="LoginInput-wrap">
									<img src={ico_id} alt="" />
									<input
										type="text"
										placeholder="아이디를 입력하세요."
										value={username}
										onChange={e =>
											this.handleChangeDataLogin({ username: e.target.value })
										}
									/>
									{this.renderClose(username, { username: "" })}
								</div>
								{this.renderError(errorUsername)}
								<div className="LoginInput-wrap">
									<img src={ico_password} alt="" />
									<input
										type="password"
										placeholder="비밀번호를 입력하세요."
										value={password}
										onChange={e =>
											this.handleChangeDataLogin({ password: e.target.value })
										}
									/>
									{this.renderClose(password, { password: "" })}
								</div>
								{this.renderError(errorPassword)}
								<button className="btn-login" onClick={this.handleSubmit}>
									로그인
                				</button>
								<div className="checkbox-wrap">
									<input
										type="checkbox"
										id="remember"
										name="remember"
										defaultChecked={remember ? "checked" : ""}
										onChange={e =>
											this.handleChangeDataLogin({ remember: e.target.checked })
										}
									/>
									<label htmlFor="remember">
										<span className="checkbox-custom" />
										<span className="checkbox-label">자동 로그인</span>
									</label>
								</div>
								<div className="social-login-wrap">
									<div className="social-content-wrap">
										<div className="social-title-wrap">
											<div className="FakeLine FakeLineLeft" />
											<h2 className="social-title">상담하기</h2>
											<div className="FakeLine FakeLineRight" />
										</div>
										<ul className="social-btn social-btn-ver2">
											<li>
												<button>
													<img src={social_item} alt="" />
												</button>
											</li>
										</ul>
									</div>
									<ul className="social-FindInfo">
										<li>
											<Link to="/signup">회원가입</Link>
										</li>
										<li>
											<Link to="/findpassword?type=1">아이디 찾기</Link>
										</li>
										<li>
											<Link to="/findpassword?type=2">비밀번호 찾기</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Popup
					classPopup="pop-wrap"
					classActive={modalOpen}
					isClose={true}
					handleClose={() => this.handleChange({ modalOpen: "" })}
				>
					<div className="pop-head">
						<h2>통지</h2>
					</div>
					<div className="pop-content normal">
						<p>
							{messageError}
						</p>
					</div>
					<div className="pop-footer">
						<button
							className="agree"
							onClick={() => this.handleChange({ modalOpen: "" })}
						>
							확인
            			</button>
					</div>
				</Popup>
			</div>
		);
	}
}

export default Login;
