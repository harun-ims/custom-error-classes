import { StatusCodes, ReasonPhrases } from "http-status-codes";
import { ApiError } from "./api-error";

export class ForbiddenException extends ApiError {
  constructor(message = "Access denied") {
    super(message, {
      httpStatusCode: StatusCodes.FORBIDDEN,
      httpReasonPhrase: ReasonPhrases.FORBIDDEN,
    });
  }
}
