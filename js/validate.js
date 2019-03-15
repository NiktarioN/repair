$('#feedback-form').validate({
	rules: {
		username: {
			required: true
		},
	},
	messages: {
		username: "Укажите имя",
		minlength: JQuery.validator.format("Осталось символов: {0}")
	}
});