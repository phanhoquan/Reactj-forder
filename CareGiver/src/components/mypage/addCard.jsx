import React, { Component } from 'react';
import Header from '../common/header';
import Root from '../common/root';
import { isNumberKey } from "../../commons/common";
import Cleave from 'cleave.js/react';
import { isIOS } from "react-device-detect";
import moment from "moment";

class AddCard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: {
				numberCard: "",
				validity: "",
				passwordCard: "",
				birthDate: ""
			},
			errorNumberCard: "",
			errorValidity: "",
			errorPasswordCard: "",
			errorBirthDate: ""
		}
	}

	handleChange = (data) => {
		this.setState({
			data: {
				...this.state.data,
				...data
			},
			errorNumberCard: "",
			errorValidity: "",
			errorPasswordCard: "",
			errorBirthDate: ""
		});
	}

	validSubmit = () => {
		const { numberCard, validity, passwordCard, birthDate } = this.state.data;
		let isError = true;
		let year = new Date();

		if (numberCard.trim().length !== 19) {
			this.setState({
				errorNumberCard: "16자를 숫자로 입력하세요"
			});
			isError = false;
		}

		if (validity.length === 0) {
			this.setState({
				errorValidity: "4자를 숫자로 입력하세요"
			});
			isError = false;
		}

		if (passwordCard.length !== 2) {
			this.setState({
				errorPasswordCard: "카드 비밀번호 앞자리 2자리 입력."
			});
			isError = false;
		}

		if (birthDate.length !== 10) {
			this.setState({
				errorBirthDate: "8자를 숫자로 입력하세요",
			});
			isError = false;
		}

		if (birthDate > moment(year).format("YYYY/MM/DD")) {
			this.setState({
				errorBirthDate: "생일은 현재일보다 크면 안 됩니다"
			});
			isError = false;
		}

		return isError;
	}

	handleSubmit = () => {
		const { numberCard, validity, passwordCard, birthDate } = this.state.data;
		var data = {
			numberCard: numberCard,
			validity: validity,
			passwordCard: passwordCard,
			birthDate: birthDate
		}

		if (this.validSubmit()) {
			console.log(data);
		}
	}

	render() {
		const { errorNumberCard, errorValidity, errorPasswordCard, errorBirthDate } = this.state;
		const { numberCard, validity, passwordCard, birthDate } = this.state.data;

		return (
			<Root active={4}>
				<Header
					title="카드 정보 입력하기"
					link="/mypage/card"
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
									카드 번호
                				</label>
								<div className="basic-input">
									<Cleave
										options={{
											numericOnly: true,
											delimiters: [' ', ' ', ' '],
											blocks: [4, 4, 4, 4]
										}}
										pattern="[0-9]*"
										inputMode={isIOS ? "" : "numeric"}
										placeholder="0000 0000 0000 0000"
										value={numberCard}
										onChange={(e) => this.handleChange({ numberCard: e.target.value })}
									/>
									<div className="mt-2">
										<span className="text-danger" role="alert">
											<strong>{errorNumberCard}</strong>
										</span>
									</div>
								</div>
							</div>
							<div className="input-wrap">
								<label className="input-title">
									유효 기간
                				</label>
								<div className="basic-input">
									<Cleave
										options={{
											date: true,
											delimiter: '/',
											datePattern: ['y', 'm']
										}}
										pattern="[0-9]*"
										inputMode={isIOS ? "" : "numeric"}
										placeholder="YY/MM"
										value={validity}
										onChange={(e) => this.handleChange({ validity: e.target.value })}
										onKeyPress={(e) => isNumberKey(e)}
									/>
									<div className="mt-2">
										<span className="text-danger" role="alert">
											<strong>{errorValidity}</strong>
										</span>
									</div>
								</div>
							</div>
							<div className="input-wrap">
								<label className="input-title">
									비밀번호 (앞2자리)
                				</label>
								<div className="basic-input">
									<input
										type="password"
										placeholder="**"
										value={passwordCard}
										onChange={(e) => this.handleChange({ passwordCard: e.target.value })}
										onKeyPress={(e) => isNumberKey(e)}
									/>
									<div className="mt-2">
										<span className="text-danger" role="alert">
											<strong>{errorPasswordCard}</strong>
										</span>
									</div>
								</div>
							</div>
							<div className="input-wrap">
								<label className="input-title">
									생년월일 6자리
                				</label>
								<div className="basic-input">
									<Cleave
										options={{
											date: true,
											delimiter: '/',
											datePattern: ['Y', 'm', 'd']
										}}
										pattern="[0-9]*"
										inputMode={isIOS ? "" : "numeric"}
										placeholder="YYYY/MM/DD"
										value={birthDate}
										onChange={(e) => this.handleChange({ birthDate: e.target.value })}
										onKeyPress={(e) => isNumberKey(e)}
									/>
									<div className="mt-2">
										<span className="text-danger" role="alert">
											<strong>{errorBirthDate}</strong>
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="BottomBtn-wrap fixed custom-bottom">
						<button
							className="btn-bottom"
							onClick={this.handleSubmit}
						>
							등록하기
						</button>
					</div>
				</div>
			</Root>
		)
	}
}

export default AddCard;