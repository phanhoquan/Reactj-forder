import React, { Component } from 'react';
import ico_arrow from '../../public/images/ico_arrow.png';
import ico_close2 from '../../public/images/ico_close2.png';
import ico_back_w from '../../public/images/ico_back_w.png';
import ico_hospital from '../../public/images/ico_hospital.png';
import ico_address from '../../public/images/ico_address.png';
import main_logo from '../../public/images/main_logo.png';
import Root from '../common/root';
import Popup from '../common/popup';
import { withRouter } from 'react-router-dom';
import { observer, inject } from "mobx-react";
const listPatient = []
@withRouter
@inject('rootStore')
@observer

class IndexComponent extends Component {
	userStore;
	constructor(props) {
		super(props);

		this.state = {
			isAddress: false,
			isSearch: false,
			isPatient: false,
			isPatientDetail: false,
			dataPatient: {},
			listPatient: listPatient,
			listHospital: [],
			listAddress: [],
			modalOption: false,
			modalConfirm: '',
			modalNotiHospital: '',
			idHospital: '',
			idAddress: '',
			type: true,
			listHospitalAddress: {},
			isHospitalAddress: false,
		};
		this.hospitalStore = this.props.rootStore.hospitalStore;
		this.rootStore = this.props.rootStore;
	}

	handleChange = (data) => {
		this.setState({
			...data
		});
	}

	handleChangeDataHospital = (item) => {
		let listHospital = [...this.state.listHospital];
		listHospital.push(item);

		this.setState({
			listHospital,
			isSearch: false
		});
	}

	handleSearchPatient = async () => {
		const { listHospital, listAddress } = this.state;
		let user = await this.rootStore.userStore.getUser();
		let id = user.id;
		if (listHospital.length === 0 && listAddress.length === 0) {
			this.setState({
				modalOption: "active"
			});
		} else {
			let arrayHospital = [];
			listHospital.map((item) => {
				arrayHospital.push(item.name);
				return item;
			});
			let arrayAddress = [];
			listAddress.map((item) => {
				arrayAddress.push(item.district);
				return item;
			});

			await this.hospitalStore.searchPatient(id, arrayHospital, arrayAddress).then(response => {
				this.setState({
					isPatient: true,
					listPatient: response.data.data.jobs
				});
			});

		}
	}

	handleSearchHospital = () => {
		if (this.state.listHospital.length === 5) {
			this.setState({
				modalNotiHospital: 'active'
			});
		} else {
			this.setState({
				isSearch: true
			});
		}
	}

	handleRemove = () => {
		const { type, idHospital, idAddress } = this.state;

		if (type) {
			let listHospital = this.state.listHospital.filter((hospital) => hospital.id !== idHospital);
			this.setState({
				listHospital,
				modalConfirm: false
			});
		} else {
			let listAddress = this.state.listAddress.filter((item) => item._id !== idAddress);
			this.setState({
				listAddress,
				modalConfirm: false
			});
		}
	}

	renderDataHospital = () => {
		let html = [];

		this.state.listHospital.map((item, index) => {
			html.push(
				<div className="contact-content" key={index}>
					<p>{item.name}</p>
					<img
						src={ico_close2}
						alt=""
						onClick={() => this.handleChange({ modalConfirm: "active", idHospital: item.id, type: true })}
					/>
				</div>
			);
			return item;
		});

		return html;
	}

	renderAddress = () => {
		let html = [];

		this.state.listAddress.map((item, index) => {
			html.push(
				<div className="contact-content" key={index}>
					<p>{item.city.name} {item.district}</p>
					<img
						src={ico_close2}
						alt=""
						onClick={() => this.handleChange({ modalConfirm: "active", idAddress: item._id, type: false })}
					/>
				</div>
			);

			return item;
		});

		return html;
	}

	handleSaveAddress = (data) => {
		this.setState({
			...data
		});
	}

	render() {

		const {
			isAddress,
			isSearch,
			isPatient,
			isPatientDetail,
			dataPatient,
			listPatient,
			modalOption,
			listHospital,
			listAddress,
			modalConfirm,
			modalNotiHospital,
			listHospitalAddress,
			isHospitalAddress,
		} = this.state;

		return (
			<Root
				active={1}
				isAddress={isAddress}
				isSearch={isSearch}
				isPatient={isPatient}
				isPatientDetail={isPatientDetail}
				handleClose={this.handleChange}
				handleChange={this.handleChange}
				handleChangeDataHospital={this.handleChangeDataHospital}
				dataPatient={dataPatient}
				listPatient={listPatient}
				listHospital={listHospital}
				listAddress={listAddress}
				listHospitalAddress={listHospitalAddress}
				isHospitalAddress={isHospitalAddress}
				handleSaveAddress={this.handleSaveAddress}
			>
				<div className="content-body">
					<div className="scroll-container">
						<div className="content-wrap">
							<div className="main-content">
								<div className="main-logo">
									<img src={main_logo} alt="" />
								</div>
								<div className="search-wrap">
									<div className="find-hospital">
										<button onClick={this.handleSearchHospital}>
											<img src={ico_hospital} alt="" />
											<div className="find-text">
												<h2 className="find-title">병원 찾기</h2>
												<p>병원 이름을 검색해주세요.</p>
											</div>
											<img src={ico_arrow} alt="" className="arrow" />
										</button>
									</div>
									<div className="find-address">
										<button onClick={() => this.handleChange({ isAddress: true })}>
											<img src={ico_address} alt="" />
											<div className="find-text">
												<h2 className="find-title">주소 찾기</h2>
												<p>근무 희망 주소로 검색해주세요.</p>
											</div>
											<img src={ico_arrow} alt="" className="arrow" />
										</button>
									</div>
								</div>
								<div className="contact-list">
									{this.renderDataHospital()}
									{this.renderAddress()}
								</div>
								<div className="SearchBtn-wrap">
									<button
										className="SearchBtn"
										onClick={this.handleSearchPatient}
									>
										환자 찾기
										<img src={ico_back_w} alt="" />
									</button>
								</div>
							</div>
						</div>
					</div>
					<Popup
						classPopup="pop-wrap"
						classActive={modalOption}
						isClose={true}
						handleClose={() => this.handleChange({ modalOption: "" })}
					>
						<div className="pop-head">
							<h2>통지</h2>
						</div>
						<div className="pop-content normal">
							<p>근무할 병원 혹은 주소를 입력해주세요.</p>
						</div>
						<div className="pop-footer">
							<button
								className="agree"
								onClick={() => this.handleChange({ modalOption: "" })}
							>확인</button>
						</div>
					</Popup>
					<Popup
						classPopup="pop-wrap"
						classActive={modalNotiHospital}
						isClose={true}
						handleClose={() => this.handleChange({ modalNotiHospital: "" })}
					>
						<div className="pop-head">
							<h2>통지</h2>
						</div>
						<div className="pop-content normal">
							<p>병원은 최대 5개까지 설정이 가능합니다.</p>
						</div>
						<div className="pop-footer">
							<button
								className="agree"
								onClick={() => this.handleChange({ modalNotiHospital: "" })}
							>확인</button>
						</div>
					</Popup>
					<Popup
						classPopup="pop-wrap"
						classActive={modalConfirm}
						isClose={true}
						handleClose={() => this.handleChange({ modalConfirm: "" })}
					>
						<div className="pop-head">
							<h2>통지</h2>
						</div>
						<div className="pop-content normal">
							<p>항목을 삭제하시겠습니까?</p>
						</div>
						<div className="pop-footer btn-2">
							<button
								className="cancel"
								onClick={() => this.handleChange({ modalConfirm: "" })}
							>아니오</button>
							<button
								className="agree"
								onClick={this.handleRemove}
							>예</button>
						</div>
					</Popup>
				</div>
			</Root>
		);
	}
}

export default IndexComponent;