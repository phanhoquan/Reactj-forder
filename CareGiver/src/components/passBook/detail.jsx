import React, { Component } from 'react';
import Header from '../common/header';
import Root from '../common/root';

class PassbookDetail extends Component {

	render() {

		return (
			<div className="wrapper">
				<Header
					title="통장 내역"
					link="/passbook"
					isLink={true}
					classes=""
					classLink=""
					classHeader="header-wrap"
				/>
				<div className="content-body">
					<div className="Container">
						<div className="content-wrap out-case">
							<div className="pb-detail in-case">
								<h2>입금내역</h2>
								<div className="white-box">
									<table border={0}>
										<tbody><tr>
											<th>내 통장 표시</th>
											<td>참빛사랑 병원 단기</td>
										</tr>
											<tr>
												<th>입금 내역</th>
												<td className="red-color">+<span>80,000</span></td>
											</tr>
											<tr>
												<th>보험</th>
												<td>-<span>3,333</span></td>
											</tr>
											<tr>
												<th>유니폼</th>
												<td>-<span>20,000</span></td>
											</tr>
											<tr>
												<th>카드 재발급</th>
												<td>-<span>3,000</span></td>
											</tr>
											<tr>
												<th>세금</th>
												<td>(병원지원 -2,640)<span>0</span></td>
											</tr>
										</tbody></table>
									<table border={0}>
										<tbody><tr>
											<th>입금액</th>
											<td className="red-color"><span>53,667</span></td>
										</tr>
											<tr>
												<th>거래 후 잔액</th>
												<td><span>1,309,000</span></td>
											</tr>
										</tbody></table>
								</div>
							</div>
							<div className="pb-detail out-case">
								<h2>출금내역</h2>
								<div className="white-box">
									<table border={0}>
										<tbody><tr>
											<th>출금은행</th>
											<td>국민은행</td>
										</tr>
											<tr>
												<th>출금 계좌번호</th>
												<td><span>1002-611-123456</span></td>
											</tr>
											<tr>
												<th>받는분</th>
												<td>홍길순</td>
											</tr>
											<tr>
												<th>내 통장 표시</th>
												<td>
													<input type="text" placeholder="이체" />
												</td>
											</tr>
											<tr>
												<th rowSpan={2}>거래시간</th>
												<td><span>2018</span>-<span>06</span>-<span>24</span> <span>18</span>:<span>57</span>:<span>34</span></td>
											</tr>
											<tr>
												<td>출금</td>
											</tr>
											<tr>
												<th>출금 요청 금액</th>
												<td className="red-color">-<span>300,000</span></td>
											</tr>
											<tr>
												<th>수수료</th>
												<td className="red-color">-<span>1,200</span></td>
											</tr>
										</tbody></table>
									<table border={0}>
										<tbody><tr>
											<th>출금액</th>
											<td className="red-color"><span>53,667</span></td>
										</tr>
											<tr>
												<th>거래 후 잔액</th>
												<td><span>1,309,000</span></td>
											</tr>
										</tbody></table>
								</div>
							</div>
							<div className="BottomBtn-wrap fixed custom-bottom">
								<button className="btn-bottom">
									확인
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

export default PassbookDetail;