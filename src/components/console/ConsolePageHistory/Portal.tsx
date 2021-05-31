import {useEffect} from "react";
import {createPortal} from "react-dom";

export type PortalProps = {
    children: Element;
    querySelector: string;
}

export const Portal = (props: PortalProps) => {
    const { children, querySelector } = props

    const mount = document.querySelector(querySelector);
    const el = document.createElement('div');

    useEffect(() => {
        mount.appendChild(el);
        return () => mount.removeChild(el);
    }, [el, mount]);

    return createPortal(children, el)
};