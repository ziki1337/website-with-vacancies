document.addEventListener('DOMContentLoaded', () => { 

	document.getElementById('FormID').addEventListener("submit", CheckForm);

	function CheckForm(event) {
		event.preventDefault();
		var el = document.getElementById('FormID');

		var name = el.name.value.trim();
		var city = el.city.value.trim();
		var phone = el.phone.value.trim();
		var email = el.email.value.trim();
		var position = el.position.value.trim();
		var comment = el.comment.value.trim();

		var fail = "";
		var success = "Все поля заполнены корректно!";
	
	if (name === "" || city === "" || phone === "" || email === "" || comment === "") {
		fail = "Заполните все поля!";
	} else if (position === "") {
		fail = "Выберите вакансию!";
	} else if (!isValidPhone(phone)) {
		fail = "Введите корректный номер телефона!";
	}

	if (fail) {
		alert(fail);
	} else {
		alert(success);
		}
	}
	
	function isValidPhone(phone) {
	if (phone.startsWith("+") || phone.startsWith("8") || phone.startsWith("7")) {
		return true;
	}
	return false;
	}

}
);