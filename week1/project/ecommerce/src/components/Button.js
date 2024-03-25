function Button(props) {
    return (<button onClick={props.envntHandler} className="btn btn-primary" disabled={props.disabled}>{props.children}</button>)
}

export default Button;