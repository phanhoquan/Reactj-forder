import React, { Component } from 'react';
import Header from '../common/header';
import ico_arrow from '../../public/images/ico_arrow.png';
import Root from '../common/root';

class Service extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isActiveA: false,
			isActiveB: false
		}
	}

	handleClickToggle = (data) => {
		this.setState({
			...data
		});
	}

	render() {
		const { isActiveA, isActiveB } = this.state;

		return (
			<Root active={4}>
				<Header
					title="서비스 약관"
					link="/mypage"
					isLink={true}
					classes=""
					classLink=""
					classHeader="header-wrap"
				/>
				<div className="content-body">
					<div className="main-Container">
						<div className="service-wrap">
							<div className="service-inner">
								<ul className="list">
									<li className={isActiveA ? 'active' : ''}>
										<div className="head" onClick={() => this.handleClickToggle({ isActiveA: !isActiveA, isActiveB: false })}>
											<h2>서비스 이용약관</h2>
											<img className="down" src={ico_arrow} alt="" />
										</div>
										<div className="cont">
											<p>케어유 이용약관(Terms of Use)</p>
											<p>시행일 : 2019년  5월  23일</p>
											<p>케어유 서비스는 이용자 (이하 ‘이용자’)가 이 이용약관에 &lt;동의&gt; 시 아래 내용 을 법적으로 동의한다는 효력이 발생되며, 이용약관의 확인을 의미합니다. 이용약관에서 설명의 미비나 해석에 다른 견해가 발생할 수 있는 용어는 대한민국(Republic of Korea)의 관련 법령의 정의와 설명을 따르며 이 이용약관의 법적 효력 역시 대한민국의 법령과 그 관할(Jurisdiction)을 따릅니다.</p>
											<p>▶ 케어유 내용</p>
											<p>①	이용자가 위 ‘애플리케이션’에 사용한 사진의 선호도를 회사가 무기명으로 집계하여 사진 속 인물이나 대상의 인기 순위를 정하는 차트와 연동, 일반 대중 에게 공개하는 서비스(이하 ‘랭킹 서비스’)</p>
											<p>②	이용자가 위 '애플리케이션'에 게시한 부호, 문자, 음향, 음성, 화상, 동영상 등의 정보 형태의 글, 사진, 동영상 및 각종 파일과 링크(이하 '게시물')를 업로드&gt; 할 수 있는 서비스(이하 '게시물 서비스')</p>
											<p>③	포인트는 스타 포인트(이하 '무료 포인트')과 팬 포인트(이하 '유료 포인트')로 나뉘며, 서비스 정책에 따라 포인트가 구분</p>
										</div>
									</li>
									<li className={isActiveB ? 'active' : ''}>
										<div className="head" onClick={() => this.handleClickToggle({ isActiveA: false, isActiveB: !isActiveB })}>
											<h2>개인정보 이용약관</h2>
											<img className="down" src={ico_arrow} alt="" />
										</div>
										<div className="cont">
											<p>케어유 이용약관(Terms of Use)</p>
											<p>시행일 : 2019년  5월  23일</p>
											<p>케어유 서비스는 이용자 (이하 ‘이용자’)가 이 이용약관에 &lt;동의&gt; 시 아래 내용 을 법적으로 동의한다는 효력이 발생되며, 이용약관의 확인을 의미합니다. 이용약관에서 설명의 미비나 해석에 다른 견해가 발생할 수 있는 용어는 대한민국(Republic of Korea)의 관련 법령의 정의와 설명을 따르며 이 이용약관의 법적 효력 역시 대한민국의 법령과 그 관할(Jurisdiction)을 따릅니다.</p>
											<p>▶ 케어유 내용</p>
											<p>①	이용자가 위 ‘애플리케이션’에 사용한 사진의 선호도를 회사가 무기명으로 집계하여 사진 속 인물이나 대상의 인기 순위를 정하는 차트와 연동, 일반 대중에게 공개하는 서비스(이하 ‘랭킹 서비스’)</p>
											<p>②	이용자가 위 '애플리케이션'에 게시한 부호, 문자, 음향, 음성, 화상, 동영상 등의 정보 형태의 글, 사진, 동영상 및 각종 파일과 링크(이하 '게시물')를 업로드 할 수 있는 서비스(이하 '게시물 서비스')</p>
											<p>③	포인트는 스타 포인트(이하 '무료 포인트')과 팬 포인트(이하 '유료 포인트')로 나뉘며, 서비스 정책에 따라 포인트가 구분</p>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</Root>
		)
	}
}

export default Service;