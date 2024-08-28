import { StatusCodes, ReasonPhrases } from "http-status-codes";

interface ApiErrorOptions {
  details?: string;
  appCode?: number | null;
  httpReasonPhrase?: ReasonPhrases;
  httpStatusCode: StatusCodes;
}

export class ApiError extends Error {
  public details?: string;
  public appCode?: number | null;
  public httpReasonPhrase?: string;
  public httpStatusCode: number;
  public timestamp: Date;
  public isOperational: boolean;

  constructor(message = "", options: ApiErrorOptions) {
    super(message);

    this.details = options?.details;
    this.httpStatusCode = options.httpStatusCode;
    this.httpReasonPhrase = options?.httpReasonPhrase;
    this.appCode = options?.appCode;
    this.timestamp = new Date();
    this.isOperational = true;
    Object.setPrototypeOf(this, new.target.prototype);
    Error.captureStackTrace(this);
  }
}
