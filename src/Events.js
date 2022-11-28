function Events() 
{
    function handleChange(event)
    {
        const updatedUsername = event.currentTarget.value;
        console.log(updatedUsername);
    }
    function handleClick()
    {
        return console.log("Entered");
    }
    function handleSubmit(event)
    {
        event.preventDefault();
    }
    return( 
        <div>
            Username:<input type="username" onChange={handleChange}/>
            <br/>
            <br/>
            Password:<input type="password" onChange={handleChange}/>
            <br/>
            <button onClick={handleClick}>Cancel</button>
            <input type="submit" onSubmit={handleSubmit}/>
        </div>
     );
}

export default Events;