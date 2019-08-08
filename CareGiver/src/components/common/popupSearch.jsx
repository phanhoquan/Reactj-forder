import React, { Component } from 'react';
import ico_close from '../../public/images/ico_close.png';
import ico_search from '../../public/images/ico_search.png';
import ico_search2 from '../../public/images/ico_search2.png';
import none_list from '../../public/images/none_list.png';
import ico_arrowBlue from '../../public/images/ico_arrowBlue.png';
import { observer, inject } from "mobx-react";
import { withRouter } from 'react-router';

@withRouter
@inject('rootStore')
@observer
class PopupSearch extends Component {
	rootStore;
	hospitals;
	constructor(props) {
		super(props);

		this.hospitals = [];
		this.rootStore = this.props.rootStore;
		this.state = {
			keySearch: '',
			hospitals: []
		}
	}

	handleChange = async (data) => {
		this.setState({
			...data
		});

		await this.getDataSearchHospital(data.keySearch);

		this.props.listHospital.map((item) => {
			this.hospitals = this.hospitals.filter((ite) => ite.id !== item.id);
			return item;
		});

		this.setState({
			hospitals: this.hospitals
		});
	}

	getDataSearchHospital = async (keySearch) => {
		await this.rootStore.hospitalStore.searchHospital(keySearch).then(response => {
			this.hospitals = response;
			return response;
		});
	}

	handleAddHospital = (item) => {
		this.props.handleChangeDataHospital(item)
	}

	renderContent = () => {
		const { keySearch, hospitals } = this.state;

		if (keySearch.length === 0) {
			return (
				<div className="search-list None">
					<div className="NoneSearch-list">
						<img src={ico_search} alt="" />
						<p>근무를 희망하는 병원명을 입력해 주세요.</p>
					</div>
				</div>
			);
		}

		if (hospitals.length !== 0) {
			let html = [];

			hospitals.map((item, key) => {
				html.push(
					<li
						key={key}
						onClick={() => this.props.handleChangeDataHospital(item)}
					>
						<h2 className="search-title">{item.name}</h2>
						<p className="adress">{item.address}</p>
					</li>
				);
				return item;
			});

			return (
				<div className="search-list">
					<ul className="SearchList-wrap">
						{html}
					</ul>
				</div>
			);
		}

		return (
			<div className="none-list">
				<img src={none_list} alt="" />
				<p>검색 항목이 없습니다.</p>
				<p className="direct-input">
					<button
						onClick={() => this.props.handleClose({ isHospitalAddress: true, isSearch: false })}
					>
						주소를 직접 입력하겠습니다
						<img src={ico_arrowBlue} alt="" />
					</button>
				</p>
			</div>
		);
	}

	render() {
		const { keySearch } = this.state;

		return (
			<div className="wrapper">
				<header className="pop-header">
					<div className="header-wrap">
						<div className="SubPage-title">
							<h2>병원 검색</h2>
						</div>
						<div
							className="close"
							onClick={() => this.props.handleClose({ isSearch: false })}
						>
							<img src={ico_close} alt="" />
						</div>
					</div>
				</header>
				<div className="content-body">
					<div className="main-Container">
						<div className="content-wrap SearchContent-wrap none-list">
							<div className="search-wrap">
								<div className="search-input">
									<input
										type="text"
										placeholder="병원 이름을 입력하세요."
										className="right-btn"
										value={keySearch}
										onChange={(e) => this.handleChange({ keySearch: e.target.value })}
									/>
									<button className="search-btn"><img src={ico_search2} alt="" /></button>
								</div>
							</div>
							{this.renderContent()}
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default PopupSearch;