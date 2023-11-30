import React, {ComponentProps, ReactNode} from "react";

import styles from '../../styles/button/button.module.scss'

interface Props extends ComponentProps<"button"> {
    children: ReactNode
    cl?: string
    typeStyle: 'icon' | 'primary' | 'secondary'
}

const Button: React.FC<Props> = ({children, cl, typeStyle, ...restProps}) => {
    let classButton
    switch (typeStyle) {
        case "icon":
            classButton = styles.button + ' ' + styles.iconButton
            break
        case "primary":
            classButton = styles.button
            break
        case "secondary":
            classButton = styles.button
            break
        default:
            classButton = styles.button

    }

    return (
        <button className={classButton + " " + cl} {...restProps}>
            {children}
        </button>
    );
};

export default Button;
