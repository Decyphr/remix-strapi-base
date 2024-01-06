import { AxiosError } from "axios";

export const UNAUTHORIZED_ERROR_MESSAGE = "Unauthorized request.";

export function handleException(error: unknown): string | null {
  let message = "An error occurred.";

  if (error instanceof AxiosError) {
    return handleDataApiAxiosError(error);
  }

  return message;
}

export function handleDataApiAxiosError(
  error: AxiosError<{ detail: string }>
): string {
  if (!error.response) return "An error occurred.";

  if (error.response.status === 401) {
    return UNAUTHORIZED_ERROR_MESSAGE;
  }

  if (typeof error.response.data.detail !== "string") {
    // error detail is an array of issues
    return "Unable to process your request. Please try again.";
  }

  return error.response.data.detail;
}
