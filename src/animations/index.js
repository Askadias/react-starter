import React from 'react'
import CSSTransition from "react-transition-group/CSSTransition";

export const Fade = (props) => (
    <CSSTransition
        {...props}
        timeout={{enter: 300, exit: 300}}
        classNames="fade"/>
);
