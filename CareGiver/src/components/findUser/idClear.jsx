import React, { Component } from 'react';
import Header from '../common/header';
import id_logo from '../../public/images/id_logo.png';
import queryString from 'query-string';
import { Redirect, Link } from 'react-router-dom';

class IdClear extends Component {
	render() {
		const parsed = queryString.parse(this.props.location.search);
		let name = '';
		let email = '';

		if (Object.keys(parsed).length === 0) {
			return (
				<Redirect to='/findpassword' />
			);
		} else {
			name = parsed.name;
			email = parsed.email;
		}

		return (
			<div className="wrapper">
				<Header
					title="투표"
					link="/findpassword"
					isLink={true}
					classes=""
					classLink=""
					classHeader="header-wrap"
				/>
				<div className="content-body">
					<div className="main-Container">
						<div className="content-wrap">
							<div className="login-success">
								<img src={id_logo} alt="" />
								<p><span>{name}</span>님의 아이디는[<span>{email}</span>]입니다.</p>
								<p>로그인후 CareU에서 제공하는 서비스를 만나보세요.</p>
							</div>
						</div>
					</div>
					<div className="BottomBtn-wrap fixed">
						<button className="btn-bottom btn-style2">
							<Link to="/login">
								로그인하러 가기
							</Link>
						</button>
						<button className="btn-bottom">
							<Link to="/findpassword?type=2">
								비밀번호 찾기
							</Link>
						</button>
					</div>
				</div>
			</div>
		)
	}
}

export default IdClear;