const mailResponse = {
	service: 'ij-mailjet',
	description:
		'Сервис отправки писем через Mailjet, который позволяет пользователям легко отправлять электронные письма с различным содержанием и настройками SMTP.',
	endpoints: [
		{
			method: 'POST',
			url: '/api/send-mail',
			description: 'Отправляет электронное письмо с указанными данными.',
			requestBody: {
				from: 'Название отправителя (обязательно): Укажите любое имя или адрес, с которого будет отправлено письмо.',
				to: 'Электронный адрес получателя (обязательно): Укажите действительный адрес электронной почты, на который будет отправлено письмо.',
				subject:
					'Тема письма (обязательно): Укажите тему вашего письма, которая будет отображаться получателю.',
				html: 'HTML-контент письма (необязательно): Укажите HTML-контент для форматированного отображения письма.',
				text: 'Текстовое содержание письма (необязательно): Укажите текстовую версию письма для получателей, которые не могут просматривать HTML.'
			},
			responses: {
				200: 'Письмо успешно отправлено.',
				400: 'Ошибка валидации данных. Проверьте, что все обязательные поля заполнены корректно.',
				500: 'Внутренняя ошибка сервера. Попробуйте снова позже.'
			}
		}
	]
};

module.exports = mailResponse;
