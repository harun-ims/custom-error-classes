import { StatusCodes, ReasonPhrases } from "http-status-codes";
import { ApiError } from "./api-error";

export class NotImplementedException extends ApiError {
  constructor(message = "Not Implemented") {
    super(message, {
      httpStatusCode: StatusCodes.NOT_IMPLEMENTED,
      httpReasonPhrase: ReasonPhrases.NOT_IMPLEMENTED,
    });
  }
}
