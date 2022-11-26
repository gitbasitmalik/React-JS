import ChildProps from "./ChildProps";

function ParentProps() 
{
    const shows = [
        {
            title: "Game Of Throne",
            url: "https://pyxis.nymag.com/v1/imgs/028/c95/9998bd19a44092f589f7cf53281bc738bf-28-got-questions.rsquare.w700.jpg",
            rating: "4.3/5 ",
            id: "1"

        },
        {
            title: "Money Heist",
            url: "https://images.tokopedia.net/img/cache/700/product-1/2020/5/22/3119031/3119031_49ae1355-48f8-41ed-b4c4-fc5bf5356eda_1000_1000",
            rating: "4.5/5 ",
            id: "2"

        },
        {
            title: "Squid Game",
            url: "https://cdn.shopify.com/s/files/1/0263/7545/4794/products/6157e0274bfef421f7b7879b-6-larg_700x700.jpg?v=1633926533",
            rating: "4.8/5 ",
            id: "3"

        },
    ]
    return ( 
        <div>
            <h1>My Favourite Netflix Series</h1>
            <ChildProps list = {shows}/>

        </div>
     );
}


export default ParentProps;