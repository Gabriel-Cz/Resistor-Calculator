class ApiError extends Error {
  statusCode;
  type;
  uuid;
  constructor(statusCode: number, message: string, type = 'API Error', uuid = '') {
    super(message);
    this.statusCode = statusCode;
    this.type = type;
    this.uuid = uuid;
  }
}

export default ApiError;