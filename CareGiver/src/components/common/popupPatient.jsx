import React, { Component } from 'react';
import ico_close from '../../public/images/ico_close.png';
import ico_more from '../../public/images/ico_more.png';
import none_list from '../../public/images/none_list.png';

class PopupPatient extends Component {

	renderContent = () => {
		if (this.props.listPatient.length === 0) {
			return (
				<div className="content-wrap none-list">
					<div className="none-list">
						<img src={none_list} alt="" />
						<p>등록된 환자가 없습니다.</p>
					</div>
				</div>
			);
		}

		return (
			<div className="content-wrap">
				<ul className="patient-list">
					{this.renderItem()}
				</ul>
			</div>
		);
	}

	handleClick = (item) => {
		this.props.handleClose({
			isPatient: false,
			isPatientDetail: true,
			dataPatient: item
		});
	}

	renderItem = () => {
		let html = [];

		this.props.listPatient.map((item, index) => {
			html.push(
				<li key={index}>
					<button
						onClick={() => this.handleClick(item)}
					>
						<div className="list-left">
							<table border={0}>
								<caption>{item.name}</caption>
								<tbody><tr>
									<th>일 간병비</th>
									<td><span>{item.price}</span>원</td>
								</tr>
									<tr>
										<th>간병 시작일</th>
										<td>{item.start_date} {item.start_time}</td>
									</tr>
									<tr>
										<th>간병 종료일</th>
										<td><span>{item.end_date || '예정 종료 기간 없음'}</span></td>
									</tr>
								</tbody>
							</table>
						</div>
						<img src={ico_more} alt="" />
					</button>
				</li>
			);

			return item;
		});

		return html;
	}

	render() {
		return (
			<div className="wrapper">
				<header className="pop-header">
					<div className="header-wrap">
						<div className="SubPage-title">
							<h2>환자 찾기</h2>
						</div>
						<div
							className="close"
							onClick={() => this.props.handleClose({ isPatient: false })}
						>
							<img src={ico_close} alt="" />
						</div>
					</div>
				</header>
				<div className="content-body">
					<div className="main-Container">
						{this.renderContent()}
					</div>
				</div>
			</div>
		)
	}
}

export default PopupPatient;