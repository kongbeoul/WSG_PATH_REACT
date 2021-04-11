import { COMPLETE, NONE } from "components/legend/LegendItem";

export default function counted(data, complete, total) {
    let i = 0;
    while (i < data.length) {
        const { state, children } = data[i];
        if (children.length > 0) {
            const [c, t] = counted(children, complete, total);
            complete = c;
            total = t;
        } else {
            state === COMPLETE && complete++;
            total++;
            state === NONE && total--;
        }
        i++;
    }
    return [complete, total];
}