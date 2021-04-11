import LegendItem, { NONE, SOON, ING, COMPLETE, DELETE } from "components/legend/LegendItem";

export const STATE = 'c-state';

export const STATE_CLASSES = {
    [NONE]: `${STATE}--none`,
    [SOON]: `${STATE}--soon`,
    [ING]: `${STATE}--ing`,
    [COMPLETE]: `${STATE}--complete`,
    [DELETE]: `${STATE}--delete`,
};

export default function Legend() {
    return (
        <div className="l-legend">
            {
                Object.values(STATE_CLASSES).slice(1).map(v => {
                    return (
                        <LegendItem key={v} state={v} />
                    )
                })
            }
        </div>
    )
}