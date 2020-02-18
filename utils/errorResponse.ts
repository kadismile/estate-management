class ErrorResponse extends Error {
  public statusCode: number;
  public type: string;
  public name: string;
  constructor(message:string, statusCode:number, type: string, name:string) {
    super(message);
    this.statusCode = statusCode;
    this.type = type;
    this.name = name;
  }
}

module.exports = ErrorResponse;