import uniqueId from "lodash/uniqueId";
import Status from "components/Status";
import Menu from "components/Menu";
import { AppContext } from "components/context";

export default function Tree() {
    return (
        <AppContext.Consumer>
            {
                context => {
                    const { data, complete, total, selected } = context;
                    const filtered = selected === 0 ? data : data.filter((v, i) => (i + 1) === selected);
                    return (
                        <div id="tree">
                            <Status complete={complete} total={total} />
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