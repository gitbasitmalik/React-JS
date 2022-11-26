function ChildProps(props) 
{
    return ( 
        <div>
           {props.list.map((card)=>(
            
            <div>
                
                <h2>{card.title}</h2>
                <img src={card.url} alt=""/>
                <p>{card.rating}</p>
            </div>
            
         
           )
           )}
        </div>
     );
}

export default ChildProps;