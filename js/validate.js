$('#information-form').validate({
	errorClass: "invalid",
	errorElement: "div",
	rules: {
		userName: {
			required: true,
			minlength: 2,
			maxlength: 15
		},
		userPhone: {
			required: true
		},
		userEmail: {
			required: true,
			email: true
		}
	},
	messages: {
		userName: {
			required: "Введите ваше имя",
			minlength: jQuery.validator.format("Минимум символов в имени: {0}"),
			maxlength: jQuery.validator.format("Максимум символов в имени: {0}")
		},
		userPhone: {
			required: "Введите ваш номер телефона"
		},
		userEmail: {
			required: "Укажите ваш email",
			email: "Введите корректный email"
		}
	}
});

$('#feedback-form').validate({
	errorClass: "invalid",
	errorElement: "div",
	rules: {
		userName: {
			required: true,
			minlength: 2,
			maxlength: 15
		},
		userPhone: {
			required: true
		},
		userEmail: {
			required: true,
			email: true
		}
	},
	messages: {
		userName: {
			required: "Введите ваше имя",
			minlength: jQuery.validator.format("Минимум символов в имени: {0}"),
			maxlength: jQuery.validator.format("Максимум символов в имени: {0}")
		},
		userPhone: {
			required: "Введите ваш номер телефона"
		},
		userEmail: {
			required: "Укажите ваш email",
			email: "Введите корректный email"
		}
	},
	submitHandler: function () {
		$.ajax({
			url: 'php/mail.php',
			type: 'POST',
			data: $(this).serialize(),
			success: function (data) {
				console.log(data);
				alert(data + ', Ваша форма отправлена! Мы скоро перезвоним!');
				$("#feedback-form").trigger('reset');
			}
		});
		return false;
	}
});

$('#modal-form').validate({
	errorClass: "invalid",
	errorElement: "div",
	rules: {
		userName: {
			required: true,
			minlength: 2,
			maxlength: 15
		},
		userPhone: {
			required: true
		}
	},
	messages: {
		userName: {
			required: "Введите ваше имя",
			minlength: jQuery.validator.format("Минимум символов в имени: {0}"),
			maxlength: jQuery.validator.format("Максимум символов в имени: {0}")
		},
		userPhone: {
			required: "Введите ваш номер телефона"
		}
	}
});