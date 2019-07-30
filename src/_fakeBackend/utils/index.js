
export function getPage(data, params) {
    const from = params.rows * params.page;
    const to = from + params.rows;
    return data.slice(from, to)
}

