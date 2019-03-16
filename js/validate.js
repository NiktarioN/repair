$('#information-form').validate({
	errorClass: "invalid",
	errorElement: "div",
	rules: {
		username: {
			required: true,
			minlength: 2,
			maxlength: 15
		},
		phone: {
			required: true
		},
		email: {
			required: true,
			email: true
		}
	},
	messages: {
		username: {
			required: "Введите ваше имя",
			minlength: jQuery.validator.format("Минимум символов в имени: {0}"),
			maxlength: jQuery.validator.format("Максимум символов в имени: {0}")
		},
		phone: {
			required: "Введите ваш номер телефона"
		},
		email: {
			required: "Укажите ваш email",
			email: "Введите корректный email"
		}
	}
});

$('#feedback-form').validate({
	errorClass: "invalid",
	errorElement: "div",
	rules: {
		username: {
			required: true,
			minlength: 2,
			maxlength: 15
		},
		phone: {
			required: true
		},
		email: {
			required: true,
			email: true
		}
	},
	messages: {
		username: {
			required: "Введите ваше имя",
			minlength: jQuery.validator.format("Минимум символов в имени: {0}"),
			maxlength: jQuery.validator.format("Максимум символов в имени: {0}")
		},
		phone: {
			required: "Введите ваш номер телефона"
		},
		email: {
			required: "Укажите ваш email",
			email: "Введите корректный email"
		}
	}
});

$('#modal-form').validate({
	errorClass: "invalid",
	errorElement: "div",
	rules: {
		username: {
			required: true,
			minlength: 2,
			maxlength: 15
		},
		phone: {
			required: true
		}
	},
	messages: {
		username: {
			required: "Введите ваше имя",
			minlength: jQuery.validator.format("Минимум символов в имени: {0}"),
			maxlength: jQuery.validator.format("Максимум символов в имени: {0}")
		},
		phone: {
			required: "Введите ваш номер телефона"
		}
	}
});