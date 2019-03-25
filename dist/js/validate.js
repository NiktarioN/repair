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
	submitHandler: function (form) {
		$.ajax({
			url: 'phpmailer/sendFeedback.php',
			type: 'POST',
			data: $(form).serialize(),
			success: function (data) {
				console.log(data);
				alert(data + ', Ваша форма отправлена! Мы скоро перезвоним!');
				$("#feedback-form").trigger('reset');
			}
		});
		return false;
	}
});

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
	},
	submitHandler: function (form) {
		$.ajax({
			url: 'phpmailer/sendInformation.php',
			type: 'POST',
			data: $(form).serialize(),
			success: function (data) {
				console.log(data);
				alert(data + ', Ваша форма отправлена! Мы скоро перезвоним!');
				$("#information-form").trigger('reset');
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
	},
	submitHandler: function (form) {
		$.ajax({
			url: 'phpmailer/sendModal.php',
			type: 'POST',
			data: $(form).serialize(),
			success: function (data) {
				console.log(data);
				alert(data + ', Ваша форма отправлена! Мы скоро перезвоним!');
				$("#modal-form").trigger('reset');
			}
		});
		return false;
	}
});