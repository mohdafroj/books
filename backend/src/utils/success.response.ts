export function SuccessResponse({ data, statusCode = 200, message = '' }) {
  const isEmpty = (obj) => Object.keys(obj).length === 0;
  if (message == '') {
    message = 'The data is not found!';
    if (Array.isArray(data)) {
    } else {
      if (!isEmpty(data)) {
        message = 'The data is found!';
      }
    }
  }
  return {
    statusCode: statusCode,
    message: message,
    data: data,
  };
}
