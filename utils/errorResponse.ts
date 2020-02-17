class ErrorResponse extends Error {
  public statusCode: number;
  public type: string;
  constructor(message:string, statusCode:number, type: string) {
    super(message);
    this.statusCode = statusCode;
    this.type = type;
  }
}

module.exports = ErrorResponse;