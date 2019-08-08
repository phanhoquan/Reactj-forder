import React, { Component } from 'react';
import Header from '../../common/header';
import Root from '../../common/root';
import pencle from '../../../public/images/pencle.png';

class AccountPay extends Component {

	render() {

		return (
			<div className="wrapper">
				<Header
					title="이체하기"
					link="/passbook/pay"
					isLink={true}
					classes=""
					classLink=""
					classHeader="header-wrap"
				/>
				<div className="content-body">
					<div className="Container">
						<div className="content-wrap">
							<div className="save-account">
								<div className="account-wrap">
									<h2>첫째 아들<img src={pencle} alt="" /></h2>
									<p><span>모두은행</span><span>9487-74501-91774</span></p>
								</div>
								<div className="account-wrap">
									<h2>둘째 아들<img src={pencle} alt="" /></h2>
									<p><span>모두은행</span><span>9487-74501-91774</span></p>
								</div>
								<div className="account-wrap">
									<h2>셋째 아들<img src={pencle} alt="" /></h2>
									<p><span>모두은행</span><span>9487-74501-91774</span></p>
								</div>
							</div>
							<div className="BottomBtn-wrap fixed custom-bottom">
								<button className="btn-bottom">
									계좌 등록
								</button>
							</div>
						</div>
					</div>
				</div>
				<Root active={3}></Root>
			</div>
		)
	}
}

export default AccountPay;