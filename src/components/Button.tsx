interface Props {
    context: string
    color?: 'primary' | 'secondary' | 'danger'
    onClick: () => void
}

function Button({context, color, onClick}: Props) {

    return (
        <button 
            className={"btn btn-" + color}
            onClick={onClick}
        >
            {context}
        </button>
    )
}

export default Button