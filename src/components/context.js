import React from "react";

export const AppContext = React.createContext({
    selected: 0,
    onSelect: () => {}
}) 