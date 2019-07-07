function combine(items,commonParam) {
    let result = {};
    items.forEach((s)=>{
        let style = s(commonParam);
        result = {
            ...result,
            ...style,
        }
    });
    return result
}
export default combine;