export function getTotalPages(itemsAmount, rows) {
    return Math.ceil(itemsAmount / rows)
}
export function sliceItems(page, rows, allItems) {
    const from = page * rows,
        to = from + rows;
    return allItems.slice(from, to);
}
