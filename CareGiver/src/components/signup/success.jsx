import React, { Component } from 'react';
import Header from '../common/header';
import login_success from '../../public/images/login_success.png';
import { Link } from 'react-router-dom';
class SignUpSuccess extends Component {

	render() {
		return (
			<div className="wrapper">
				<Header
					title="투표"
					link=""
					isLink={false}
					classHeader="SubHeader-wrap"
					classes=""
					classLink=""
				/>
				<div className="content-body">
					<div className="main-Container">
						<div className="content-wrap">
							<div className="login-success">
								<img src={login_success} alt="" />
								<p>회원가입이 완료 되었습니다.</p>
								<p>로그인후 CareU에서 제공하는 서비스를 만나보세요.</p>
							</div>
						</div>
					</div>
					<div className="BottomBtn-wrap fixed">
						<Link to={"/login"} className="btn-bottom">
							로그인하러가기
						</Link>
					</div>
				</div>
			</div>
		)
	}
}

export default SignUpSuccess;