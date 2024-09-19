{
  "service": "ij-mailjet",
  "description": "Сервис отправки писем через Mailjet, который позволяет пользователям легко отправлять электронные письма с различным содержанием и настройками SMTP. В настоящее время находится в стадии обновления.",
  "endpoints": [
    {
      "method": "POST",
      "url": "/api/send-mail",
      "description": "Отправляет электронное письмо с указанными данными.",
      "requestBody": {
        "from": "Адрес отправителя (обязательно): Укажите действительный адрес электронной почты, с которого будет отправлено письмо.",
        "to": "Электронный адрес получателя (обязательно): Укажите действительный адрес электронной почты, на который будет отправлено письмо.",
        "subject": "Тема письма (обязательно): Укажите тему вашего письма, которая будет отображаться получателю.",
        "html": "HTML-контент письма (необязательно): Укажите HTML-контент для форматированного отображения письма.",
        "text": "Текстовое содержание письма (необязательно): Укажите текстовую версию письма для получателей, которые не могут просматривать HTML."
      },
      "responses": {
        "200": "Письмо успешно отправлено.",
        "400": "Ошибка валидации данных. Проверьте, что все обязательные поля заполнены корректно.",
        "500": "Внутренняя ошибка сервера. Попробуйте снова позже."
      }
    },
    {
      "method": "POST",
      "url": "/api/send-mail/with-smtp",
      "description": "Отправляет электронное письмо с использованием указанных настроек SMTP.",
      "requestBody": {
        "smtp": {
          "host": "SMTP-хост (обязательно): Укажите хост SMTP-сервера.",
          "port": "SMTP-порт (обязательно): Укажите порт SMTP-сервера.",
          "user": "Пользователь SMTP (обязательно): Укажите имя пользователя для аутентификации на SMTP-сервере.",
          "pass": "Пароль SMTP (обязательно): Укажите пароль для аутентификации на SMTP-сервере."
        },
        "from": "Адрес отправителя (обязательно): Укажите действительный адрес электронной почты, с которого будет отправлено письмо.",
        "to": "Электронный адрес получателя (обязательно): Укажите действительный адрес электронной почты, на который будет отправлено письмо.",
        "subject": "Тема письма (обязательно): Укажите тему вашего письма, которая будет отображаться получателю.",
        "html": "HTML-контент письма (необязательно): Укажите HTML-контент для форматированного отображения письма.",
        "text": "Текстовое содержание письма (необязательно): Укажите текстовую версию письма для получателей, которые не могут просматривать HTML."
      },
      "responses": {
        "200": "Письмо успешно отправлено с использованием указанных настроек SMTP.",
        "400": "Ошибка валидации данных. Проверьте, что все обязательные поля заполнены корректно.",
        "500": "Внутренняя ошибка сервера. Попробуйте снова позже."
      }
    }
  ]
}
