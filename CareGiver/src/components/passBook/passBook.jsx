import React, { Component } from "react";
import Header from "../common/header";
import moment from "moment";
import Root from "../common/root";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import icon_arrow from "../../public/images/ico_arrow.png";
import { Link } from "react-router-dom";
import InputDatePicker from '../common/inputDatePicker';
import {
	getListTime,
	getListTransaction,
	getListTransactionHistory
} from "../../commons/common";
const formatDate = "yyyy-MM-dd";
class Passbook extends Component {
	constructor(props) {
		super(props);

		this.state = {
			modalIsOpen: "",
			isActive: false,
			dataFilter: {
				time: {
					id: 1,
					name: "1개월"
				},
				transaction: {
					id: 1,
					name: "전체"
				},
				history: {
					id: 1,
					name: "최신순"
				},
				startDate: "2019-02-03",
				endDate: "2019-02-05"
			},
			timeTemp: {
				id: 1,
				name: "1개월"
			},
			transactionTemp: {
				id: 1,
				name: "전체"
			},
			historyTemp: {
				id: 1,
				name: "최신순"
			},

			startDateTemp: "",
			endDateTemp: ""
		};
	}

	handleChange = data => {
		this.setState({
			...data
		});
	};

	renderButtonTime = (array, id) => {
		const { timeTemp } = this.state;
		let html = [];

		array.map((item, index) => {
			html.push(
				<button
					className={timeTemp.id === item.id ? "active" : ""}
					key={index}
					onClick={() => this.handleChange({ timeTemp: item })}
				>
					{item.name}
				</button>
			);

			return item;
		});

		return html;
	};

	renderButtonTransaction = (array, id) => {
		const { transactionTemp } = this.state;
		let html = [];
		array.map((item, index) => {
			html.push(
				<button
					className={transactionTemp.id === item.id ? "active" : ""}
					key={index}
					onClick={() => this.handleChange({ transactionTemp: item })}
				>
					{item.name}
				</button>
			);

			return item;
		});

		return html;
	};

	renderButtonHistory = (array, id) => {
		const { historyTemp } = this.state;
		let html = [];
		array.map((item, index) => {
			html.push(
				<button
					className={historyTemp.id === item.id ? "active" : ""}
					key={index}
					onClick={() => this.handleChange({ historyTemp: item })}
				>
					{item.name}
				</button>
			);

			return item;
		});

		return html;
	};

	handleClosePopup = () => {
		this.setState({
			modalIsOpen: "",
			timeTemp: this.state.dataFilter.time,
			transactionTemp: this.state.dataFilter.transaction,
			historyTemp: this.state.dataFilter.history,
			startDateTemp: this.state.dataFilter.startDate,
			endDateTemp: this.state.dataFilter.endDate
		});
	};

	handleSubmitFilter = () => {
		this.setState({
			modalIsOpen: "",
			dataFilter: {
				...this.state.dataFilter,
				time: this.state.timeTemp,
				transaction: this.state.transactionTemp,
				history: this.state.historyTemp,
				startDate: this.state.startDateTemp,
				endDate: this.state.endDateTemp
			}
		});
	};

	render() {
		const { modalIsOpen, startDateTemp, endDateTemp } = this.state;
		const {
			time,
			transaction,
			history,
			startDate,
			endDate
		} = this.state.dataFilter;

		return (
			<div className="wrapper">
				<Header
					title="통장"
					link="/mypage"
					isLink={false}
					classes=""
					classLink=""
					classHeader="SubHeader-wrap"
				/>
				<div className="content-body">
					<div className="Sub-Container">
						<div className="SubContent-wrap">
							<div className="MyPassbook">
								<button>
									<Link to="/passbook/pay">이체하기</Link>
								</button>
								<div className="content-box">
									<p className="account-num">
										국민은행 <span>1002</span>-<span>611</span>-
                    					<span>123456</span>
									</p>
									<p className="pay-num">
										<strong>1,309,000</strong>원
                  					</p>
								</div>
							</div>
							<div className="search-bar">
								<p>
									<span>{moment(startDate).format("YYYY-MM-DD")}</span>~
                  					<span>{moment(endDate).format("YYYY-MM-DD")}</span> ∙{" "}
									<span>{time.name}</span> ∙ <span>{transaction.name}</span> ∙{" "}
									<span>{history.name}</span>
								</p>
								<img
									src={icon_arrow}
									alt=""
									className="arrow"
									onClick={() => this.handleChange({ modalIsOpen: "active" })}
								/>
							</div>
						</div>
						<div className="SubContent-wrap bottom-padding">
							<ul className="hospital-list">
								<li>
									<Link to="/passbook/detail">
										<div className="DayName">
											<small>2018-06-25</small>
											<h2>구미 세브란스 병원</h2>
										</div>
										<div className="PayMoney">
											<p className="pay-add">
												+<span>350,000</span>
											</p>
											<p className="pay-all">10,350,000</p>
										</div>
										<img src={icon_arrow} alt="" className="arrow" />
									</Link>
								</li>
								<li>
									<Link to="/passbook/detail">
										<div className="DayName">
											<small>2018-06-25</small>
											<h2>구미 세브란스 병원</h2>
										</div>
										<div className="PayMoney">
											<p className="pay-add">
												+<span>350,000</span>
											</p>
											<p className="pay-all">10,350,000</p>
										</div>
										<img src={icon_arrow} alt="" className="arrow" />
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className={"passbook-popwrap " + modalIsOpen}>
					<div className="popup-inner">
						<div className="pop-head">
							<img
								src={icon_arrow}
								alt=""
								className="arrow"
								onClick={this.handleClosePopup}
							/>
							<h2>조회 설정</h2>
							<button onClick={this.handleSubmitFilter}>확인</button>
						</div>
						<div className="pop-content pop-touch">
							<div className="day-content">
								<h3>기간</h3>
								<div className="btn-wrap">
									{this.renderButtonTime(getListTime(1))}
								</div>
								<div className="date-choice">
									<DatePicker
										selected={Date.parse(startDateTemp)}
										dateFormat={formatDate}
										selectsStart
										startDate={Date.parse(startDateTemp)}
										endDate={Date.parse(endDateTemp)}
										minDate={startDateTemp || new Date()}
										onChange={e => this.handleChange({ startDateTemp: e })}
										placeholderText="시작 날짜 선택"
										withPortal
										customInput={<InputDatePicker />}
									/>
									<b>~</b>
									<DatePicker
										selected={Date.parse(endDateTemp)}
										dateFormat={formatDate}
										selectsStart
										startDate={Date.parse(startDateTemp)}
										endDate={Date.parse(endDateTemp)}
										onChange={e => this.handleChange({ endDateTemp: e })}
										minDate={startDateTemp || new Date()}
										placeholderText="종료 날짜 선택"
										withPortal
										customInput={<InputDatePicker />}
									/>
								</div>
							</div>
							<div className="case-content">
								<h3>거래유형</h3>
								<div className="btn-wrap">
									{this.renderButtonTransaction(getListTransaction(1))}
								</div>
							</div>
							<div className="list-content">
								<h3>거래내역</h3>
								<div className="btn-wrap">
									{this.renderButtonHistory(getListTransactionHistory(1))}
								</div>
							</div>
						</div>
					</div>
				</div>
				<Root active={3} />
			</div>
		);
	}
}
export default Passbook;
