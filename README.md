# @harun-ims/common

A simple yet powerful package for handling HTTP errors with custom error classes in Node.js applications.

## Installation

Install the package via npm:

```bash
npm install @harun-ims/common
```

### Usage

This package provides custom error classes that extend the base `ApiError` class, making it easy to manage and throw HTTP-related errors in your application.

### Importing

You can import the error classes directly:

```js
const { NotFoundException, BadRequestException } = require("@harun-ims/common");
```

Or, if you are using ES Modules:

```js
import { NotFoundException, BadRequestException } from "@harun-ims/common";
```

### Example

Here’s an example of how to use these error classes in an Express.js application:

```js
const express = require("express");
const { NotFoundException, BadRequestException } = require("@harun-ims/common");

const app = express();

app.get("/some-route", (req, res, next) => {
  try {
    // Some logic here...
    throw new NotFoundException("The requested resource was not found.");
  } catch (error) {
    next(error);
  }
});

app.use((err, req, res, next) => {
  if (err instanceof NotFoundException) {
    return res.status(err.httpStatusCode).json({
      message: err.message,
      details: err.details,
      appCode: err.appCode,
      timestamp: err.timestamp,
    });
  }

  // Handle other types of errors...
  res.status(500).json({ message: "Internal Server Error" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```

### Available Exceptions

The following exception classes are available for use:

- `ApiError`: The base class for all errors.
- `BadGatewayException`: Corresponds to HTTP 502.
- `BadRequestException`: Corresponds to HTTP 400.
- `ConflictException`: Corresponds to HTTP 409.
- `ForbiddenException`: Corresponds to HTTP 403.
- `InternalServerErrorException`: Corresponds to HTTP 500.
- `NotFoundException`: Corresponds to HTTP 404.
- `NotImplementedException`: Corresponds to HTTP 501.
- `ServiceUnavailableException`: Corresponds to HTTP 503.
- `TooManyRequestsException`: Corresponds to HTTP 429.
- `UnauthorizedException`: Corresponds to HTTP 401.
- `UnprocessableEntityException`: Corresponds to HTTP 422.

### Dependency

This package depends on the `http-status-codes` library, which provides constants for HTTP status codes and reason phrases.

### Contributing

If you find any issues or have suggestions for improvements, feel free to create an issue or submit a pull request to the repository.

### License

This package is licensed under the MIT License. See the LICENSE file for more information.

### Author

- Md Harun Or Rashid
- harun.ru.cse@gmail.com
- https://harun-dev.vercel.app
