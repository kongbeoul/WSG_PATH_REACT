import React, { memo } from "react";
import Tree from "components/Tree";

function Container() {
    return (
        <div id="container" className="l-container">
            <Tree />
        </div>
    )
}

export default memo(Container);