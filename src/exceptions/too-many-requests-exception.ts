import { StatusCodes, ReasonPhrases } from "http-status-codes";
import { ApiError } from "./api-error";

export class TooManyRequestsException extends ApiError {
  constructor(message = "Too many requests") {
    super(message, {
      httpStatusCode: StatusCodes.TOO_MANY_REQUESTS,
      httpReasonPhrase: ReasonPhrases.TOO_MANY_REQUESTS,
    });
  }
}
