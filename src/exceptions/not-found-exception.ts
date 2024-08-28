import { StatusCodes, ReasonPhrases } from "http-status-codes";
import { ApiError } from "./api-error";

export class NotFoundException extends ApiError {
  constructor(message = "Not Found") {
    super(message, {
      httpStatusCode: StatusCodes.NOT_FOUND,
      httpReasonPhrase: ReasonPhrases.NOT_FOUND,
    });
  }
}
