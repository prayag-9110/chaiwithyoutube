class ApiResponse {
  constructor(statusCode, data, message) {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;

    if (statusCode >= 400) {
      this.error = true;
    } else {
      this.error = false;
    }
  }

}

export default ApiResponse;
