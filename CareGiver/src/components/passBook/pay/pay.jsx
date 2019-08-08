import React, { Component } from 'react';
import Header from '../../common/header';
import Root from '../../common/root';
import icon_arrow from '../../../public/images/ico_arrow.png';
import ListBank from '../../mypage/listBank.jsx';
import { Link } from 'react-router-dom';
import { isHANGUL } from '../../../commons/common';
import Cleave from 'cleave.js/react';
import { isIOS } from "react-device-detect";

class Pay extends Component {
	constructor(props) {
		super(props);

		this.state = {
			modalIsOpen: "",
			errorNumberCard: "",
			errorName: "",
			errorBank: "",
			dataCard: {
				numberCard: "",
				bank: "",
				name: ""
			},
			flag: false
		}
	}

	handleChange = (data) => {
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
			errorNumberCard: "",
			errorBank: "",
			errorName: "",
		});
	}

	handleSubmit = () => {
		const { name, bank, numberCard } = this.state.dataCard;
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
		}
		if (bank.length === 0) {
			this.setState({
				errorBank: "은행을 선택하십시오."
			});
			return;
		}

		if (name.length === 0) {
			this.setState({
				errorName: "이름을 입력하세요."
			});
			return;
		}

		if (name.trim().length > 10) {
			this.setState({
				errorName: "최대 10자리 이내."
			});
			return;
		}

		if (isHANGUL(name)) {
			this.setState({
				errorName: "한국어로만 입장하십시오."
			});
			return;
		} else {
			this.updateData();
		}

	}

	updateData = async () => {
		const { numberCard, bank, name } = this.state.dataCard;

		let dataCard = {
			numberCard: numberCard,
			bank: bank,
			name: name,
		}

		console.log(dataCard);
		window.location = "/passbook/pay/detail";
	}

	renderAccount = () => {
		return (
			<ul>
				<li>
					<p className="list-name">첫째 아들</p>
					<p className="account-info">
						<span>KB은행</span>
						<span>1111-1111-111111</span>
					</p>
				</li>
			</ul>
		)
	}

	renderListAccount = () => {
		const { flag } = this.state;
		if (flag) {
			return (
				<div className="account-list">
					<div className="input-wrap">
						<label className="input-title">
							등록된 계좌정보
                  					</label>
						<button>
							<Link to="/passbook/pay/edit">
								계좌번호 관리
											<img src={icon_arrow}
									alt="" />
							</Link>
						</button>
					</div>
					<div className="list-content">
						{this.renderAccount()}
					</div>
				</div>
			)
		}
		return (
			<div className="account-list">
				<div className="input-wrap">
					<label className="input-title">
						등록된 계좌정보
								  </label>
					<button>
						<Link to="/passbook/pay/add">
							등록하다
										<img src={icon_arrow}
								alt="" />
						</Link>
					</button>
				</div>
				<div className="list-content">
					<p>등록된 계좌가 없습니다. <br />계좌번호 관리 페이지를 통하여 등록해주세요.</p>
				</div>
			</div>
		)
	}

	render() {
		const { modalIsOpen, errorNumberCard, errorName, errorBank } = this.state;
		const { numberCard, bank, name } = this.state.dataCard;

		return (
			<div className="wrapper">
				<Header
					title="이체하기"
					link="/passbook"
					isLink={true}
					classes=""
					classLink=""
					classHeader="header-wrap"
				/>
				<div className="content-body">
					<div className="Container">
						<div className="content-wrap">
							<div className="PassMain-content">
								<div className="input-wrap">
									<label className="input-title">
										이체 금액
                  					</label>
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
										<input
											type="text"
											placeholder="받는 분"
											value={name}
											onChange={(e) => this.handleChangeData({ name: e.target.value })}
										/>
									</div>
									<div className="mt-2">
										<span className="text-danger" role="alert">
											<strong>{errorBank}</strong>
										</span>
									</div>
									<div className="mt-2">
										<span className="text-danger" role="alert">
											<strong>{errorName}</strong>
										</span>
									</div>
								</div>
							</div>
							{this.renderListAccount()}
							<div className="BottomBtn-wrap fixed custom-bottom">
								<button
									className="btn-bottom"
									onClick={this.handleSubmit}
								>
									이체하기
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
				<Root active={3}></Root>
			</div>
		)
	}
}

export default Pay;