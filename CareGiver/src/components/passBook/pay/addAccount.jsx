import React, { Component } from 'react';
import Header from '../../common/header';
import Root from '../../common/root';
import ListBank from '../../mypage/listBank.jsx';
import { isHANGUL } from '../../../commons/common';
import Cleave from 'cleave.js/react';
import { isIOS } from "react-device-detect";

class addAccount extends Component {
	constructor(props) {
		super(props);

		this.state = {
			modalIsOpen: "",
			errorName: "",
			errorPhone: "",
			errorBank: "",
			errorNumberCard: "",
			dataCard: {
				name: "",
				bank: "",
				phone: "",
				numberCard: ""
			},
		}
	}

	handleChange = (data) => {
		console.log(data);

		this.setState({
			...data,
		});
	}

	handleChangeBank = (bank) => {
		this.setState({
			modalIsOpen: "",
			dataCard: {
				...this.state.dataCard,
				bank
			},
			errorBank: "",
		})

	}

	handleChangeData = (data) => {
		this.setState({
			dataCard: {
				...this.state.dataCard,
				...data
			},
			errorName: "",
			errorBank: "",
			errorPhone: "",
			errorNumberCard: "",
		});
	}

	handleCancel = () => {
		this.setState({
			dataCard: {
				name: "",
				bank: "",
				phone: "",
				numberCard: ""
			}
		})
	}

	handleSubmit = () => {
		const { name, bank, phone, numberCard, } = this.state.dataCard;
		if (name.length === 0) {
			this.setState({
				errorName: "이름을 입력하세요."
			});
			return;
		}
		if (isHANGUL(name)) {
			this.setState({
				errorName: "한국어로만 입장하십시오."
			});
			return;
		}

		if (bank.length === 0) {
			this.setState({
				errorBank: "은행을 선택하십시오."
			});
			return;
		}

		if (phone.length === 0) {
			this.setState({
				errorPhone: "전화 번호를 입력하십시오."
			});
			return;
		}

		if (numberCard.length === 0) {
			this.setState({
				errorNumberCard: "계좌 번호를 입력하십시오."
			});
			return;
		}
		if (numberCard.trim().length < 12 || numberCard.trim().length > 16) {
			this.setState({
				errorNumberCard: "숫자만 입력가능, 최소 10자리~최대 14자리"
			});
			return;
		} else {
			this.updateData();
		}

	}

	updateData = async () => {
		const { name, bank, phone, numberCard } = this.state.dataCard;

		let dataCard = {
			name: name,
			bank: bank,
			phone: phone,
			numberCard: numberCard,
		}

		console.log(dataCard);
	}

	render() {
		const { modalIsOpen, errorName, errorBank, errorPhone, errorNumberCard } = this.state;
		const { name, bank, phone, numberCard } = this.state.dataCard;

		return (
			<div className="wrapper">
				<Header
					title="계좌번호 관리"
					link="/passbook/pay"
					isLink={true}
					classes=""
					classLink=""
					classHeader="header-wrap"
				/>
				<div className="content-body">
					<div className="Container">
						<div className="content-wrap">
							<div className="PassMain-content mt-0">
								<div className="content-title">
									<h2>즐겨찾는 계좌를 등록해 주세요.</h2>
								</div>
								<div className="input-wrap">
									<label className="input-title">
										계좌 명칭
                  					</label>
									<div className="basic-input">
										<input
											type="text"
											placeholder="계좌명칭을 입력해주세요."
											value={name}
											onChange={(e) => this.handleChangeData({ name: e.target.value })}
										/>
									</div>
									<div className="mt-2">
										<span className="text-danger" role="alert">
											<strong>{errorName}</strong>
										</span>
									</div>
								</div>
								<div className="input-wrap">
									<label className="input-title">
										등록 계좌번호
                  					</label>
									<div className="bank-wrap">
										<div
											className="bank-choice"
											onClick={() => this.handleChange({ modalIsOpen: 'active' })}
										>
											<input
												type="text"
												placeholder="은행선택"
												defaultValue={bank}
												className="p-0 w-100 border-0 bank ml-0"
												disabled
											/>
										</div>
										<div className="basic-input">
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
											/>
										</div>
										<div className="mt-2">
											<span className="text-danger" role="alert">
												<strong>{errorBank}</strong>
											</span>
										</div>
										<div className="mt-2">
											<span className="text-danger" role="alert">
												<strong>{errorPhone}</strong>
											</span>
										</div>
										<div className="basic-input">
											<Cleave
												placeholder="계좌명칭을 입력해주세요."
												options={{
													numericOnly: true,
													delimiters: ['-', '-'],
													blocks: [4, 4, 6]
												}}
												pattern="[0-9]*"
												inputMode={isIOS ? "" : "numeric"}
												value={numberCard}
												onChange={(e) => this.handleChangeData({ numberCard: e.target.value })}
												className="w-100 ml-0"
											/>
										</div>
										<div className="mt-2">
											<span className="text-danger" role="alert">
												<strong>{errorNumberCard}</strong>
											</span>
										</div>
									</div>
								</div>
							</div>
							<div className="BottomBtn-wrap fixed custom-bottom">
								<button
									className="btn-bottom btn-style2"
									onClick={this.handleCancel}
								>
									취소
								</button>
								<button
									className="btn-bottom"
									onClick={this.handleSubmit}
								>
									등록
								</button>
							</div>
						</div>
					</div>
				</div>
				<ListBank
					modalIsOpen={modalIsOpen}
					handleChange={this.handleChange}
					handleChangeBank={this.handleChangeBank}
				/>
				<Root active={4}></Root>
			</div>
		)
	}
}

export default addAccount;