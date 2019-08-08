import React, { Component } from 'react';
import Header from '../../common/header';
import Root from '../../common/root';
import { isNumberKey } from '../../../commons/common';
import Popup from '../../common/popup';

const moneycard = 13541226000;
class PayDetail extends Component {

	constructor(props) {
		super(props);

		this.state = {
			money: "",
			erroMoney: "",
			modalIsOpen: "",
		}
	}

	handlePopup = (data) => {
		this.setState({
			...data,
		});
	}

	handleChange = (data) => {
		this.setState({
			...data,
			erroMoney: "",
		}, () => {
			this.validateForm();
		});
	}

	validateForm = () => {
		const { money } = this.state;
		let isError = true;

		if (money.length === 0) {
			this.setState({
				erroMoney: "양도 할 금액을 입력하십시오."
			});
			isError = false;
		}
		if (money > moneycard) {
			this.setState({
				erroMoney: "이체금액을 확인 해주세요."
			});
			isError = false;
		}
		return isError;
	}

	handleSaveData = () => {
		const { money } = this.state;
		var data = {
			money: money,
		}
		console.log(data)
	}

	handleSubmit = () => {
		if (this.validateForm()) {
			this.handlePopup({ modalIsOpen: "active" })
		}
	}

	submitForm = async () => {
		await this.handleSaveData();
		this.handlePopup({ modalIsOpen: "" })
	}

	render() {
		const { money, erroMoney, modalIsOpen } = this.state;
		return (
			<div className="wrapper">
				<Header
					title="이체하기"
					link="/passbook/pay"
					isLink={true}
					classes=""
					classLink=""
					classHeader="header-wrap"
				/>
				<div className="content-body">
					<div className="main-Container">
						<div className="my-money">
							<p>나의 잔액</p>
							<p className="mine"><span>{moneycard}</span>원</p>
						</div>
						<div className="content-wrap">
							<div className="pass-content">
								<div className="content-title">
									<h2>이체하기</h2>
									<p>이체시에는 세금, 수수료, 보험료가 제외된 금액이 입금됩니다.</p>
								</div>
								<div className="white-box">
									<table border={0}>
										<tbody>
											<tr>
												<th rowSpan={3}>이체금액</th>
												<td>
													<input
														type="text"
														className="btn-input"
														value={money}
														pattern="[0-9]*"
														onKeyPress={(e) => isNumberKey(e)}
														onChange={(e) => this.handleChange({ money: e.target.value })}
													/>
												</td>
											</tr>
											<tr>
												<td className="sup-text">이체 가능 금액 : <span>809,000</span>원</td>
											</tr>
											<tr>
												<td>
													<div className="mt-2 w-100">
														<span className="text-danger" role="alert">
															<strong>{erroMoney}</strong>
														</span>
													</div>
												</td>
											</tr>
										</tbody>
									</table>
									<ul>
										<li className="first-list">국내 은행이체는 당일 처리 가능.</li>
										<li>국외 은행의 경우 해외송금이 몇 일 더 걸릴 수 있습니다.</li>
									</ul>
								</div>
							</div>
							<div className="pass-content last-content">
								<div className="content-title">
									<h2>안내</h2>
								</div>
								<div className="white-box">
									<table border={0}>
										<tbody>
											<tr>
												<th>출금계좌번호</th>
												<td><span>1002-667-123546</span></td>
											</tr>
											<tr>
												<th>이체금액</th>
												<td className="red-color"><span>800,000</span></td>
											</tr>
											<tr>
												<th>수수료</th>
												<td className="red-color"><span>1,200</span></td>
											</tr>
											<tr>
												<th>이체일</th>
												<td><span>2018</span>-<span>06</span>-<span>24</span></td>
											</tr>
											<tr>
												<th>내 통장 표시</th>
												<td><span>홍길동</span></td>
											</tr>
										</tbody>
									</table>
									<table border={0} className="border-top-table">
										<tbody>
											<tr>
												<th>입금은행</th>
												<td><span>우리은행</span></td>
											</tr>
											<tr>
												<th>입금계좌번호</th>
												<td><span>1002-667-123546</span></td>
											</tr>
											<tr>
												<th>받는 분</th>
												<td><span>홍길순</span></td>
											</tr>
											<tr>
												<th>받는 통장표시</th>
												<td><input
													type="text"
													disabled
													value={money}
												/></td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
							<div className="BottomBtn-wrap mb-90">
								<button
									className="btn-bottom"
									onClick={this.handleSubmit}
								>
									확인
								</button>
							</div>
						</div>
					</div>
				</div>
				<Popup
					classPopup="pop-wrap"
					classActive={modalIsOpen}
					isClose={true}
					handleClose={() => this.handlePopup({ modalIsOpen: "" })}
				>
					<div className="pop-head">
						<h2>통지</h2>
					</div>
					<div className="pop-content normal">
						<p>우리은행 1002-111-112545</p>
						<p>받는 분의 실명과 계좌번호를 확인해주세요</p>
						<p>받는 분의 이름이 다르면 이체가 되지 않습니다.</p>
					</div>
					<div className="pop-footer">
						<button
							className="agree"
							onClick={this.submitForm}
						>확인</button>
					</div>
				</Popup>
				<Root active={3}></Root>
			</div>
		)
	}
}

export default PayDetail;