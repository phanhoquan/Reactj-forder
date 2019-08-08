import React, { Component } from 'react';
import Header from '../common/header';
import Root from '../common/root';
import ico_more from '../../public/images/ico_more.png';
import woman from '../../public/images/woman.png';

class List extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isTab: true
		}
	}

	handleChange = (data) => {
		this.setState({
			...data
		});
	}

	render() {
		const { isTab } = this.state;

		return (
			<Root>
				<Header
					title="투표"
					link=""
					isLink={true}
					classHeader="header-wrap"
					classes=""
					classLink=""
				/>

				<div className="content-body">
					<div className="Container">
						<div className="content-tab" id="tabs">
							<ul>
								<li
									className={isTab ? "active" : ""}
									onClick={() => this.handleChange({ isTab: true })}
								>진행중 간병인 내역</li>
								<li
									className={!isTab ? "active" : ""}
									onClick={() => this.handleChange({ isTab: false })}
								>완료된 간병인 내역</li>
							</ul>
						</div>
						<div className="content-wrap">
							<div className="TabContent-wrap">
								<div className={`tab-content ${isTab ? 'active' : ''}`}>
									<div className="caregiver-wrap">
										<div className="caregiver">
											<div className="caregiver-name">
												<h2>담당 간병인</h2>
												<span className="name">김케어</span>
												<img src={woman} alt="" />
											</div>
											<div className="info-wrap">
												<div className="info">
													<h2>간병 시작일</h2>
													<p><span className="date">2019-05-30</span> <span className="time">11:00</span></p>
												</div>
												<div className="info">
													<h2>간병 종료일</h2>
													<p><span className="date">2019-06-30</span> <span className="time">14:30</span></p>
												</div>
											</div>
											<div className="more">
												<img src={ico_more} alt="" />
											</div>
										</div>
										<div className="caregiver">
											<div className="caregiver-name">
												<h2>담당 간병인</h2>
												<span className="name">김케어</span>
												<img src={woman} alt="" />
											</div>
											<div className="info-wrap">
												<div className="info">
													<h2>간병 시작일</h2>
													<p><span className="date">2019-05-30</span> <span className="time">11:00</span></p>
												</div>
												<div className="info">
													<h2>간병 종료일</h2>
													<p><span className="date">2019-06-30</span> <span className="time">14:30</span></p>
												</div>
											</div>
											<div className="more">
												<img src={ico_more} alt="" />
											</div>
										</div>
										<div className="caregiver">
											<div className="caregiver-name">
												<h2>담당 간병인</h2>
												<span className="name">김케어</span>
												<img src={woman} alt="" />
											</div>
											<div className="info-wrap">
												<div className="info">
													<h2>간병 시작일</h2>
													<p><span className="date">2019-05-30</span> <span className="time">11:00</span></p>
												</div>
												<div className="info">
													<h2>간병 종료일</h2>
													<p><span className="date">2019-06-30</span> <span className="time">14:30</span></p>
												</div>
											</div>
											<div className="more">
												<img src={ico_more} alt="" />
											</div>
										</div>
									</div>
								</div>
								<div className={`tab-content ${!isTab ? 'active' : ''}`}>
									<div className="caregiver-wrap">
										<div className="caregiver">
											<div className="caregiver-name">
												<h2>담당 간병인</h2>
												<span className="name">김케어</span>
												<img src={woman} alt="" />
											</div>
											<div className="info-wrap">
												<div className="info">
													<h2>간병 시작일</h2>
													<p><span className="date">2019-05-30</span> <span className="time">11:00</span></p>
												</div>
												<div className="info">
													<h2>간병 종료일</h2>
													<p><span className="date">2019-06-30</span> <span className="time">14:30</span></p>
												</div>
											</div>
											<div className="more">
												<img src={ico_more} alt="" />
											</div>
										</div>
										<div className="caregiver">
											<div className="caregiver-name">
												<h2>담당 간병인</h2>
												<span className="name">김케어</span>
												<img src={woman} alt="" />
											</div>
											<div className="info-wrap">
												<div className="info">
													<h2>간병 시작일</h2>
													<p><span className="date">2019-05-30</span> <span className="time">11:00</span></p>
												</div>
												<div className="info">
													<h2>간병 종료일</h2>
													<p><span className="date">2019-06-30</span> <span className="time">14:30</span></p>
												</div>
											</div>
											<div className="more">
												<img src={ico_more} alt="" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Root>
		);
	}
}

export default List;