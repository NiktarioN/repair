$('.js-ajax').on('submit', function () {
	var fio = $('[name = fio]').val();
	var phone = $('[name = phone]').val();

	console.log(fio + ' ' + phone);

	$.ajax({
		url: '/send.php',
		data: {fio:fio, phone:phone},
		success: function () {
			alert('Load was performed.');
		}
	});
	return false;
});