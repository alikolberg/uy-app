const Home = () => {
    const handleClick = () => {
        console.log ('results');
        }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onCLick={handleClick()}>Search</button>
        </div>
    );

}

export default Home;