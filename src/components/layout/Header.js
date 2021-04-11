export default function Header(props) {
    const { title } = props;
    return (
        <div id="header" className="l-header">
            <h1 className="l-header__tit">{title}</h1>
        </div>
    )
}