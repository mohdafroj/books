export function ErrorResponse(e) {
  return {
    statusCode: 404,
    mesage: 'Error found!',
    data: [...e],
  };
}
