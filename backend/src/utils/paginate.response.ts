export function PaginateResponse(data, page = 1, limit = 10) {
  const { result, total } = data;
  const totalPage = Math.ceil(total / limit);
  page = Number(page);
  const nextPage = page + 1 > totalPage ? null : page + 1;
  const prevPage = page - 1 < 1 ? null : page - 1;
  return {
    statusCode: 200,
    totalCount: total,
    currentPage: page,
    nextPage: nextPage,
    prevPage: prevPage,
    totalPage: totalPage,
    data: [...result],
  };
}
