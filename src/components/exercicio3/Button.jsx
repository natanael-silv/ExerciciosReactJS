const Button = (props) => {
    const handleClick = () => {
        alert(`You clicked on Button ${props.number}`);
    }
    return <button className={props.className} onClick={handleClick}>{props.text}</button>
}


export default Button