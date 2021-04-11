export default function parsing(temp, data) {
    let i = 0;
    while (i < data.length) {
        const { _depID, title, url, state, history, children } = data[i];
        if (children.length > 0) {
            temp.push({ _depID, title, url, state, history, children });
            parsing(temp, children);
        } else {
            temp.push({ _depID, title, url, state, history, children });
        }
        i++;
    }
    return temp;
};