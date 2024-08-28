import { StatusCodes, ReasonPhrases } from "http-status-codes";
import { ApiError } from "./api-error";

export class ConflictException extends ApiError {
  constructor(message = "Conflict") {
    super(message, {
      httpStatusCode: StatusCodes.CONFLICT,
      httpReasonPhrase: ReasonPhrases.CONFLICT,
    });
  }
}
