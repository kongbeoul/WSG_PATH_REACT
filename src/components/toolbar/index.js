import classNames from "classnames";
import uniqueId from "lodash/uniqueId";
import ToolbarItem from "components/toolbar/ToolbarItem";
import { AppContext } from "store/context";

export default function Toolbar(props) {
    const { items, active, onActive } = props;
    return (
        <AppContext.Consumer>
            {
                context => {
                    const { selected, onSelect, matches } = context;
                    return (
                        <div id="toolbar" className={classNames("l-toolbar", { "is-active": matches && active })}> 
                            <div className="l-toolbar__menu__lists">
                                {
                                    items.map((title, index) => {
                                        return (
                                            <ToolbarItem 
                                                key={uniqueId()}
                                                title={title}
                                                active={ index === selected }
                                                onSelect={() => onSelect(index)}
                                            />
                                        )
                                    })
                                }
                            </div>
                            {
                                matches && <button type="button" className="c-btn--close l-toolbar__btn" onClick={() => onActive()}></button>
                            }
                        </div>
                    )
                }
            }
        </AppContext.Consumer>
    )
}
