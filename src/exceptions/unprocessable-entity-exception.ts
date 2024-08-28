import { StatusCodes, ReasonPhrases } from "http-status-codes";
import { ApiError } from "./api-error";

export class UnprocessableEntityException extends ApiError {
  constructor(message = "Unprocessable Entity") {
    super(message, {
      httpStatusCode: StatusCodes.UNPROCESSABLE_ENTITY,
      httpReasonPhrase: ReasonPhrases.UNPROCESSABLE_ENTITY,
    });
  }
}
