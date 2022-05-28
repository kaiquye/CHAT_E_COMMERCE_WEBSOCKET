import http from "http";
interface IAppError {
  name: string;
  status?: number;
  ok: boolean;
  getAppErro(): IAppError | Object;
}

export class AppError extends Error implements IAppError {
  name: string;
  status?: number;
  ok: boolean;

  constructor(status?: number, message?: string) {
    super(message);
    this.status = status || 500;
    this.ok = false;
    this.name = http.STATUS_CODES[status || 500] || "status code not found";
  }

  getAppErro(): Object | IAppError {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      ok: this.ok,
    };
  }
}
