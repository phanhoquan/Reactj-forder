import React, { Component } from 'react';
import icoClose from '../../public/images/ico_close.png';

class PopupHospitalAddress extends Component {

	render() {
		return (
			<div className="wrapper">
				<header className="pop-header">
					<div className="header-wrap">
						<div className="SubPage-title title-top">
							<h2>병원 검색</h2>
						</div>
						<div
							className="close"
							onClick={() => this.props.handleClose({ isHospitalAddress: false })}
						><img src={icoClose} alt="Cloes" /></div>
					</div>
				</header>
				<div className="content-body">
					<div className="main-Container">
						<div className="content-wrap SearchContent-wrap custom-address">
							<div className="search-wrap">
								<div className="search-input">
									<input
										type="text"
										className="w-100"
										placeholder="병원 이름을 입력하세요."
									/>
								</div>
							</div>
							<div className="search-list scroll-x">
								<ul className="SearchList-wrap">
									<li className="Search">
										<div className="Lists">
											<div className="address-wrap">
												<div className="label skyblue">도로명</div>
												<h2 className="search-title">고려대학교 의료원 안암병원</h2>
												<p>1500</p>
											</div>
											<div className="address-wrap">
												<div className="label yellow">지번</div>
												<p className="adress"></p>
											</div>
										</div>
										<div className="input-wrap">
											<label className="input-title">
												상세주소
											</label>
											<div className="basic-input">
												<input
													type="text"
													placeholder="상세주소를 입력하세요."
												/>
											</div>
										</div>
									</li>
								</ul>
							</div>
							<div className="BottomBtn-wrap fixed top-30">
								<button
									className="btn-bottom"
									onClick={() => this.props.handleSaveAddress({ isHospitalAddress: false })}
								>
									작성 완료
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default PopupHospitalAddress;