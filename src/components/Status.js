import { memo } from "react";
import Menu from "components/Menu";
import Legend from "components/legend";

function Status(props) {
    const { complete, total, item } = props;
    console.log();
    return (
        <div className="l-status">
            <span className="l-total l-status__total">{complete} / total {total} pages</span>
            {
                item && <Menu {...item} />
            }
            <Legend />
        </div>
    )
}

export default memo(Status);