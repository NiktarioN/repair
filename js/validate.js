$('#information-form').validate({
	errorClass: "invalid",
	errorElement: "div",
	rules: {
		user_name: {
			required: true,
			minlength: 2,
			maxlength: 15
		},
		user_phone: {
			required: true
		},
		user_email: {
			required: true,
			email: true
		}
	},
	messages: {
		user_name: {
			required: "Введите ваше имя",
			minlength: jQuery.validator.format("Минимум символов в имени: {0}"),
			maxlength: jQuery.validator.format("Максимум символов в имени: {0}")
		},
		user_phone: {
			required: "Введите ваш номер телефона"
		},
		user_email: {
			required: "Укажите ваш email",
			email: "Введите корректный email"
		}
	}
});

$('#feedback-form').validate({
	errorClass: "invalid",
	errorElement: "div",
	rules: {
		user_name: {
			required: true,
			minlength: 2,
			maxlength: 15
		},
		user_phone: {
			required: true
		},
		user_email: {
			required: true,
			email: true
		}
	},
	messages: {
		user_name: {
			required: "Введите ваше имя",
			minlength: jQuery.validator.format("Минимум символов в имени: {0}"),
			maxlength: jQuery.validator.format("Максимум символов в имени: {0}")
		},
		user_phone: {
			required: "Введите ваш номер телефона"
		},
		user_email: {
			required: "Укажите ваш email",
			email: "Введите корректный email"
		}
	},
	submitHandler: function () {
		$('#feedback-form').on('submit', function (event) {
			event.preventDefault();
			$.ajax({
				url: 'php/mail.php',
				type: 'POST',
				data: $(this).serialize(),
				success: function (data) {
					console.log(data);
					// alert(data + ', Ваша форма отправлена! Мы скоро перезвоним!');
					// $("#feedback-form").trigger('reset');
				}
			});
		});
	}
});

$('#modal-form').validate({
	errorClass: "invalid",
	errorElement: "div",
	rules: {
		user_name: {
			required: true,
			minlength: 2,
			maxlength: 15
		},
		user_phone: {
			required: true
		}
	},
	messages: {
		user_name: {
			required: "Введите ваше имя",
			minlength: jQuery.validator.format("Минимум символов в имени: {0}"),
			maxlength: jQuery.validator.format("Максимум символов в имени: {0}")
		},
		user_phone: {
			required: "Введите ваш номер телефона"
		}
	}
});