import React, { Component } from 'react';
import Header from '../common/header';
import FindPassword from './findPassword';
import FindId from './findId';

class FindUser extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isTab: true,
			dataFindId: {
				phone: "",
				code: "",
				time: 0,
				isVerify: false
			},
			dataFindPassword: {
				email: "",
				phone: "",
				code: "",
				time: 0,
				isVerify: false
			}
		}
	}

	componentWillMount() {
		if (this.props.type === "2") {
			this.setState({
				isTab: false
			});
		}
	}

	handleChange = (data) => {
		this.setState({
			...data
		});
	}

	handleChangeDataFindId = (data) => {
		this.setState({
			dataFindId: {
				...this.state.dataFindId,
				...data
			}
		});
	}

	handleChangeDataFindPassword = (data) => {
		this.setState({
			dataFindPassword: {
				...this.state.dataFindPassword,
				...data
			}
		});
	}

	render() {
		const { isTab, dataFindId, dataFindPassword } = this.state;

		return (
			<div className="wrap per">
				<Header
					title="아이디/비밀번호 찾기"
					link=""
					isLink={true}
					classHeader="header-wrap"
					classes=""
					classLink=""
				/>
				<div className="content-body">
					<div className="main-Container">
						<div className="SubContent-tab" id="tabs">
							<ul>
								<li
									className={isTab ? "active" : ""}
									onClick={() => this.handleChange({ isTab: true })}
								>아이디 찾기</li>
								<li
									className={!isTab ? "active" : ""}
									onClick={() => this.handleChange({ isTab: false })}
								>비밀번호 찾기</li>
							</ul>
						</div>
						<div className="content-wrap">
							<div className="TabContent-wrap">
								<div className={`input-wrap tab-content ${isTab ? 'active' : ''}`}>
									<FindId
										dataFindId={dataFindId}
										handleChangeData={this.handleChangeDataFindId}
									/>
								</div>
								<div className={`input-wrap tab-content ${!isTab ? 'active' : ''}`}>
									<FindPassword
										dataFindPassword={dataFindPassword}
										handleChangeData={this.handleChangeDataFindPassword}
									/>
								</div>
							</div>
						</div>
					</div>
				</div >
			</div>
		);
	}
}

export default FindUser;