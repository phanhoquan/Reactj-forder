import React, { Component } from 'react';
import moment from 'moment';
import RoomNormalTable from './roomNormalTable';
import { PAGESIZE, PAGESIZEMODAL } from '../../config.json';
import { getRoomStatus, getRoomNormal, getFinedAide, apiChangePrice, getHistoryAide, apiCloseRecruitment, getInfoAide, apiChangeNotice } from "../../services/roomStatus";
import { getRoomById } from '../../services/roomService';
import HeaderSearch from '../common/headerSearch';
import { getPrefixWard } from '../../services/functionService';
import _ from "lodash";
import { connect } from 'react-redux';
import { toast } from "react-toastify";
import LoadingOverlay from 'react-loading-overlay';
import PulseLoader from 'react-spinners/PulseLoader'

const dataDefault = [
	{ name: "A동", room: "101호", value: "" },
	{ name: "B동", room: "102호", value: "" },
	{ name: "C동", room: "103호", value: "" },
	{ name: "D동", room: "101호", value: "" },
	{ name: "E동", room: "102호", value: "" },
	{ name: "A동", room: "106호", value: "" }
];

class RoomStatus extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: {
				body: []
			},
			isActive: true,
			recruitment: 0,
			valueSelect: [],
			totalRoom: 0,
			totalPatient: 0,
			flucTuations: 0,
			date: {
				day: "",
				month: "",
				year: "",
				hours: "",
				minutes: ""
			},
			dataTable: {
				body: [],
				totalPage: 0,
				page: 1,
				pageSz: PAGESIZEMODAL
			},
			dataInfo: {
				params: [
					{ title: "이름", value: "full_name", className: "text-center" },
					{ title: "성별", value: "gender", className: "text-center" },
					{ title: "나이", value: "age", className: "text-center" },
					{ title: "내/외국인", value: "is_foreigner", className: "text-center" },
					{ title: "휴대전화번호", value: "phone", className: "text-center" },
					{ title: "평점", value: "avgRating", renderer: this._renderReview, className: "text-center" },
					{ title: "사고", value: "countAccident", className: "text-center" },
					{ title: "패널티", value: "countPenatly", className: "text-center" }
				],
				body: [
					{
						id: 1,
						name: "이보영(대표)",
						gender: "여",
						age: 60,
						foreign: "외국인",
						phone: "010-2563-5784",
						review: 5,
						trouble: 1,
						punish: 1,
					}
				],
				page: 1,
				pageSz: PAGESIZE,
				totalPage: 0
			},
			dataHistory: {
				params: [
					{ title: "NO", value: "id", className: "w50 text-center" },
					{ title: "근무한 병원 명", value: "nameHospital", className: "text-center" },
					{ title: "동 호수", value: "departRoom", className: "text-center" },
					{ title: "근무 일시", value: "date", className: "text-center w300" },
					{ title: "병실", value: "room", className: "text-center" },
					{ title: "근무 형", value: "status", className: "text-center" }
				],
				body: [],
				page: 1,
				pageSz: PAGESIZEMODAL,
				totalPage: 0
			},
			dataHistoryError: {
				params: [
					{ title: "NO", value: "id", className: "w50 text-center" },
					{ title: "신청한 병원명", value: "nameHospital", className: "text-center" },
					{ title: "동 호수", value: "departRoom", className: "text-center" },
					{ title: "취소 일시", value: "date", className: "text-center" },
					{ title: "병실", value: "room", className: "text-center" },
					{ title: "근무 형태", value: "status", className: "text-center" },
					{ title: "하루 일당", value: "salary", className: "text-right" },
					{ title: "이유", value: "notes", className: "text-center" }
				],
				body: [],
				page: 1,
				pageSz: PAGESIZEMODAL,
				totalPage: 0
			},
			dataPopup: [],
			dataTmp: [],
			dataFilter: {
				departRoom: "",
				room_id: "",
				name: "",
				typeRoom: "",
				nameCareer: "",
				statusOff: "",
				dateSort: "",
			},
			selectRoom: getPrefixWard().prefixWard[0],
			dataCareer: {},
			caregiverId: "",
			openModalCurrentNumber: false,
			openModalDelete: false,
			openModalCarrerDetail: false,
			openModalChangeStatus: false,
			openModalExit: false,
			openModalHistoryChange: false,
			openModal: false
		}
	}

	async componentWillMount() {
		const { page, pageSz } = this.state.dataTable;
		this._renderDate(new Date());
		this._renderDataTable(this.state.dataFilter, page, pageSz, this.props.hospital_id);
		setInterval(() => {
			this._renderDate(new Date());
			this._refreshData();
		}, 1800000);
	}

	async componentDidMount() {
		if (this.props.user.isApproved === false) {
			window.location.href = '/home-waiting';
		}
		if (this.props.id !== undefined) {
			this.setState({
				openModalCurrentNumber: true
			});
			let room = getRoomById(parseInt(this.props.id))[0];
		}
	}

	_refreshData = async () => {
		let aide = '';
		if(this.props.role === 'caregiver'){
			aide = this.props.master_id;
		}
		let dataResult = await getRoomNormal(this.state.dataFilter, this.state.dataTable.page, this.state.dataTable.pageSz, this.props.hospital_id, aide, 1);
		
		// dataResult.data.map((item) => {
		// 	item.area = item.area;
		// 	item.room = item.room;
		// 	item.patient = item.patient;

		// 	return item;
		// });
		this.setState({
			dataTable: {
				...this.state.dataTable,
				body: dataResult.data,
				totalPage: dataResult.total
			},
			isActive: false
		});
	}

	_renderDataTable = async (data, page, pageSz, id) => {
		let aide = '';
		if(this.props.role === 'caregiver'){
			aide = this.props.master_id;
		}
		let dataResult = await getRoomNormal(data, page, pageSz, id, aide, 1);
		this.setState({
			dataTable: {
				...this.state.dataTable,
				body: dataResult.data,
				totalPage: dataResult.total
			},
			totalRoom: dataResult.room,
			totalPatient: dataResult.patient,
			flucTuations:dataResult.notice,
			isActive: false,
		});
	}

	handleChangePageDataTable = (page) => {
		window.scrollTo(0, 0)
		this.setState({
			dataTable: {
				...this.state.dataTable,
				page: page
			}
		}, () => {
			this._renderDataTable(this.state.dataFilter, page, this.state.dataTable.pageSz, this.props.hospital_id);
		});
	}

	_renderDataHistory = async (id, page, pageSz) => {
		let dataResult = await getHistoryAide(id, page, pageSz);
		this.setState({
			dataHistory: {
				...this.state.dataHistory,
				body: dataResult.data,
				totalPage: dataResult.totalPage
			}
		});
	}

	handleCloseModalCarrerDetail = () => {
		this.setState({
			openModalCarrerDetail: false,
			dataHistory: {
				...this.state.dataHistory,
				page: 1,
				idHistory: ""
			}
		});
	}

	_renderDataHistoryError = async (id, page, pageSz) => {
		let dataResult = await getFinedAide(id, page, pageSz);
		this.setState({
			dataHistoryError: {
				...this.state.dataHistoryError,
				body: dataResult.data,
				totalPage: dataResult.totalPage
			}
		});
	}

	_renderReview = (data) => {
		var starArr = [];
		if(data.avgRating !== '') {
			if (Number.isInteger(data.review)) {
				_.times(data.review, (i) => {
					starArr.push(<span className="fa fa-star text-danger" key={i}></span>);
				})
	
			} else {
				var gradeResult = data.review.toString().split(".");
				_.times(gradeResult[0], (i) => {
					starArr.push(<span className="fa fa-star text-danger" key={i}></span>);
				})
				starArr.push(<span className="fa fa-star-half-o text-danger" key={""}></span>);
			}
		}
		return starArr;
	}


	_renderDate = (date) => {
		this.setState({
			date: {
				day: moment(date).format('D'),
				month: moment(date).format('M'),
				year: moment(date).format('YY'),
				hours: moment(date).format('HH'),
				minutes: moment(date).format('mm')
			}
		});
	}

	handleRefresh = () => {
		this.setState({
			isActive: true
		})
		this._renderDate(new Date());
		this._refreshData();
	}

	renderTextDate = () => {
		const { day, month, year, hours, minutes } = this.state.date;

		return (
			<span>{year}년 {month}월 {day}일 {hours}:{minutes}</span>
		);
	}

	onViewDetail = async (item, index, id) => {
		let dataResult = await getInfoAide(id);
		this.setState({
			caregiverId: id,
			dataInfo: {
				...this.state.dataInfo,
				body: dataResult.data.data
			}
		}, () => {
			this._renderDataHistory(id, this.state.dataHistory.page, this.state.dataHistory.pageSz);
			this._renderDataHistoryError(id, this.state.dataHistoryError.page, this.state.dataHistoryError.pageSz);
			this.handleChange({ openModalCarrerDetail: true });
		});
	}

	
	handleFilterData = (dataSearch) => {
		const { pageSz } = this.state.dataTable;
		let dataFilter = {}
		
		if (dataSearch.valueArea && dataSearch.valueArea.value) {
			dataFilter.departRoom = dataSearch.valueArea.value;
		}
		if (dataSearch.valueRoom && dataSearch.valueRoom.value) {
			dataFilter.room_id = dataSearch.valueRoom.value;
		}

		if (dataSearch.careGiver_name && dataSearch.careGiver_name) {
			dataFilter.nameCareer = dataSearch.careGiver_name;
		}

		if (dataSearch.statusOff && dataSearch.statusOff) {
			dataFilter.statusOff = dataSearch.statusOff.value;
		}

		if (dataSearch.dateSort && dataSearch.dateSort) {
			dataFilter.dateSort = dataSearch.dateSort.value;
		}

		if (dataSearch.valueTypeRoom && dataSearch.valueTypeRoom) {
			dataFilter.typeRoom = dataSearch.valueTypeRoom.value;
		}
		this.setState({
			dataTable: {
				...this.state.dataTable,
				page: 1
			},
			dataFilter,
			isActive: true
		}, () => {
			this._renderDataTable(dataFilter, 1, pageSz, this.props.hospital_id);
		});
	}

	handleChangePage = (page) => {
		this.setState({
			dataHistory: {
				...this.state.dataHistory,
				page: page
			}
		}, () => {
			this._renderDataHistory(this.state.caregiverId, page, this.state.dataHistory.pageSz);
		});
	}

	handleChangePageHistoryError = (page) => {
		this.setState({
			dataHistoryError: {
				...this.state.dataHistoryError,
				page: page
			}
		}, () => {
			this._renderDataHistoryError(this.state.caregiverId, page, this.state.dataHistoryError.pageSz);
		});
	}

	setContentPopup = (item, recruitment) => {
		this.setState({
			recruitment: recruitment,
			dataCareer: item,
			openModalChangeStatus: true
		});
	}

	onViewExit = (item) => {
		this.setState({
			...this.state,
			dataCareer: item,
			openModalExit: true
		});
	}
	
	closeRecruitment = async (content) => {
		try {
			let response = await apiCloseRecruitment(this.state.dataCareer, content);
			toast.success(response.data.message);
			this.setState({
				openModalExit: false,
			}, () => {
				const { page, pageSz } = this.state.dataTable;
				this._renderDataTable(this.state.historyFilter, page, pageSz, this.props.hospital_id);
			});
		} catch (ex) {
			console.log(ex);
		}	
	}

	handleChange = (data) => {
		this.setState({
			...data
		});
	}

	// updateValue = (e, name) => {
	// 	this.onHandleChange(e, name);
	// }

	// onHandleChange = (data, name) => {
	// 	var result = this.state.dataFilter;
	// 	result[name] = data;

	// 	this.setState({
	// 		dataFilter: {
	// 			...this.state.dataFilter,
	// 			...data
	// 		}
	// 	});
	// }

	handleChangeIndex = (name, value, item, index) => {
		let newData = [...this.state.data.body];
		let row = item;
		row[name] = value;
		newData[index] = row;

		this.setState({
			data: {
				body: newData
			}
		});
	}

	handleClickSave = async () => {
		const {body} = this.state.data
		let result = [], tmp = '', i = 0;
		body.map((item) => {
			if(item !== undefined){
				tmp = {
					type: item.type,
					patient: item.value
				}
				result[i] = tmp;
				i++;
			}
			return item;
		})

		try {
			let response = await apiChangePrice(result);
			toast.success(response.data.message);
			this.setState({
				openModalCurrentNumber: false,
			});
		} catch (ex) {
			console.log(ex);
		}	
	}	

	handleClickChangePrice = (item, index, id) => {
		item.careers.map((career) => {
			if (career.id === id) {
				item.nameCareer = career.name;
			}

			return career;
		});

		this.setState({
			openModal: true,
			dataCareer: id,
		});
	}

	handleChangeFilter = async (data) => {
		// let dataPopup = [...dataDefault];
		let dataPopup = this.state.dataTmp;
		if (data.value !== "") {
			dataPopup = dataPopup.filter(item => item.name === data.value);
		}

		this.setState({
			dataPopup
		});
	}

	handleChangeNotice = async (content) => {
		try {
			let response = await apiChangeNotice(this.state.dataCareer, this.props.master_id, content);
			toast.success(response.data.message);
			this.setState({
				openModalChangeStatus: false,
			}, () => {
				const { page, pageSz } = this.state.dataTable;
				this._renderDataTable(this.state.historyFilter, page, pageSz, this.props.hospital_id);
			});
		} catch (ex) {
			console.log(ex);
		}		
	}

	render() {
		const { dataInfo, dataHistory, dataHistoryError, dataPopup, dataCareer, selectRoom, valueSelect, isActive } = this.state;
		return (
				<div>
				<HeaderSearch
					// onHandleChange={this.onHandleChange}
					handleFilterData={this.handleFilterData}
				/>
				<div className="d-flex justify-content-between mt-3">
					<div className="wrapp-left">
						<p>현재 병실 현황</p>
						<p>
							{this.renderTextDate()}
							<i
								onClick={this.handleRefresh}
								className="fa fa-repeat refresh"></i>
						</p>
						<p className="text-opacity">※마지막 데이터 갱신시간입니다.</p>
					</div>
					<div className="wrapp-right">
						<table className="table table-bordered text-center">
							<thead>
								<tr>
									<th>간병인수</th>
									<th>병실건수</th>
									<th>변동요청건수</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>{this.state.totalPatient}명</td>
									<td>{this.state.totalRoom}개</td>
									<td>{this.state.flucTuations}건</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div className="custom-table">
				<LoadingOverlay 
					active={isActive}
					spinner={<PulseLoader />}
					text='로딩...'
					styles={{
						spinner: (base) => ({
						...base,
						top: '0',
						background: '#4288ce'
						}),
						overlay: (base) => ({
							...base,
							background: 'rgba(66, 136, 206, 0.28)'
						})
					}}
				>
					<RoomNormalTable
						onViewDetail={this.onViewDetail}
						setContentPopup={this.setContentPopup}
						recruitment={this.state.recruitment}
						onViewExit={this.onViewExit}
						handleChangePage={this.handleChangePageDataTable}
						data={this.state.dataTable}
						openModalCarrerDetail={this.state.openModalCarrerDetail}
						openModalChangeStatus={this.state.openModalChangeStatus}
						openModalExit={this.state.openModalExit}
						openModalHistoryChange={this.state.openModalHistoryChange}
						handleChange={this.handleChange}
						handleClickChangePrice={this.handleClickChangePrice}
					/>
					</LoadingOverlay>
				</div>
				</div>
			
		);
	}
}

const mapStateToProps = (state) => {
	return {
		role: state.authReducer.user.user.role === null ? null : state.authReducer.user.user.role,
		master_id: state.authReducer.user.user.id === null ? null : state.authReducer.user.user.id,
		hospital_id: state.authReducer.user.user.hospital === null ? null : state.authReducer.user.user.hospital.id,
		user: state.authReducer.user.user,
	}
}

export default connect(mapStateToProps)(RoomStatus);