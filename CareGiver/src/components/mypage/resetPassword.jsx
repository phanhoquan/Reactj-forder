import React, { Component } from 'react';
import Header from '../common/header';
import { checkPassword, checkLengthPassword } from '../../commons/common';
import Root from '../common/root';
import Popup from '../common/popup';
import { inject, observer } from 'mobx-react';
import _ from "lodash";
import { Redirect } from 'react-router-dom';

@inject('rootStore')
@observer

class ResetPassword extends Component {
	constructor(props) {
		super(props);
		this.rootStore = this.props.rootStore;
		this.state = {
			password: "",
			new_password: "",
			confirm_password: "",
			error_password: "",
			error_new_password: "",
			error_confirm_password: "",
			redirect: false,
			modalIsOpens: "",
			content: ""
		}
	}

	handleChange = (data) => {
		this.setState({
			...data,
			error_password: "",
			error_new_password: "",
			error_confirm_password: ""
		});
	}

	validSubmit = () => {
		const { password, new_password, confirm_password } = this.state;
		let isError = true;

		if (password.length === 0) {
			this.setState({
				error_password: "암호 입력하세요."
			});
			isError = false;
			return isError;
		} else {
			if (!checkLengthPassword(password)) {
				this.setState({
					error_password: "비밀번호 다시 확인 입력하세요."
				});
				isError = false;
				return isError;
			}
		}

		if (new_password.length === 0) {
			this.setState({
				error_new_password: "새로운 암호 입력하세요."
			});
			isError = false;
			return isError;
		} else {
			if (!checkPassword(new_password) || !checkLengthPassword(new_password)) {
				this.setState({
					error_new_password: "새 암호를 다시 확인하십시오."
				});
				isError = false;
				return isError;
			}
		}

		if (confirm_password.length === 0) {
			this.setState({
				error_confirm_password: "확인 비밀번호를 입력하세요."
			});
			isError = false;
			return isError;
		} else {
			if (new_password !== confirm_password) {
				this.setState({
					error_confirm_password: "비밀번호 확인이 일치하지 않습니다."
				});
				isError = false;
				return isError;
			}
		}
		return isError;
	}

	handleSubmit = async () => {
		if (this.validSubmit()) {
			let user = await this.rootStore.userStore.getUser();
			let user_id = user.id;
			var { password, new_password, confirm_password } = this.state;
			var data = {
				old_password: password,
				new_password: new_password,
				new_password_confirmation: confirm_password
			}

			await this.props.rootStore.userStore.resetPassword(user_id, data).then(response => {
				if (_.size(response.data)) {
					this.setState({
						redirect: true
					})
				} else {
					this.setState({
						content: response.message
					});
					this.handleChange({ modalIsOpens: 'active' });
				}
			});
		}
	}

	render() {
		const {
			password,
			new_password,
			confirm_password,
			error_password,
			error_new_password,
			error_confirm_password,
			modalIsOpens,
			content,
			redirect
		} = this.state;

		if (redirect) {
			return <Redirect to='/mypage' />
		}

		return (
			<Root active={4}>
				<Header
					title="비밀번호 수정하기"
					link="/mypage"
					isLink={true}
					classes=""
					classLink=""
					classHeader="header-wrap"
				/>
				<div className="content-body">
					<div className="main-Container">
						<div className="content-wrap">
							<div className="input-wrap">
								<label className="input-title">
									현재 비밀번호
              					</label>
								<div className="basic-input">
									<input
										type="password"
										placeholder="현재 비밀번호를 입력하세요."
										value={password}
										onChange={(e) => this.handleChange({ password: e.target.value })}
									/>
									<div className="mt-2">
										<span className="text-danger" role="alert">
											<strong>{error_password}</strong>
										</span>
									</div>
								</div>
							</div>
							<div className="input-wrap">
								<label className="input-title">
									새 비밀번호
              					</label>
								<div className="basic-input">
									<input
										type="password"
										placeholder="새 비밀번호를 입력하세요."
										value={new_password}
										onChange={(e) => this.handleChange({ new_password: e.target.value })}
									/>
									<div className="mt-2">
										<span className="text-danger" role="alert">
											<strong>{error_new_password}</strong>
										</span>
									</div>
								</div>
							</div>
							<div className="input-wrap">
								<label className="input-title">
									새 비밀번호 확인
              					</label>
								<div className="basic-input">
									<input
										type="password"
										placeholder="새 비밀번호를 다시 입력하세요."
										value={confirm_password}
										onChange={(e) => this.handleChange({ confirm_password: e.target.value })}
									/>
									<div className="mt-2">
										<span className="text-danger" role="alert">
											<strong>{error_confirm_password}</strong>
										</span>
									</div>
								</div>
								<span className="alert-massage">※ 영문 또는 영문+숫자 조합 6자리 이상 20자 이하</span>
							</div>
							<div className="BottomBtn-wrap fixed custom-bottom">
								<button
									className="btn-bottom"
									onClick={this.handleSubmit}
								>
									수정하기
								</button>
							</div>
						</div>
					</div>
				</div>
				<Popup
					classPopup="pop-wrap"
					classActive={modalIsOpens}
					isClose={true}
					handleClose={() => this.handleChange({ modalIsOpens: "" })}
				>
					<div className="pop-head">
						<h2>통지</h2>
					</div>
					<div className="pop-content normal">
						<p>
							{content}
						</p>
					</div>
					<div className="pop-footer">
						<button
							className="agree"
							onClick={() => this.handleChange({ modalIsOpens: "" })}
						>아니오</button>
					</div>
				</Popup>
			</Root>
		)
	}
}

export default ResetPassword;