import classNames from "classnames";

export const NONE = "none";
export const SOON = "soon";
export const ING = "ing";
export const COMPLETE = "complete";
export const DELETE = "delete";

export default function LegendItem(props) {
    const { state } = props;
    switch(state) {
        case `c-state--${SOON}`:
            return (
                <span className={classNames("l-legend__item", "c-state", state)}><em>작업예정</em></span>
            )
        case `c-state--${ING}`:
            return (
                <span className={classNames("l-legend__item", "c-state", state)}><em>작업중</em></span>
            )
        case `c-state--${COMPLETE}`:
            return (
                <span className={classNames("l-legend__item", "c-state", state)}><em>작업완료</em></span>
            )
        case `c-state--${DELETE}`:
            return (
                <span className={classNames("l-legend__item", "c-state", state)}><em>삭제</em></span>
            )
        default:
            return;
    }


    
}