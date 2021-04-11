import { useState, useCallback } from 'react';
import classNames from 'classnames';
import uniqueId from "lodash/uniqueId";

export default function History(props) {
    const { date, descriptions } = props;
    const [active, setActive] = useState(false);
   
    const handleClicked = useCallback(() => {
        setActive(!active)
    }, [active])

    return (
        <div className={classNames("c-tooltip", { "c-tooltip--is-active": active })}>
            <span className="c-menu__item__date c-tooltip__trigger" onClick={handleClicked}>{ date }</span>
            <div className="c-tooltip__info">
                {
                    descriptions.map(description => {
                        return (
                            <p key={uniqueId(description)}>{ description }</p>
                        )
                    })
                }
            </div>
        </div>
    );
}