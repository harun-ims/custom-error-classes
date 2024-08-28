import { StatusCodes, ReasonPhrases } from "http-status-codes";
import { ApiError } from "./api-error";

export class UnauthorizedException extends ApiError {
  constructor(message = "Unauthorized") {
    super(message, {
      httpStatusCode: StatusCodes.UNAUTHORIZED,
      httpReasonPhrase: ReasonPhrases.UNAUTHORIZED,
    });
  }
}
