function Button(props) {
    return (<button onClick={props.envntHandler} className="btn btn-primary">{props.children}</button>)
}

export default Button;