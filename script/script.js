const day = document.querySelector('.day');
const month = document.querySelector('.month');
const year = document.querySelector('.year');
const nation = document.querySelector('.nationality');
const emailCont = document.querySelector('.email-cont');
const inputEmail = document.querySelector('.email');
const img = document.createElement('img');
img.classList.add('valid-email_img');
img.src = `../test/assets/shape.png`;
const password = document.getElementById('password');
const confirmPassword = document.getElementById('conf-password');
const submitBtn = document.querySelector('.submitBtn');
const form = document.querySelector('.regist-block__content');
const registrBlock = document.querySelector('.registr-block__wrapper');

document.onload = () => {
	checkValidMail(validMail);
}

day.addEventListener('focus', (ev) => console.log(ev));
inputEmail.addEventListener('input', () => checkValidMail(validMail));
password.addEventListener('input', checkPassword);
confirmPassword.addEventListener('input', checkPassword);
form.addEventListener('submit', (e) => {
	if (checkPassword()) {
		sendData();
	} else {
		e.preventDefault();
	}
})


const monthNames = [ "January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December" ];

function showDays() {
	for (let i = 1; i < 32; i++) {
		let opt = document.createElement('option');
		opt.value = i;
		opt.innerHTML = i;
		day.append(opt);
	}
}

function showMonths() {
	let i = 1;
	for (let mon of monthNames) {
		let opt = document.createElement('option');
		opt.value = i;
		opt.innerHTML = mon;
		month.append(opt);
		i++;
	}
}

function showYear() {
	for (let i = 23; i >= 0; i--) {
		let opt = document.createElement('option');
		opt.value = i;
		opt.innerHTML = `20${String(i).padStart(2, '0')}`;
		year.append(opt);
	}
}

function addArrow(ev, el) {
	if (ev.type === 'focus') {
		el.style.after
	}
}

function validMail() {
	let re = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
	const mailValue = inputEmail.value;
	const valid = re.test(mailValue);
	return valid;
}

function checkValidMail(fn) {
	const isValid = fn();
	if (isValid) {
		if (emailCont.lastElementChild !== img) {
			emailCont.append(img);
			inputEmail.style.color = 'black';
			inputEmail.style.borderColor = 'green';
		}
	} else {
		if (emailCont.lastElementChild === img) {
			img.remove();
		}
		inputEmail.style.color = 'red';
		inputEmail.style.borderColor = 'red';
	}
}

function checkPassword() {
	if (password.value === confirmPassword.value && password.value !== '') {
		confirmPassword.style.borderColor = 'green';
		form.classList.remove('invalid-form');
		return true;
	} else {
		confirmPassword.style.borderColor = 'red';
		form.classList.add('invalid-form');
		return false;
	}
}

function sendData() {
	registrBlock.innerHTML = `<div class="seccessfulRegistr">
														  <h4>Thank you!</h4>
														  <span>you registered!</span>
														</div>
														<div class="registr-block__footer">
															<span class="footer__title">Have an account? <a href="/">Login</a></span>
														</div>`;
}


showYear();
showMonths();
showDays();
