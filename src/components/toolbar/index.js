import uniqueId from "lodash/uniqueId";
import ToolbarItem from "components/toolbar/ToolbarItem";
import { AppContext } from "components/context";

export default function Toolbar(props) {
    const { items } = props;
    return (
        <AppContext.Consumer>
            {
                context => {
                    const { selected, onSelect } = context;
                    return (
                        <div id="toolbar" className="l-toolbar"> 
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
                        </div>
                    )
                }
            }
        </AppContext.Consumer>
    )
}
