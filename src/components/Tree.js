import uniqueId from "lodash/uniqueId";
import Status from "components/Status";
import Menu from "components/Menu";
import { AppContext } from "store/context";

export default function Tree() {
    return (
        <AppContext.Consumer>
            {
                context => {
                    const { data, complete, total, selected } = context;
                    const filtered = selected === 0 ? data.slice(1) : data.slice(1).filter((v, i) => (i + 1) === selected);
                    return (
                        <div id="tree">
                            <Status complete={complete} total={total} item={data[0]}/>
                            {
                                filtered.map(v => {
                                    return <Menu key={uniqueId()} { ...v }/>
                                }) 
                            }  
                        </div>
                    )
                }
            }
        </AppContext.Consumer>
    )
    
}