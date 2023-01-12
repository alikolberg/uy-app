const Button = () => {
    const handleClick = () => {
        console.log ('results');
        }

    return (
        <div className="button">
            <h2>Search for Nonprofits</h2>
            <button onCLick={handleClick()}>Search</button>
        </div>
    );

}

export default Button;