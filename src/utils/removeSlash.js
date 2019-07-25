export default function removeSlash (string) {
    return string.replace(/\/{1,}$/g, '');
}
