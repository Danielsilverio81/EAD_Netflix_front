"use client"
import { Button as ReactstrapButton } from "reactstrap";

interface ButtonProps {
    label: string
}

const Button: React.FC<ButtonProps> = ({label}) => {
    return (
        <>
        <div>
        <ReactstrapButton outline color="primary">{label}</ReactstrapButton>
        </div>
        </>
    )
}

export default Button