import React, { Component } from 'react';
import Header from '../common/header';
import ico_select from '../../public/images/ico_select.png';
import TimePicker from '../common/timePicker';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const formatDate = 'yyyy-MM-dd';

class Find extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isTimeStart: false,
			isTimeEnd: false,
			time_start: "",
			time_end: "",
			startDate: "",
			endDate: ""
		}
	}

	handleChange = (data) => {
		this.setState({
			...data
		})
	}

	handleSubmitTimeStart = (value) => {
		this.setState({
			isTimeStart: false,
			time_start: value
		});
	}

	handleSubmitTimeEnd = (value) => {
		this.setState({
			isTimeEnd: false,
			time_end: value
		});
	}

	render() {
		const { isTimeStart, isTimeEnd, time_start, time_end, startDate, endDate } = this.state;

		return (
			<div className="wrapper">
				<Header
					title="투표"
					link=""
					isLink={true}
					classHeader="header-wrap"
					classes=""
					classLink=""
				/>
				<div className="content-body">
					<div className="Sub-Container">
						<div className="SubContent-wrap disabled-input">
							<TimePicker
								time={time_start}
								isShow={isTimeStart}
								handleSubmitTime={this.handleSubmitTimeStart}
							/>
							<TimePicker
								time={time_end}
								isShow={isTimeEnd}
								handleSubmitTime={this.handleSubmitTimeEnd}
							/>
							<h2 className="page-alert">
								환자에 대한 정보를 입력해주세요.
							</h2>
							<div className="input-wrap input-space">
								<label className="input-title">
									간병 기간을 선택해주세요
              					</label>
								<span className="necessary">[필수]</span>
								<div className="date-wrap">
									<div className="date-title">
										<h3>시작</h3>
									</div>
									<div className="basic-input date-iuput">
										<DatePicker
											selected={startDate}
											dateFormat={formatDate}
											selectsStart
											startDate={startDate}
											endDate={endDate}
											onChange={(e) => this.handleChange({ startDate: e })}
											placeholderText="시작 날짜 선택"
										/>
									</div>
									<div
										className="SelectBox-wrap small"
										onClick={() => this.handleChange({ isTimeStart: true })}
									>
										<div className="select-head">
											{
												time_start.length === 0 ?
													<h2>시간 선택</h2> : <h2 className="text">{time_start}</h2>
											}
											<img src={ico_select} alt="" />
										</div>
									</div>
								</div>
								<div className="date-wrap">
									<div className="date-title">
										<h3>종료</h3>
									</div>
									<div className="basic-input date-iuput">
										<DatePicker
											selected={endDate}
											dateFormat={formatDate}
											selectsStart
											startDate={startDate}
											endDate={endDate}
											onChange={(e) => this.handleChange({ endDate: e })}
											minDate={startDate || new Date()}
											placeholderText="종료 날짜 선택"
										/>
									</div>
									<div
										className="SelectBox-wrap small"
										onClick={() => this.handleChange({ isTimeEnd: true })}
									>
										<div className="select-head">
											{
												time_end.length === 0 ?
													<h2>시간 선택</h2> : <h2 className="text">{time_end}</h2>
											}
											<img src={ico_select} alt="" />
										</div>
									</div>
								</div>
								<div className="checkbox-wrap">
									<input type="checkbox" id="end" name="end" className="AcceptAllChecked" disabled />
									<label className="agree-label" htmlFor="end"><span className="checkbox-custom" /><span className="checkbox-label">예정 종료기간 없음</span></label>
								</div>
							</div>
							<div className="input-wrap">
								<label className="input-title">
									환자 이름 / 성별
              					</label>
								<span className="necessary">[필수]</span>
								<div className="basic-input gender-input">
									<input type="text" placeholder="환자이름을 입력하세요" disabled />
									<button className="btn-gender active">남자</button>
									<button className="btn-gender">여자</button>
								</div>
							</div>
							<div className="input-wrap">
								<label className="input-title">
									환자의 몸무게를 입력해주세요
              					</label>
								<span className="necessary">[필수]</span>
								<div className="basic-input">
									<input type="text" placeholder="몸무게를 입력하세요 disabled" />
								</div>
							</div>
							<div className="input-wrap">
								<label className="input-title">
									간병비를 입력해주세요
								</label>
								<span className="necessary">[필수]</span>
								<div className="basic-input">
									<input type="text" placeholder="간병비를 입력하세요 disabled" />
								</div>
							</div>
							<div className="input-wrap">
								<label className="input-title">
									환자의 증상을 입력해주세요
              					</label>
								<span className="necessary">[필수]</span>
								<div className="SymptomCheck-list">
									<div className="radio-wrap">
										<div className="input-wrap">
											<label className="input-title">
												거동 가능 여부
                    						</label>
										</div>
										<div className="radio">
											<input type="radio" id="q1" name="q1" disabled />
											<label htmlFor="q1"><span className="checkbox-custom" /><span className="checkbox-label">가능</span></label>
										</div>
										<div className="radio">
											<input type="radio" id="q2" name="q1" disabled />
											<label htmlFor="q2"><span className="checkbox-custom" /><span className="checkbox-label">불가능</span></label>
										</div>
									</div>
									<div className="radio-wrap">
										<div className="input-wrap">
											<label className="input-title">
												식사 가능 여부
                    						</label>
										</div>
										<div className="radio">
											<input type="radio" id="q3" name="q2" disabled />
											<label htmlFor="q3"><span className="checkbox-custom" /><span className="checkbox-label">스스로 가능</span></label>
										</div>
										<div className="radio">
											<input type="radio" id="q4" name="q2" disabled />
											<label htmlFor="q4"><span className="checkbox-custom" /><span className="checkbox-label">불가능</span></label>
										</div>
										<div className="radio">
											<input type="radio" id="q5" name="q2" disabled />
											<label htmlFor="q5"><span className="checkbox-custom" /><span className="checkbox-label">피딩</span></label>
										</div>
									</div>
									<div className="radio-wrap">
										<div className="input-wrap">
											<label className="input-title">
												석션 여부
                    						</label>
										</div>
										<div className="radio">
											<input type="radio" id="q6" name="q3" disabled />
											<label htmlFor="q6"><span className="checkbox-custom" /><span className="checkbox-label">있음</span></label>
										</div>
										<div className="radio">
											<input type="radio" id="q7" name="q3" disabled />
											<label htmlFor="q7"><span className="checkbox-custom" /><span className="checkbox-label">없음</span></label>
										</div>
									</div>
									<div className="radio-wrap">
										<div className="input-wrap">
											<label className="input-title">
												체위 변경
                    						</label>
										</div>
										<div className="radio">
											<input type="radio" id="q8" name="q4" disabled />
											<label htmlFor="q8"><span className="checkbox-custom" /><span className="checkbox-label">있음</span></label>
										</div>
										<div className="radio">
											<input type="radio" id="q9" name="q4" disabled />
											<label htmlFor="q9"><span className="checkbox-custom" /><span className="checkbox-label">없음</span></label>
										</div>
									</div>
									<div className="radio-wrap">
										<div className="input-wrap">
											<label className="input-title">
												기저귀
                    						</label>
										</div>
										<div className="radio">
											<input type="radio" id="q10" name="q5" disabled />
											<label htmlFor="q10"><span className="checkbox-custom" /><span className="checkbox-label">사용</span></label>
										</div>
										<div className="radio">
											<input type="radio" id="q11" name="q5" disabled />
											<label htmlFor="q11"><span className="checkbox-custom" /><span className="checkbox-label">사용 안함</span></label>
										</div>
									</div>
									<div className="radio-wrap">
										<div className="input-wrap">
											<label className="input-title">
												치매 정도
                    						</label>
										</div>
										<div className="radio">
											<input type="radio" id="q12" name="q6" disabled />
											<label htmlFor="q12"><span className="checkbox-custom" /><span className="checkbox-label">상</span></label>
										</div>
										<div className="radio">
											<input type="radio" id="q13" name="q6" disabled />
											<label htmlFor="q13"><span className="checkbox-custom" /><span className="checkbox-label">중</span></label>
										</div>
										<div className="radio">
											<input type="radio" id="q14" name="q6" disabled />
											<label htmlFor="q14"><span className="checkbox-custom" /><span className="checkbox-label">하</span></label>
										</div>
										<div className="radio">
											<input type="radio" id="q15" name="q6" disabled />
											<label htmlFor="q15"><span className="checkbox-custom" /><span className="checkbox-label">없음</span></label>
										</div>
									</div>
								</div>
							</div>
							<div className="input-wrap">
								<label className="input-title">
									기타 사항을 입력해주세요
              				</label>
								<div className="basic-input">
									<textarea placeholder="기타 사항을 입력해주세요" disabled defaultValue={""} />
								</div>
							</div>
							<div className="BottomBtn-wrap">
								<button className="btn-bottom">
									확인
								</button>
								<button className="btn-bottom btn-style2">
									간병 취소
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Find;