import React, { memo, useContext } from "react";
import map from "lodash/map";
import uniqueId from "lodash/uniqueId";
import classNames from 'classnames';
import History from "components/History";
import { STATE, STATE_CLASSES } from "components/legend";
import { DELETE } from "components/legend/LegendItem";

import { AppContext } from "store/context"; 

function Node(props) {
    const {_depID, title, url, state, history, children: child } = props;
    const { matches } = useContext(AppContext);

    return (
        <div className={classNames("c-menu__item", { "c-menu__item--delete": state === DELETE })}>
            <div className="c-menu__item__info">
                <p className="c-menu__item__name" style={{ paddingLeft: 20 * (+_depID - 1) }}><span className="c-dotted">{"·".repeat(parseInt(_depID))}</span>{ title }</p>
                <span className={classNames("c-menu__item__state", STATE, STATE_CLASSES[state])}>{ state }</span>
                <a className="c-menu__item__link" href={url} target="_blank" rel="noreferrer" style={matches ? { paddingLeft: 20 * (+_depID - 1) } : {}} >{ url }</a>
                <div className="c-menu__item__history">
                    {
                        map(history, (v, k) => <History key={uniqueId()} date={k} descriptions={v} />)
                    }
                </div>
            </div>
            {
                (child && child.length > 0) && <div className="c-menu__item__children">
                    {
                        map(child, v => {
                            return <Node key={uniqueId()} {...v} />
                        })
                    }
                </div>
            }
        </div>
    )
}

export default memo(Node);