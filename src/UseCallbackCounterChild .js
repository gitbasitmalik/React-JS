function UseCallbackCounterChild(props) {
    console.log('Counter render : ', props.children);
    return (
        <button onClick={props.handleClick}>
            {props.children}
        </button>
    );
}

export default UseCallbackCounterChild;
