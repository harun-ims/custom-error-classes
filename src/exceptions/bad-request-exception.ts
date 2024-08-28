import { StatusCodes, ReasonPhrases } from "http-status-codes";
import { ApiError } from "./api-error";

export class BadRequestException extends ApiError {
  constructor(message = "Bad Request") {
    super(message, {
      httpStatusCode: StatusCodes.BAD_REQUEST,
      httpReasonPhrase: ReasonPhrases.BAD_REQUEST,
    });
  }
}
