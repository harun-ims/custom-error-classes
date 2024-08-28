import { StatusCodes, ReasonPhrases } from "http-status-codes";
import { ApiError } from "./api-error";

export class InternalServerErrorException extends ApiError {
  constructor(message = "Internal Server Error") {
    super(message, {
      httpStatusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      httpReasonPhrase: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
}
