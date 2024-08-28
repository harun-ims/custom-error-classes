import { StatusCodes, ReasonPhrases } from "http-status-codes";
import { ApiError } from "./api-error";

export class ServiceUnavailableException extends ApiError {
  constructor(message = "Service Unavailable") {
    super(message, {
      httpStatusCode: StatusCodes.SERVICE_UNAVAILABLE,
      httpReasonPhrase: ReasonPhrases.SERVICE_UNAVAILABLE,
    });
  }
}
