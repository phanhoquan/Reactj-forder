const listAddress = [
	{
		_id: "5b21ca3eeb7f6fbccd471801",
		city: { _id: "5b21ca3eeb7f6fbccd47181a", name: "서울 전체" },
		district: "강남구",
		active: false
	},
	{
		_id: "5b21ca3eeb7f6fbccd471802",
		city: { _id: "5b21ca3eeb7f6fbccd47181a", name: "서울 전체" },
		district: "강동구"
	},
	{
		_id: "5b21ca3eeb7f6fbccd471803",
		city: { _id: "5b21ca3eeb7f6fbccd47181a", name: "서울 전체" },
		district: "강북구"
	},
	{
		_id: "5b21ca3eeb7f6fbccd471804",
		city: { _id: "5b21ca3eeb7f6fbccd47181a", name: "서울 전체" },
		district: "강서구"
	},
	{
		_id: "5b21ca3eeb7f6fbccd471805",
		city: { _id: "5b21ca3eeb7f6fbccd47181a", name: "서울 전체" },
		district: "관악구"
	},
	{
		_id: "5b21ca3eeb7f6fbccd471806",
		city: { _id: "5b21ca3eeb7f6fbccd47181a", name: "서울 전체" },
		district: "광진구"
	},
	{
		_id: "5b21ca3eeb7f6fbccd471807",
		city: { _id: "5b21ca3eeb7f6fbccd47181a", name: "서울 전체" },
		district: "구로구"
	},
	{
		_id: "5b21ca3eeb7f6fbccd471808",
		city: { _id: "5b21ca3eeb7f6fbccd47181a", name: "서울 전체" },
		district: "금천구"
	},
	{
		_id: "5b21ca3eeb7f6fbccd471809",
		city: { _id: "5b21ca3eeb7f6fbccd47181a", name: "서울 전체" },
		district: "노원구"
	},
	{
		_id: "5b21ca3eeb7f6fbccd471810",
		city: { _id: "5b21ca3eeb7f6fbccd47181a", name: "서울 전체" },
		district: "도봉구"
	},
	{
		_id: "5b21ca3eeb7f6fbccd471811",
		city: { _id: "5b21ca3eeb7f6fbccd47181a", name: "서울 전체" },
		district: "동대문구"
	},
	{
		_id: "5b21ca3eeb7f6fbccd471812",
		city: { _id: "5b21ca3eeb7f6fbccd47181a", name: "서울 전체" },
		district: "동작구"
	},
	{
		_id: "5b21ca3eeb7f6fbccd471813",
		city: { _id: "5b21ca3eeb7f6fbccd47181a", name: "서울 전체" },
		district: "마포구"
	},
	{
		_id: "5b21ca3eeb7f6fbccd471814",
		city: { _id: "5b21ca3eeb7f6fbccd47181a", name: "서울 전체" },
		district: "서대문구"
	},
	{
		_id: "5b21ca3eeb7f6fbccd471815",
		city: { _id: "5b21ca3eeb7f6fbccd47181a", name: "서울 전체" },
		district: "서초구"
	},
	{
		_id: "5b21ca3eeb7f6fbccd471816",
		city: { _id: "5b21ca3eeb7f6fbccd47181a", name: "서울 전체" },
		district: "성동구"
	},
	{
		_id: "5b21ca3eeb7f6fbccd471817",
		city: { _id: "5b21ca3eeb7f6fbccd47181a", name: "서울 전체" },
		district: "성북구"
	},
	{
		_id: "5b21ca3eeb7f6fbccd471818",
		city: { _id: "5b21ca3eeb7f6fbccd47181a", name: "서울 전체" },
		district: "송파구"
	},
	{
		_id: "5b21ca3eeb7f6fbccd471819",
		city: { _id: "5b21ca3eeb7f6fbccd47181a", name: "서울 전체" },
		district: "양천구"
	},
	{
		_id: "5b21ca3eeb7f6fbccd471820",
		city: { _id: "5b21ca3eeb7f6fbccd47181a", name: "서울 전체" },
		district: "영등포구"
	},
	{
		_id: "5b21ca3eeb7f6fbccd471821",
		city: { _id: "5b21ca3eeb7f6fbccd47181a", name: "서울 전체" },
		district: "용산구"
	},
	{
		_id: "5b21ca3eeb7f6fbccd471822",
		city: { _id: "5b21ca3eeb7f6fbccd47181a", name: "서울 전체" },
		district: "은평구"
	},
	{
		_id: "5b21ca3eeb7f6fbccd471823",
		city: { _id: "5b21ca3eeb7f6fbccd47181a", name: "서울 전체" },
		district: "종로구"
	},
	{
		_id: "5b21ca3eeb7f6fbccd471824",
		city: { _id: "5b21ca3eeb7f6fbccd47181a", name: "서울 전체" },
		district: "중구"
	},
	{
		_id: "5b21ca3eeb7f6fbccd471825",
		city: { _id: "5b21ca3eeb7f6fbccd47181a", name: "서울 전체" },
		district: "중랑구"
	},
	{
		_id: "5b21ca3eeb7f6fbccd471826",
		city: { _id: "5b21ca3eeb7f6fbccd47181b", name: "경기 전체" },
		district: "강남구"
	},
	{
		_id: "5b21ca3eeb7f6fbccd471827",
		city: { _id: "5b21ca3eeb7f6fbccd47181b", name: "경기 전체" },
		district: "강동구"
	},
	{
		_id: "5b21ca3eeb7f6fbccd471828",
		city: { _id: "5b21ca3eeb7f6fbccd47181b", name: "경기 전체" },
		district: "강북구"
	},
	{
		_id: "5b21ca3eeb7f6fbccd471829",
		city: { _id: "5b21ca3eeb7f6fbccd47181b", name: "경기 전체" },
		district: "강서구"
	},
	{
		_id: "5b21ca3eeb7f6fbccd471830",
		city: { _id: "5b21ca3eeb7f6fbccd47181b", name: "경기 전체" },
		district: "관악구"
	},
	{
		_id: "5b21ca3eeb7f6fbccd471831",
		city: { _id: "5b21ca3eeb7f6fbccd47181b", name: "경기 전체" },
		district: "광진구"
	},
	{
		_id: "5b21ca3eeb7f6fbccd471832",
		city: { _id: "5b21ca3eeb7f6fbccd47181b", name: "경기 전체" },
		district: "구로구"
	},
	{
		_id: "5b21ca3eeb7f6fbccd471833",
		city: { _id: "5b21ca3eeb7f6fbccd47181b", name: "경기 전체" },
		district: "금천구"
	},
	{
		_id: "5b21ca3eeb7f6fbccd471834",
		city: { _id: "5b21ca3eeb7f6fbccd47181b", name: "경기 전체" },
		district: "노원구"
	},
	{
		_id: "5b21ca3eeb7f6fbccd471835",
		city: { _id: "5b21ca3eeb7f6fbccd47181b", name: "경기 전체" },
		district: "도봉구"
	},
	{
		_id: "5b21ca3eeb7f6fbccd471836",
		city: { _id: "5b21ca3eeb7f6fbccd47181b", name: "경기 전체" },
		district: "동대문구"
	},
	{
		_id: "5b21ca3eeb7f6fbccd471837",
		city: { _id: "5b21ca3eeb7f6fbccd47181b", name: "경기 전체" },
		district: "동작구"
	},
	{
		_id: "5b21ca3eeb7f6fbccd471838",
		city: { _id: "5b21ca3eeb7f6fbccd47181b", name: "경기 전체" },
		district: "마포구"
	},
	{
		_id: "5b21ca3eeb7f6fbccd471839",
		city: { _id: "5b21ca3eeb7f6fbccd47181b", name: "경기 전체" },
		district: "서대문구"
	},
	{
		_id: "5b21ca3eeb7f6fbccd471840",
		city: { _id: "5b21ca3eeb7f6fbccd47181b", name: "경기 전체" },
		district: "서초구"
	},
	{
		_id: "5b21ca3eeb7f6fbccd471841",
		city: { _id: "5b21ca3eeb7f6fbccd47181b", name: "경기 전체" },
		district: "성동구"
	},
	{
		_id: "5b21ca3eeb7f6fbccd471842",
		city: { _id: "5b21ca3eeb7f6fbccd47181b", name: "경기 전체" },
		district: "성북구"
	},
	{
		_id: "5b21ca3eeb7f6fbccd471843",
		city: { _id: "5b21ca3eeb7f6fbccd47181b", name: "경기 전체" },
		district: "송파구"
	},
	{
		_id: "5b21ca3eeb7f6fbccd471844",
		city: { _id: "5b21ca3eeb7f6fbccd47181b", name: "경기 전체" },
		district: "양천구"
	},
	{
		_id: "5b21ca3eeb7f6fbccd471845",
		city: { _id: "5b21ca3eeb7f6fbccd47181b", name: "경기 전체" },
		district: "영등포구"
	},
	{
		_id: "5b21ca3eeb7f6fbccd471846",
		city: { _id: "5b21ca3eeb7f6fbccd47181b", name: "경기 전체" },
		district: "용산구"
	},
	{
		_id: "5b21ca3eeb7f6fbccd471847",
		city: { _id: "5b21ca3eeb7f6fbccd47181b", name: "경기 전체" },
		district: "은평구"
	},
	{
		_id: "5b21ca3eeb7f6fbccd471848",
		city: { _id: "5b21ca3eeb7f6fbccd47181b", name: "경기 전체" },
		district: "종로구"
	},
	{
		_id: "5b21ca3eeb7f6fbccd471849",
		city: { _id: "5b21ca3eeb7f6fbccd47181b", name: "경기 전체" },
		district: "중구"
	},
	{
		_id: "5b21ca3eeb7f6fbccd471850",
		city: { _id: "5b21ca3eeb7f6fbccd47181b", name: "경기 전체" },
		district: "중랑구"
	},
];

export const citys = [
	{ _id: "5b21ca3eeb7f6fbccd47181a", name: "서울 전체", tabName: "서울특별시", active: false },
	{ _id: "5b21ca3eeb7f6fbccd47181b", name: "경기 전체", tabName: "경기도" },
];

export function getCitys() {
	return citys.filter(c => c);
}

export function getListAddress() {
	return listAddress;
}

export function isEmail(email) {
	var re = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/;
	return re.test(String(email).toLowerCase());
}
export function isNumberKey(e) {
	var charCode = (e.which) ? e.which : e.keyCode
	if (charCode > 31 && (charCode < 48 || charCode > 57)) {
		e.preventDefault();
		return false;
	}
	return true;
}
export function checkPassword(str) {
	let reg = /[a-zA-Z]/;
	for (var i = 0; i < str.length; i++) {
		if (reg.test(str.charAt(i))) {
			return true;
		}
	}
	return false;
}

export function checkLengthPassword(str) {
	if (str.trim().length <= 20) {
		if (str.trim().length >= 6) {
			return true;
		}
	}

	return false;
}

export function isCharacterValid(str) {
	let reg = /^[a-zA-Z0-9!@#$%^&*()]+$/i;
	for (var i = 0; i < str.length; i++) {
		if (!reg.test(str.charAt(i))) {
			return true;
		}
	}
	return false;
}

export function specialCharacters(e) {
	var keyCode = e.which;
	if (!((keyCode >= 48 && keyCode <= 57)
		|| (keyCode >= 65 && keyCode <= 90)
		|| (keyCode >= 97 && keyCode <= 122))
		&& keyCode !== 8 && keyCode !== 32) {
		e.preventDefault();
	}
}

export function isHANGUL(str) {
	let reg = RegExp("[\u1100-\u11FF|\u3130-\u318F|\uA960-\uA97F|\uAC00-\uD7AF|\uD7B0-\uD7FF]");
	for (var i = 0; i < str.length; i++) {
		if (!reg.test(str.charAt(i))) {
			return true;
		}
	}
	return false;
}

const listTime = [
	{ id: 1, name: '1개월' },
	{ id: 2, name: '3개월' },
	{ id: 3, name: '6개월' },
	{ id: 4, name: '직접입력' },
];

export function getListTime() {
	return listTime;
}

const listBank = [
	{ id: 1, name: '카카오뱅크', image: '/images/bank00.png' },
	{ id: 2, name: '국민은행', image: '/images/bank01.png' },
	{ id: 3, name: '농협은행', image: '/images/bank02.png' },
	{ id: 4, name: '신한은행', image: '/images/bank03.png' },

	{ id: 5, name: '기업은행', image: '/images/bank04.png' },
	{ id: 6, name: '산업은행', image: '/images/bank05.png' },
	{ id: 7, name: '우리은행', image: '/images/bank06.png' },
	{ id: 8, name: '수협은행', image: '/images/bank07.png' },
	{ id: 9, name: '하나은행', image: '/images/bank08.png' },
	{ id: 10, name: '제일은행', image: '/images/bank09.png' },
	{ id: 11, name: '부산은행', image: '/images/bank10.png' },
	{ id: 12, name: '광주은행', image: '/images/bank11.png' },
	{ id: 13, name: '대구은행', image: '/images/bank12.png' },
	{ id: 14, name: '경남은행', image: '/images/bank13.png' },
	{ id: 15, name: '전북은행', image: '/images/bank14.png' },
	{ id: 16, name: '제주은행', image: '/images/bank15.png' },
	{ id: 17, name: '우체국은행', image: '/images/bank16.png' },
	{ id: 18, name: '신협은행', image: '/images/bank17.png' },
	{ id: 19, name: '중국공상', image: '/images/bank18.png' },
	{ id: 20, name: '중국건설', image: '/images/bank19.png' },
	{ id: 21, name: '중국농업', image: '/images/bank20.png' },
	{ id: 22, name: '중국은행', image: '/images/bank21.png' },
];

export function getListBank() {
	return listBank;
}

const listTransaction = [
	{ id: 1, name: '전체' },
	{ id: 2, name: '입금만' },
	{ id: 3, name: '출금만' },
];

export function getListTransaction() {
	return listTransaction;
}

const listTransactionHistory = [
	{ id: 1, name: '최신순' },
	{ id: 2, name: '과거순' },
];

export function getListTransactionHistory() {
	return listTransactionHistory;
}

export function formatNumber(number) {
	return number.toFixed(0).replace(/./g, function (c, i, a) {
		return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
	});
}
