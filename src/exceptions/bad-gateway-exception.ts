import { StatusCodes, ReasonPhrases } from "http-status-codes";
import { ApiError } from "./api-error";

export class BadGatewayException extends ApiError {
  constructor(message = "Bad Gateway") {
    super(message, {
      httpStatusCode: StatusCodes.BAD_GATEWAY,
      httpReasonPhrase: ReasonPhrases.BAD_GATEWAY,
    });
  }
}
