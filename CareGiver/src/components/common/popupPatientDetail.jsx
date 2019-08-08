import React, { Component } from 'react';
import ico_close from '../../public/images/ico_close.png';
import Popup from './popup';
import DateTime from '../common/caregiver/dateTime';
import Name from '../common/caregiver/name';
import Text from '../common/caregiver/text';
import TextArea from '../common/caregiver/textArea';
import RadioGroup from '../common/caregiver/radioGroup';

import { observer, inject } from "mobx-react";
import { withRouter } from 'react-router';
import { formatNumber } from '../../commons/common';

@withRouter
@inject('rootStore')
@observer

class PopupPatientDetail extends Component {
	userStore;
	constructor(props) {
		super(props);
		this.rootStore = this.props.rootStore;
		this.hospitalStore = this.props.rootStore.hospitalStore;

		this.state = {
			modalSubmit: "",
			modalError: "",
			data: {
				time_start: "",
				time_end: "",
				date_start: "",
				date_end: "",
				is_off: true,
				name: "",
				gender: "",
				weight: "",
				salary: "",
				ability_move: "",
				ability_eat: "",
				ability_change_posture: "",
				ability_cognitive: "",
				ability_diaper: "",
				ability_suction: "",
				other: "",
				messageError: ""
			}
		}
	}

	handleChange = (data) => {
		this.setState({
			...data
		});
	}

	componentWillMount() {
		this._renderData(parseInt(this.props.dataPatient.id));
	}


	_renderData = async (id) => {
		await this.props.rootStore.hospitalStore.getPatientById(id).then(response => {
			this.setState({
				data: {
					id: response.data.data.id,
					time_start: response.data.data.time_start,
					time_end: response.data.data.time_end,
					date_start: response.data.data.date_start ? new Date(response.data.data.date_start) : '',
					date_end: response.data.data.date_end ? new Date(response.data.data.date_end) : '',
					is_off: true,
					ability_move: response.data.data.ability_move,
					ability_eat: response.data.data.ability_eat,
					ability_change_posture: response.data.data.ability_change_posture,
					ability_cognitive: response.data.data.ability_cognitive,
					ability_diaper: response.data.data.ability_diaper,
					ability_suction: response.data.data.ability_suction,
					name: response.data.data.patient_name,
					gender: response.data.data.patient_gender,
					weight: response.data.data.patient_weight,
					salary: formatNumber(response.data.data.amount),
					other: response.data.data.other
				}
			});
		});
	}

	handleSubmit = async (id) => {
		let user = await this.rootStore.userStore.getUser();
		let user_id = user.id;

		await this.props.rootStore.hospitalStore.getRegisPatient(user_id, id).then(response => {
			if (Object.keys(response.data).length !== 0) {
				this.setState({
					modalSubmit: "",
				});
				this.props.handleClose({ isPatientDetail: false, isPatient: false })
			} else {
				this.setState({
					messageError: response.message,
					modalError: "active",
					modalSubmit: ""
				})

			}
		});
	}

	render() {
		const { modalSubmit, modalError, messageError } = this.state;
		const {
			id,
			time_start,
			time_end,
			date_start,
			date_end,
			is_off,
			name,
			gender,
			weight,
			salary,
			ability_move,
			ability_change_posture,
			ability_cognitive,
			ability_diaper,
			ability_eat,
			ability_suction,
			other
		} = this.state.data;

		return (
			<div className="wrapper">
				<header className="pop-header">
					<div className="header-wrap">
						<div className="SubPage-title">
							<h2>환자 찾기</h2>
						</div>
						<div
							className="close"
							onClick={() => this.props.handleClose({ isPatientDetail: false, isPatient: true })}
						>
							<img src={ico_close} alt="" />
						</div>
					</div>
				</header>
				<div className="content-body">
					<div className="Sub-Container">
						<div className="SubContent-wrap disabled-input">
							<h2 className="page-alert">
								환자에 대한 정보를 입력해주세요.
							</h2>
							<DateTime
								time_start={time_start}
								time_end={time_end}
								date_start={date_start}
								date_end={date_end}
								is_off={is_off}
							/>
							<Name
								name={name}
								gender={gender}
							/>
							<Text
								label="환자의 몸무게를 입력해주세요"
								placeholder="환자의 몸무게를 입력해주세요"
								value={weight}
							/>
							<Text
								label="간병비를 입력하세요"
								placeholder="간병비를 입력하세요"
								value={salary}
							/>
							<RadioGroup
								label="환자의 증상을 입력해주세요"
								ability_move={ability_move}
								ability_change_posture={ability_change_posture}
								ability_cognitive={ability_cognitive}
								ability_diaper={ability_diaper}
								ability_eat={ability_eat}
								ability_suction={ability_suction}
							/>
							<TextArea
								label="기타 사항을 입력해주세요"
								placeholder="기타 사항을 입력해주세요"
								value={other}
							/>
							<div className="BottomBtn-wrap">
								<button
									className="btn-bottom"
									onClick={() => this.handleChange({ modalSubmit: "active" })}
								>
									확인
							</button>
								<button
									className="btn-bottom btn-style2"
									onClick={() => this.props.handleClose({ isPatientDetail: false, isPatient: true })}
								>
									간병 취소
							</button>
							</div>
						</div>
					</div>
				</div>
				<Popup
					classPopup="pop-wrap"
					classActive={modalSubmit}
					isClose={true}
					handleClose={() => this.handleChange({ modalSubmit: "" })}
				>
					<div className="pop-head">
						<h2>통지</h2>
					</div>
					<div className="pop-content normal">
						<p>
							간병을 신청하시겠습니까?
						</p>
					</div>
					<div className="pop-footer btn-2">
						<button
							className="cancel"
							onClick={() => this.handleChange({ modalSubmit: "" })}
						>아니오</button>
						<button
							className="agree"
							onClick={() => this.handleSubmit(id)}
						>예</button>
					</div>
				</Popup>
				<Popup
					classPopup="pop-wrap"
					classActive={modalError}
					isClose={true}
					handleClose={() => this.handleChange({ modalError: "" })}
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
							onClick={() => this.props.handleClose({ isPatientDetail: false, isPatient: false })}
						>확인</button>
					</div>
				</Popup>
			</div>
		)
	}
}

export default PopupPatientDetail;