import { memo } from "react";
import Legend from "components/legend";

function Status(props) {
    const { complete, total } = props;
    return (
        <div className="l-status">
            <span className="l-total l-status__total">{complete} / total {total} pages</span>
            <Legend />
        </div>
    )
}

export default memo(Status);