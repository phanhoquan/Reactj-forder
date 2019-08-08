import React, { Component } from 'react';
import Header from '../common/header';
import Root from '../common/root';
import { Link } from 'react-router-dom';

class ViewCard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			dataCard: {
				nameCard: "",
				numberCard: "",
			},
			flag: false
		}
	}

	renderCard = () => {
		const { flag } = this.state;

		if (flag) {
			return (
				<div className="content-wrap">
					<div className="input-wrap">
						<label className="input-title">
							등록한 카드
						</label>
						<div className="card-wrap showCard">
							<div className="myCard">
								<div className="cardInfo">
									<p>AV카드</p>
									<span>1234 1234 5678 1011</span>
								</div>
							</div>
						</div>
					</div>
					<div className="BottomBtn-wrap fixed custom-bottom">
						<button
							className="btn-bottom"
						>
							<Link to="/mypage/card/update">
								수정
							</Link>
						</button>
					</div>
				</div>
			)
		}

		return (
			<div className="content-wrap">
				<div className="input-wrap">
					<label className="input-title">
						등록한 카드
					</label>
					<div className="card-wrap noneCard">
						<div className="myCard">
							<div className="cardInfo">
								<ul>
									<li>등록한 카드가 없습니다.</li>
									<li>카드를 등록 후 사용해주세요.</li>
								</ul>
							</div>
						</div>
					</div>
					<span className="alert-massage">
						※ 결제 방법을 ‘매일 결제’를 이용하실 때 반드시 <br /> 카드 등록을 해주셔야 합니다.(일시불, 할부 결제 시에는 카드를 등록하지 않아도 됩니다.)
					</span>
				</div>
				<div className="BottomBtn-wrap fixed custom-bottom">
					<button
						className="btn-bottom"
					>
						<Link to="/mypage/card/add">
							등록하기
						</Link>
					</button>
				</div>
			</div>
		)
	}
	render() {
		return (
			<Root active={4}>
				<Header
					title="카드 등록하기 "
					link="/mypage"
					isLink={true}
					classes=""
					classLink=""
					classHeader="header-wrap"
				/>
				<div className="content-body">
					<div className="main-Container">
						{this.renderCard()}
					</div>
				</div>
			</Root>
		)
	}
}

export default ViewCard;