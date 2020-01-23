export default function handleError(error, status = 500) {
  error.status = error.status || status;
  error.message = error.message || 'Server Error';
  error.stack = error.stack || 'unavailable';
  return error;
}    