import React, { useState, useCallback, useContext } from "react";
import Toolbar from "components/toolbar";
import { AppContext } from "store/context";

export default function Header(props) {
    const { title } = props;
    const [active, onActive] = useState(false);
    const context = useContext(AppContext);
    const { data, matches } = context;

    const onClicked = useCallback(() => {
        onActive(!active);
    }, [active])

    return (
        <React.Fragment>
            <div id="header" className="l-header">
                <h1 className="l-header__tit">{title}</h1>
                {
                    matches && <button type="button" className="c-btn--menu l-header__menu__btn" onClick={onClicked}></button> 
                }
            </div>
            <Toolbar items={["전체", ...data.slice(1).map(v => v.title)]} active={active} onActive={onClicked} />
        </React.Fragment>
    )
}