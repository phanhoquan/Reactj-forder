import React, { Component } from 'react';
import Header from '../common/header';
import Root from '../common/root';
import { Link } from 'react-router-dom';
import none_list from '../../public/images/none_list.png';
import ico_more from '../../public/images/ico_more.png';
import Popup from '../common/popup';
import { observer, inject } from "mobx-react";
import { withRouter } from 'react-router';
import Pagination from '../common/pagination';
import { formatNumber } from '../../commons/common';
import Loading from '../common/loading';

@withRouter
@inject('rootStore')
@observer
class WorkList extends Component {
	rootStore;
	constructor(props) {
		super(props);

		this.rootStore = this.props.rootStore;
		this.state = {
			tabActive: 1,
			modalWorking: '',
			user_id: '',
			dataWorking: {},
			dataSchedule: {
				data: [],
				page: 1,
				pageSz: 10,
				totalPage: 0
			},
			dataCompleted: {
				data: [],
				page: 1,
				pageSz: 10,
				totalPage: 0
			},
			isLoading: true
		}
	}

	componentWillMount() {
		if (this.props.tab) {
			this.setState({
				tabActive: parseInt(this.props.tab)
			});
		}

		this._renderData();
	}

	_renderData = async () => {
		let user = await this.rootStore.userStore.getUser();
		let user_id = user.id;
		const { dataSchedule, dataCompleted } = this.state;

		this._renderDataWorking(user_id);
		this._renderDataSchedule(user_id, dataSchedule.page, dataSchedule.pageSz);
		this._renderDataCompleted(user_id, dataCompleted.page, dataCompleted.pageSz);

		this.setState({
			user_id
		});
	}

	_renderDataWorking = async (user_id) => {
		await this.props.rootStore.historyStore.getListCaregiverProgress(user_id).then(response => {
			let dataWorking = [];

			if (response.data.data.length !== 0) {
				dataWorking = response.data.data[0];
			}

			this.setState({
				user_id,
				dataWorking,
				isLoading: false
			});
		});
	}

	_renderDataSchedule = async (user_id, page, pageSz) => {
		await this.props.rootStore.historyStore.getListCaregiverIntended(user_id, page, pageSz).then(response => {
			this.setState({
				dataSchedule: {
					...this.state.dataSchedule,
					data: response.data.data.data,
					page: response.data.data.page,
					totalPage: response.data.data.total
				}
			});
		});
	}

	_renderDataCompleted = async (user_id, page, pageSz) => {
		await this.props.rootStore.historyStore.getListCaregiverCompleted(user_id, page, pageSz).then(response => {
			this.setState({
				dataCompleted: {
					...this.state.dataCompleted,
					data: response.data.data.data,
					page: response.data.data.page,
					totalPage: response.data.data.total
				}
			});
		});
	}

	handleChange = (data) => {
		this.setState({
			...data
		});
	}

	renderContent = (data, link) => {
		return (
			<ul className="work-list">
				{this.renderItem(data, link)}
			</ul>
		);
	}

	renderItem = (data, link) => {
		let html = [];

		data.map((item, index) => {
			html.push(
				<li key={index}>
					<Link to={link + item.id}>
						<div className="list-left">
							<table border={0}>
								<caption>{item.info}</caption>
								<tbody>
									<tr>
										<th>간병 시작일</th>
										<td>{item.start}</td>
									</tr>
									<tr>
										<th>간병 종료일</th>
										<td>{item.end || '예정 종료 기간 없음'}</td>
									</tr>
									<tr>
										<th>일 간병비</th>
										<td><span>{formatNumber(item.amount)}</span>원</td>
									</tr>
								</tbody>
							</table>
						</div>
						<img src={ico_more} alt="" />
					</Link>
				</li>
			);
			return item;
		});
		return html;
	}

	renderDataList = (data, link) => {
		if (data.length === 0) {
			return (
				this.renderLoading()
			);
		}

		return this.renderContent(data, link);
	}

	handleChangePageCompleted = (page) => {
		this.setState({
			dataCompleted: {
				...this.state.dataCompleted,
				page
			}
		}, () => {
			this._renderDataCompleted(this.state.user_id, page, this.state.dataCompleted.pageSz)
		});
	}

	handleChangePageSchedule = (page) => {
		this.setState({
			dataSchedule: {
				...this.state.dataSchedule,
				page
			}
		}, () => {
			this._renderDataSchedule(this.state.user_id, page, this.state.dataSchedule.pageSz)
		});
	}

	renderLoading = () => {
		const { isLoading } = this.state;

		if (isLoading) {
			return (
				<Loading loading={isLoading} loadingOverlayDiv={true} />
			);
		}

		return (
			<div className="none-list">
				<img src={none_list} alt="" />
				<p>진행중인 간병 내역이 없습니다.</p>
			</div>
		);
	}

	renderDataWorking = (dataWorking) => {
		if (Object.keys(dataWorking).length !== 0) {
			return (
				<div>
					<ul className="work-list">
						<li>
							<Link to={'/work/working/' + dataWorking.id}>
								<div className="list-left">
									<table border={0}>
										<caption>{dataWorking.info}</caption>
										<tbody>
											<tr>
												<th>간병 시작일</th>
												<td>{dataWorking.start}</td>
											</tr>
											<tr>
												<th>간병 종료일</th>
												<td>{dataWorking.end || '예정 종료 기간 없음'}</td>
											</tr>
											<tr>
												<th>일 간병비</th>
												<td><span>{formatNumber(dataWorking.amount)}</span>원</td>
											</tr>
										</tbody>
									</table>
								</div>
								<img src={ico_more} alt="" />
							</Link>
						</li>
					</ul>
					<div className="BottomBtn-wrap fixed footer-stay">
						<button
							className="btn-bottom"
							onClick={() => this.handleChange({ modalWorking: "active" })}
						>
							출근완료
					</button>
					</div>
				</div>
			);
		}

		return (
			this.renderLoading()
		);
	}

	handleSubmitStart = async (id) => {
		await this.props.rootStore.historyStore.caregiverStartById(id).then(response => {
			if (Object.keys(response.data.data).length !== 0) {
				this.setState({
					modalWorking: ""
				}, () => {
					this._renderDataWorking(this.state.user_id);
				});
			}
		});
	}

	render() {
		const {
			tabActive,
			modalWorking,
			dataWorking,
			dataSchedule,
			dataCompleted
		} = this.state;

		return (
			<Root active={2}>
				<Header
					title="간병 내역"
					link=""
					isLink={false}
					classHeader="SubHeader-wrap"
					classes=""
					classLink=""
				/>
				<div className="content-body">
					<div className="main-Container">
						<div className="BarContent-tab" id="tabs">
							<ul>
								<li
									className={tabActive === 1 ? "active" : ""}
									onClick={() => this.handleChange({ tabActive: 1 })}
								>진행중 간병 내역</li>
								<li
									className={tabActive === 2 ? "active" : ""}
									onClick={() => this.handleChange({ tabActive: 2 })}
								>예정중 간병 내역</li>
								<li
									className={tabActive === 3 ? "active" : ""}
									onClick={() => this.handleChange({ tabActive: 3 })}
								>완료 간병 내역</li>
							</ul>
						</div>
						<div className="content-wrap">
							<div className="TabContent-wrap resize-pt">
								<div className={`tab-content list-work ${tabActive === 1 ? 'active' : ''}`}>
									{this.renderDataWorking(dataWorking)}
								</div>
								<div className={`tab-content list-work ${tabActive === 2 ? 'active' : ''}`}>
									{this.renderDataList(dataSchedule.data, '/work/schedule/')}
									<Pagination
										page={dataSchedule.page}
										pageSz={dataSchedule.pageSz}
										totalPage={dataSchedule.totalPage}
										handleChangePage={this.handleChangePageSchedule}
									/>
								</div>
								<div className={`tab-content list-work ${tabActive === 3 ? 'active' : ''}`}>
									{this.renderDataList(dataCompleted.data, '/work/completed/')}
									<Pagination
										page={dataCompleted.page}
										pageSz={dataCompleted.pageSz}
										totalPage={dataCompleted.totalPage}
										handleChangePage={this.handleChangePageCompleted}
									/>
								</div>
							</div>
						</div>
					</div>
					<Popup
						classPopup="pop-wrap"
						classActive={modalWorking}
						isClose={true}
						handleClose={() => this.handleChange({ modalWorking: "" })}
					>
						<div className="pop-head">
							<h2>통지</h2>
						</div>
						<div className="pop-content normal">
							<p>
								출근 완료 처리하시겠습니까? <br />
								(출근하지 않고, 예 선택 시 패널티가 부여됩니다.)
							</p>
						</div>
						<div className="pop-footer btn-2">
							<button
								className="cancel"
								onClick={() => this.handleChange({ modalWorking: "" })}
							>아니오</button>
							<button
								className="agree"
								onClick={() => this.handleSubmitStart(dataWorking.id)}
							>예</button>
						</div>
					</Popup>
				</div>
			</Root>
		)
	}
}

export default WorkList;