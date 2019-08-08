import React from 'react';

const RadioGroup = (props) => {
	return (
		<div className="input-wrap">
			<label className="input-title">
				{props.label}
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
						<input type="radio" id="q1" name="q1" disabled checked={props.ability_move === 1 ? true : false} />
						<label htmlFor="q1"><span className="checkbox-custom" /><span className="checkbox-label">가능</span></label>
					</div>
					<div className="radio">
						<input type="radio" id="q2" name="q1" disabled checked={props.ability_move === 2 ? true : false} />
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
						<input type="radio" id="q3" name="q2" disabled checked={props.ability_eat === 1 ? true : false} />
						<label htmlFor="q3"><span className="checkbox-custom" /><span className="checkbox-label">스스로 가능</span></label>
					</div>
					<div className="radio">
						<input type="radio" id="q4" name="q2" disabled checked={props.ability_eat === 2 ? true : false} />
						<label htmlFor="q4"><span className="checkbox-custom" /><span className="checkbox-label">불가능</span></label>
					</div>
					<div className="radio">
						<input type="radio" id="q5" name="q2" disabled checked={props.ability_eat === 3 ? true : false} />
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
						<input type="radio" id="q6" name="q3" disabled checked={props.ability_suction === 1 ? true : false} />
						<label htmlFor="q6"><span className="checkbox-custom" /><span className="checkbox-label">있음</span></label>
					</div>
					<div className="radio">
						<input type="radio" id="q7" name="q3" disabled checked={props.ability_suction === 2 ? true : false} />
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
						<input type="radio" id="q8" name="q4" disabled checked={props.ability_change_posture === 1 ? true : false} />
						<label htmlFor="q8"><span className="checkbox-custom" /><span className="checkbox-label">있음</span></label>
					</div>
					<div className="radio">
						<input type="radio" id="q9" name="q4" disabled checked={props.ability_change_posture === 2 ? true : false} />
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
						<input type="radio" id="q10" name="q5" disabled checked={props.ability_diaper === 1 ? true : false} />
						<label htmlFor="q10"><span className="checkbox-custom" /><span className="checkbox-label">사용</span></label>
					</div>
					<div className="radio">
						<input type="radio" id="q11" name="q5" disabled checked={props.ability_diaper === 2 ? true : false} />
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
						<input type="radio" id="q12" name="q6" disabled checked={props.ability_cognitive === 1 ? true : false} />
						<label htmlFor="q12"><span className="checkbox-custom" /><span className="checkbox-label">상</span></label>
					</div>
					<div className="radio">
						<input type="radio" id="q13" name="q6" disabled checked={props.ability_cognitive === 2 ? true : false} />
						<label htmlFor="q13"><span className="checkbox-custom" /><span className="checkbox-label">중</span></label>
					</div>
					<div className="radio">
						<input type="radio" id="q14" name="q6" disabled checked={props.ability_cognitive === 3 ? true : false} />
						<label htmlFor="q14"><span className="checkbox-custom" /><span className="checkbox-label">하</span></label>
					</div>
					<div className="radio">
						<input type="radio" id="q15" name="q6" disabled checked={props.ability_cognitive === 4 ? true : false} />
						<label htmlFor="q15"><span className="checkbox-custom" /><span className="checkbox-label">없음</span></label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RadioGroup;