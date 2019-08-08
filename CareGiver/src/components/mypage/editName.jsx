import React, { Component } from 'react';
import Header from '../common/header';
import Root from '../common/root';
import { isHANGUL } from '../../commons/common';
import { inject, observer } from 'mobx-react';
import _ from "lodash";
import { Redirect } from 'react-router-dom';
import { toJS } from 'mobx';

@inject('rootStore')
@observer
class EditName extends Component {
	constructor(props) {
		super(props);

		this.rootStore = this.props.rootStore;
		this.state = {
			id: '',
			full_name: "",
			error: "",
			isOpen: true,
			redirect: false
		}
	}

	componentWillMount() {
		// this._renderdataUser();
	}

	_renderdataUser = async () => {
		let user = await this.rootStore.userStore.getUser();
		let user_id = user.id;
		let dataResult = await this.props.rootStore.userStore.viewUser(user_id);
		let data = dataResult.data;
		this.setState({
			id: data.id,
			full_name: data.full_name
		});
	}

	handleChange = (data) => {
		this.setState({
			...data
		})
	}

	validSubmit = () => {
		const full_name = this.fullName.value;
		let isValid = true;

		if (full_name.trim().length === 0) {
			this.setState({
				error: "이름을 입력하세요."
			});
			isValid = false;
		}

		if (full_name.length > 16) {
			this.setState({
				error: "한글, 영문, 숫자 조합으로 16자리 이하로만 입력해주세요."
			});
			isValid = false;
		}

		if (isHANGUL(full_name)) {
			this.setState({
				error: "한국어로만 입장하십시오."
			});
			isValid = false;
		}

		return isValid;
	}

	handleSubmit = async (id) => {
		const full_name = this.fullName.value;
		let data = {
			full_name
		}

		if (!this.validSubmit()) {
			return;
		}

		this.props.rootStore.userStore.updateUser(id, data).then(response => {
			if (_.size(response) !== 0) {
				this.setState({
					redirect: true
				});
			}
		});
	}

	render() {
		const { error, redirect } = this.state;

		let user = toJS(this.rootStore.userStore.user);

		if (redirect) {
			return <Redirect to='/mypage' />
		}

		return (
			<Root active={4}>
				<Header
					title="이름 수정하기"
					link="/mypage"
					isLink={true}
					classes=""
					classLink=""
					classHeader="header-wrap"
				/>
				<div className="content-body">
					<div className="main-Container">
						<div className="content-wrap">
							<div className="input-wrap">
								<label className="input-title">
									이름
             				 	</label>
								<div className="basic-input">
									<input
										type="text"
										placeholder="이름을 입력하세요"
										defaultValue={user ? user.full_name : ''}
										ref={input => this.fullName = input}
										onChange={() => this.handleChange({ error: '' })}
									/>
								</div>
								<div className="mt-2">
									<span className="text-danger" role="alert">
										<strong>{error}</strong>
									</span>
								</div>
								<span className="alert-massage">※ 간병인에게 보여질 이름입니다. <br /> 한글, 영문, 숫자 조합으로 16자리 이하 입력 가능합니다.</span>
							</div>
							<div className="BottomBtn-wrap fixed custom-bottom">
								<button
									className="btn-bottom"
									onClick={() => this.handleSubmit(user.id)}
								>
									수정하기
              					</button>
							</div>
						</div>
					</div>
				</div>
			</Root>
		)
	}
}

export default EditName;