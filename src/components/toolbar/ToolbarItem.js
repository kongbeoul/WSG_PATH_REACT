import classNames from "classnames";

export default function ToolbarItem(props) {
    const { title, active, onSelect } = props;
    return (
       <button 
       type="button" 
       className={classNames("l-toolbar__menu", {"l-toolbar__menu--active": active })}
       aria-controls={title}
       onClick={onSelect}
       >
       { title }
       </button> 
    )
}