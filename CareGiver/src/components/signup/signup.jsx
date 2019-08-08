import React, { Component } from 'react';
import Header from '../common/header';
import { isEmail, isNumberKey, isCharacterValid, isHANGUL } from '../../commons/common';
import InputCheckbox from '../common/checkBox';
import Privacy from './privacy';
import Condition from './condition';
import CountDown from '../common/countDown';
import Cleave from 'cleave.js/react';
import Popup from '../common/popup';
import SignUpPayLoadRequest from '../../models/User';
import { signUpCareGiver, checkEmailSignUp, checkPhoneNumber } from '../../services/authSevice';
import { sendSmsCode, checkSmsCode } from '../../services/authSevice';
import User from '../../models/User';
import { Redirect } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { isIOS } from "react-device-detect";
import Loading from '../common/loading';

const page1 = "회원가입";
const page2 = "개인정보취급방침(필수)";
const page3 = "CareU 이용약관(필수)";

@withRouter
@inject('rootStore')
@observer
class SignUp extends Component {
	rootStore;
	constructor(props) {
		super(props);
		this.rootStore = this.props.rootStore;
		this.state = {
			data: {
				email: "",
				password: "",
				password_confirmation: "",
				full_name: "",
				gender: 1,
				age: "",
				experience: "",
				phone: "",
				image: "",
				sms_code: "",
				address: "",
				time: 0,
				isVerify: false
			},
			addClass: "fail",
			addClassPass: "fail",
			addClassComfirmPass: "fail",
			addClassName: "fail",
			addClassGender: "fail",
			addClassAge: "fail",
			addClassExperience: "fail",
			addClassPhone: "fail",
			modalIsOpen: "",
			messageError: '',
			isChecked: {
				idChecked2: false,
				idChecked3: false
			},
			page: page1,
			isLoading: false
		}
	}

	handleChangeEmail = () => {
		const { email } = this.state.data;
		let addClass = "success";

		if (email.trim().length < 8 || email.trim().length >= 32 || !isEmail(email)) {
			addClass = "fail";
		}

		this.setState({
			addClass
		});
	}

	handleChangePassword = () => {
		const { password } = this.state.data;
		let addClassPass = "success";

		if (password.trim().length < 6 || password.trim().length > 20 || isCharacterValid(password)) {
			addClassPass = "fail";
		}

		this.setState({
			addClassPass
		});
	}

	handleChangeComfirmPassword = () => {
		const { password_confirmation, password } = this.state.data;
		let addClassComfirmPass = "success";

		if (!password_confirmation.trim()) {
			addClassComfirmPass = "fail";
		}

		if (password_confirmation !== password) {
			addClassComfirmPass = "fail";
		}

		this.setState({
			addClassComfirmPass
		});
	}

	handleChangeName = () => {
		const { full_name } = this.state.data;
		let addClassName = "success";

		if (full_name.trim().length === 0) {
			addClassName = "fail";
		}

		if (full_name.trim().length > 15 || isHANGUL(full_name)) {
			addClassName = "fail";
		}

		this.setState({
			addClassName
		});
	}

	handleChangePhone = () => {
		const { phone } = this.state.data;
		let addClassPhone = "success";

		if (phone.length !== 13) {
			addClassPhone = "fail";
		}

		this.setState({
			addClassPhone
		});
	}

	handleChangeAge = () => {
		const { age } = this.state.data;
		let addClassAge = "success";

		if (age.trim().length === 0) {
			addClassAge = "fail";
		}

		if (parseInt(age.trim()) > 100) {
			addClassAge = "fail";
		}

		this.setState({
			addClassAge
		});

	}

	handleChangeExperience = () => {
		const { experience, age } = this.state.data;
		let addClassExperience = "success";

		if (experience.trim().length === 0) {
			addClassExperience = "fail";
		}

		if (parseInt(experience.trim()) > parseInt(age.trim())) {
			addClassExperience = "fail";
		}

		this.setState({
			addClassExperience
		});
	}

	handleChangeData = (data) => {
		this.setState({
			data: {
				...this.state.data,
				...data
			},
		}, () => {
			this.handleChangeEmail();
			this.handleChangePassword();
			this.handleChangeComfirmPassword();
			this.handleChangeName();
			this.handleChangeAge();
			this.handleChangeExperience();
			this.handleChangePhone()
		});
	}

	handleCheckAll = () => {
		let { idChecked2, idChecked3 } = this.state.isChecked;

		if (!(idChecked2 && idChecked3)) {
			this.setState({
				isChecked: {
					idChecked2: true,
					idChecked3: true
				}
			});
		}

		if (true && idChecked2 && idChecked3) {
			this.setState({
				isChecked: {
					idChecked2: false,
					idChecked3: false
				}
			});
		} else {
			this.setState({
				isChecked: {
					idChecked2: true,
					idChecked3: true
				}
			});
		}
	}

	renderCheckAll = () => {
		let { idChecked2, idChecked3 } = this.state.isChecked;

		return (
			<div className="checkbox-wrap">
				<InputCheckbox
					id="all"
					name="AllChecked"
					checked={idChecked2 && idChecked3}
					onCheck={this.handleCheckAll}
				/>
				<label htmlFor="all"><span className="checkbox-custom" /><span className="checkbox-label">전체동의</span></label>
			</div>
		);
	}

	handleChangeCheck = (data) => {
		this.setState({
			isChecked: {
				...this.state.isChecked,
				...data
			}
		});
	}

	renderPage = () => {
		var { page } = this.state;

		if (page === page1) {
			return (
				<div>
					{this.renderSignUpMain()}
				</div>
			)
		}

		if (page === page2) {
			return (
				<Privacy
					handleChangeCheck={this.handleChangeCheck}
					handleChange={this.handleChange}
					idChecked2={this.state.isChecked.idChecked2}
				/>
			)
		}

		return (
			<Condition
				handleChangeCheck={this.handleChangeCheck}
				handleChange={this.handleChange}
				idChecked3={this.state.isChecked.idChecked3}
			/>
		);
	}

	getFileName = async (e) => {
		let image = await this.fileToBase64(e);

		this.setState({
			data: {
				...this.state.data,
				image
			},
		});
	}

	renderProfile = () => {
		let { image } = this.state.data;

		if (image.length > 0) {
			return (
				<img src={image} alt="" className="img-profile" />
			);
		}
	}

	fileToBase64 = (inputFile) => {
		return new Promise(resolve => {
			var file = inputFile.files[0];
			var reader = new FileReader();
			reader.onload = function (event) {
				resolve(event.target.result);
			};

			reader.readAsDataURL(file);
		});
	};

	renderButtonPhone = () => {
		const { phone, time, isVerify } = this.state.data;

		if (isVerify) {
			return null;
		}

		if (time === 0) {
			return (
				<button
					className={`btn-accept  ${phone.length !== 13 ? 'btn-certification' : ''} ${isVerify ? 'btn-certification' : ''}`}
					disabled={phone.length !== 13 ? true : isVerify ? true : false}
					onClick={this.handleSendSmsCode}
				>인증번호 발송</button>
			);
		}

		return (
			<CountDown
				time={time}
				handleChange={this.handleChangeData}
			/>
		);
	}

	handleSendSmsCode = async () => {
		const { phone } = this.state.data;
		let checkPhone = await checkPhoneNumber(phone);

		if (checkPhone.data) {
			this.handleChange({ modalIsOpen: 'active', messageError: checkPhone.message });
			return;
		}

		try {
			this.handleChangeData({
				time: 180000
			});
			let response = await sendSmsCode(phone);
			console.log('send sms code', response);
		} catch (error) {
			console.log(error);
		}
	}

	handleSubmitCode = async () => {
		const { phone, sms_code } = this.state.data;

		try {
			let response = await checkSmsCode(phone, sms_code);
			console.log('check sms code', response);
			this.handleChangeData({ isVerify: true, time: 0 });
		} catch (error) {
			console.log(error);
		}
	}

	handleChange = (data) => {
		this.setState({
			...data
		});
	}

	validSubmit = () => {
		const { addClass, addClassPass, addClassPhone, addClassComfirmPass, addClassName, addClassAge, addClassExperience } = this.state;
		let isValid = true;

		if (addClass === "fail") {
			isValid = false;
		}

		if (addClassPass === "fail") {
			isValid = false;
		}

		if (addClassComfirmPass === "fail") {
			isValid = false;
		}

		if (addClassName === "fail") {
			isValid = false;
		}

		if (addClassAge === "fail") {
			isValid = false;
		}

		if (addClassExperience === "fail") {
			isValid = false;
		}

		if (addClassPhone === "fail") {
			isValid = false;
		}

		return isValid;
	}

	handleSaveData = async () => {
		var email = this.state.data.email,
			password = this.state.data.password,
			password_confirmation = this.state.data.password_confirmation,
			full_name = this.state.data.full_name,
			age = this.state.data.age,
			experience = this.state.data.experience,
			gender = this.state.data.gender,
			phone = this.state.data.phone,
			address = this.state.data.address,
			sms_code = this.state.data.sms_code,
			image = this.state.data.image,
			isChecked = this.state.isChecked,
			signUpPayLoad = new SignUpPayLoadRequest({
				email,
				password,
				password_confirmation,
				full_name,
				age,
				experience,
				gender,
				phone,
				address,
				sms_code,
				image
			});

		if (!this.validSubmit()) {
			this.handleChange({ modalIsOpen: 'active', messageError: '입력칸에 내용을 입력해주세요.' });
		} else {
			if (!isChecked.idChecked2 && !isChecked.idChecked3) {
				this.handleChange({ modalIsOpen: 'active', messageError: '필수 약관 동의가 필요합니다.' });
				return;
			}
			try {
				this.setState({
					isLoading: true
				});
				let checkEmail = await checkEmailSignUp(email);
				if (checkEmail.data) {
					this.handleChange({ modalIsOpen: 'active', messageError: checkEmail.message, isLoading: false });
					return;
				}
				var userSigUpPayload = new User(signUpPayLoad);
				await signUpCareGiver(userSigUpPayload.data.data);
				this.setState({
					redirect: true,
					isLoading: false
				});
			} catch (ex) {
				console.log(ex);
			}
		}
	}

	renderButtonSubmit = () => {
		const { sms_code, isVerify } = this.state.data;

		if (isVerify) {
			return (
				<p className="text-success">인증완료</p>
			);
		}

		return (
			<button
				className={`btn-accept  ${sms_code.length === 0 ? 'btn-certification' : ''} ${isVerify ? 'btn-certification' : ''}`}
				disabled={sms_code.length === 0 ? true : false}
				onClick={this.handleSubmitCode}
			>인증받기</button>
		);
	}

	renderLoading = () => {
		const { isLoading } = this.state;

		if (isLoading) {
			return (
				<div className="signup-loading">
					<Loading loading={isLoading} loadingOverlayDiv={true} />
				</div>
			);
		}
	}

	renderSignUpMain = () => {
		const { email, password, password_confirmation, full_name, age, gender, experience, phone, sms_code, address, isVerify, time } = this.state.data;
		const { addClass, addClassPass, addClassPhone, addClassComfirmPass, addClassName, addClassAge, addClassExperience, isChecked } = this.state;

		return (
			<div className="wrapper">
				<Header
					title="회원가입"
					link=""
					isLink={true}
					classHeader="header-wrap"
					classes=""
					classLink=""
				/>
				{this.renderLoading()}
				<div className="content-body">
					<div className="Sub-Container">
						<div className="SubContent-wrap custom-input">
							<div className="input-wrap">
								<label className="input-title">
									아이디(ID)
                				</label>
								<div className={"basic-input " + addClass}>
									<input
										value={email}
										type="email"
										placeholder="아이디를 입력하세요"
										onChange={(e) => this.handleChangeData({ email: e.target.value })}
									/>
									{addClass === "fail" && <i className="ressetValue" onClick={() => this.handleChangeData({ email: "" })}></i>}
								</div>
								<span className="alert-massage">영문(소) 또는 영문(소) + 숫자 조합 8자리 이상 32자 이하</span>
							</div>
							<div className="input-wrap">
								<label className="input-title">
									비밀번호
                				</label>
								<div className={"basic-input " + addClassPass}>
									<input
										type="password"
										placeholder="비밀번호를 입력하세요"
										value={password}
										onChange={(e) => this.handleChangeData({ password: e.target.value })}
									/>
									{addClassPass === "fail" && <i className="ressetValue" onClick={() => this.handleChangeData({ password: "" })}></i>}
								</div>
								<span className="alert-massage">영문 또는 영문 + 숫자 조합 6자리 이상 20자 이하</span>
							</div>
							<div className="input-wrap">
								<label className="input-title">
									비밀번호 확인
								</label>
								<div className={"basic-input " + addClassComfirmPass}>
									<input
										type="password"
										placeholder="비밀번호를 다시 입력하세요"
										value={password_confirmation}
										onChange={(e) => this.handleChangeData({ password_confirmation: e.target.value })}
									/>
									{addClassComfirmPass === "fail" && <i className="ressetValue" onClick={() => this.handleChangeData({ password_confirmation: "" })}></i>}
								</div>
							</div>
							<div className="input-wrap">
								<label className="input-title">
									이름
                				</label>
								<div className={"basic-input " + addClassName}>
									<input
										type="text"
										placeholder="이름을 입력하세요"
										value={full_name}
										onChange={(e) => this.handleChangeData({ full_name: e.target.value })}
									/>
									{addClassName === "fail" && <i className="ressetValue" onClick={() => this.handleChangeData({ full_name: "" })}></i>}
								</div>
								<span className="alert-massage">간병인에게 보여질 이름입니다.<br />한글, 영문, 숫자조합으로 15자리 이하 입력 가능</span>
							</div>
							<div className="input-wrap">
								<label className="input-title">
									주민등록번호
                				</label>
								<div className="basic-input">
									<input
										type="text"
										placeholder="주민등록번호를 입력하세요"
										value={address}
										onChange={(e) => this.handleChangeData({ address: e.target.value })}
									/>
								</div>
								<span className="alert-massage">세금 계산의 목적으로 수집됩니다.<br />자세한 내용은 약관을 참고하세요.</span>
							</div>
							<div className="input-wrap gender-wrap">
								<label className="input-title">
									성별
                				</label>
								<div className="radio-wrap gender-check">
									<input
										type="radio"
										id="Man"
										name="gender"
										className="Gender"
										checked={gender === 1}
										onChange={() => this.handleChangeData({ gender: 1 })}
									/>
									<label className="agree-label" htmlFor="Man"><span className="checkbox-custom" /><span className="gender">남자</span></label>
								</div>
								<div className="radio-wrap gender-check">
									<input
										type="radio"
										id="Woman"
										name="gender"
										className="Gender"
										checked={gender === 2}
										onChange={() => this.handleChangeData({ gender: 2 })}
									/>
									<label className="agree-label" htmlFor="Woman"><span className="checkbox-custom" /><span className="gender">여자</span></label>
								</div>
							</div>
							<div className="input-wrap">
								<label className="input-title">
									나이
                				</label>
								<div className={"basic-input " + addClassAge}>
									<input
										type="number"
										pattern="[0-9]*"
										placeholder="나이를 입력하세요"
										value={age}
										onChange={(e) => this.handleChangeData({ age: e.target.value })}
										onKeyPress={(e) => isNumberKey(e)}
									/>
								</div>
							</div>
							<div className="input-wrap">
								<label className="input-title">
									경력
                				</label>
								<div className={"basic-input " + addClassExperience}>
									<input
										type="number"
										pattern="[0-9]*"
										placeholder="경력을 입력하세요"
										value={experience}
										onChange={(e) => this.handleChangeData({ experience: e.target.value })}
										onKeyPress={(e) => isNumberKey(e)}
									/>
								</div>
							</div>
							<div className="input-wrap">
								<div className={"phone-wrap phone-input basic-input " + addClassPhone}>
									<Cleave
										placeholder="휴대전화번호를 입력하세요"
										options={{
											numericOnly: true,
											delimiters: ['-', '-'],
											blocks: [3, 4, 4]
										}}
										pattern="[0-9]*"
										inputMode={isIOS ? "" : "numeric"}
										value={phone}
										onChange={(e) => this.handleChangeData({ phone: e.target.value })}
										disabled={isVerify ? true : time === 0 ? false : true}
									/>
									{addClassPhone === "fail" && <i className="ressetValue" onClick={() => this.handleChangeData({ phone: "" })}></i>}
									{this.renderButtonPhone()}
								</div>
							</div>
							<div className="input-wrap">
								<div className="basic-input phone-input">
									<input
										type="text"
										placeholder="인증번호를 입력하세요"
										disabled={phone.length === 0 ? true : isVerify ? true : false || time === 0 ? true : false}
										value={sms_code}
										onChange={(e) => this.handleChangeData({ sms_code: e.target.value })}
									/>
									{this.renderButtonSubmit()}
								</div>
							</div>
							<div className="input-wrap profile-wrap">
								<label className="input-title">
									프로필 사진
                				</label>
								<div className="profile-inner">
									<div className="basic-input">
										<label className="MyFace" htmlFor="uploadFile">
											{this.renderProfile()}
											<input type="file"
												name="uploadFile"
												id="uploadFile"
												accept="image/png, image/jpeg, image/jpg"
												className="d-none"
												onChange={(e) => this.getFileName(e.target)}
											/>
										</label>
									</div>
									<span className="alert-massage">자신의 프로필 사진을 업로드해주세요.</span>
								</div>
							</div>
						</div>
						<div className="SubContent-wrap">
							<div className="agree-wrap">
								<div className="agree-head">
									{this.renderCheckAll()}
								</div>
								<div className="agree-cont">
									<div className="checkbox-wrap">
										<InputCheckbox
											id="Privacy"
											name="AllChecked"
											onCheck={(e) => this.handleChangeCheck({ idChecked2: !this.state.isChecked.idChecked2 })}
											checked={isChecked.idChecked2}
											className="AcceptAllChecked"
										/>
										<label className="agree-label" htmlFor="Privacy"><span className="checkbox-custom" /><span className="checkbox-label">개인정보취급방침</span> <span className="necessary">[필수]</span></label>
										<i
											className="detail-view"
											onClick={() => this.handleChange({ page: page2 })}
										>자세히 보기</i>
									</div>
									<div className="checkbox-wrap">
										<InputCheckbox
											id="CareUAccept"
											name="AllChecked"
											onCheck={(e) => this.handleChangeCheck({ idChecked3: !this.state.isChecked.idChecked3 })}
											checked={isChecked.idChecked3}
											className="AcceptAllChecked"
										/>
										<label className="agree-label" htmlFor="CareUAccept"><span className="checkbox-custom" /><span className="checkbox-label">CareU 이용약관</span> <span className="necessary">[필수]</span></label>
										<i className="detail-view"
											onClick={() => this.handleChange({ page: page3 })}
										>자세히 보기</i>
									</div>
								</div>
							</div>
							<div className="BottomBtn-wrap">
								<button
									className="btn-bottom"
									onClick={this.handleSaveData}
								>
									회원가입 완료
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}

	render() {
		const { modalIsOpen, messageError, redirect } = this.state;

		if (redirect) {
			return <Redirect to='/signup/success' />
		}

		return (
			<div>
				{this.renderPage()}
				<Popup
					classPopup="pop-wrap"
					classActive={modalIsOpen}
					isClose={true}
					handleClose={() => this.handleChange({ modalIsOpen: "" })}
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
							onClick={() => this.handleChange({ modalIsOpen: "" })}
						>아니오</button>
					</div>
				</Popup>
			</div>
		)
	}
}

export default SignUp;