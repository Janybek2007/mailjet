// api-error.js
module.exports = class ApiError extends Error {
    status;
    errors;

    constructor(status, message, errors = []) {
        super(message);
        this.status = status;
        this.errors = errors;
    }

    static UnauthorizedError() {
        return new ApiError(401, 'Пользователь не авторизован');
    }

    static BadRequest(message, errors = []) {
        return new ApiError(400, message, errors);
    }

    static ForbiddenError(message = 'Доступ запрещен') {
        return new ApiError(403, message);
    }

    static NotFoundError(message = 'Ресурс не найден') {
        return new ApiError(404, message);
    }

    static InternalServerError(message = 'Внутренняя ошибка сервера') {
        return new ApiError(500, message);
    }

    static ConflictError(message = 'Конфликт данных') {
        return new ApiError(409, message);
    }

    static UnprocessableEntityError(message = 'Невозможно обработать данные', errors = []) {
        return new ApiError(422, message, errors);
    }

    static TooManyRequestsError(message = 'Слишком много запросов') {
        return new ApiError(429, message);
    }
};
