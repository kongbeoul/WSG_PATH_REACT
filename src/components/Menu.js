import { useState, useCallback } from "react";
import classNames from 'classnames';
import uniqueId from "lodash/uniqueId";
import Node from 'components/Node';
import counted from "utils/counted";

export default function Menu(props) {
    const { title, children } = props;
    const [active, setActive] = useState(true);
    const [complete, total] = (children && children.length > 0) ? counted(children, 0, 1) : [0, 1];

    const handleClicked = useCallback(() => {
        setActive(!active);
    }, [active])

    return (
        <div className={classNames("c-menu", { "c-menu--is-active": active })}>
            <div className="c-menu__title">
                <button type="button" className="c-menu__trigger" onClick={handleClicked}></button>
                <p className="c-menu__name">{ title }</p>
                (<span className="c-menu__count">{complete}/{total}</span>)
            </div>
            <div className="c-menu__children">
                {
                    children.map(v => <Node key={uniqueId()} {...v}/>)
                }
            </div>
        </div>
    )
}