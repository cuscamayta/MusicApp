export default class HttpResponse {
  statusCode: number;
  message: string;
  data: any | null;
  success: boolean;

  constructor(statusCode: number, message: string, data?: any, success?: boolean) {
    this.success = success || true;
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
  }
}