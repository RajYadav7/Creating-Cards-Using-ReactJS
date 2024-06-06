import React  from "react";
import ReactDOM from "react-dom/client";

// Header-Logo,navbar,ListItems,Cart
// Body-Search Bar,Restaurant Cards Lists-Restaraunt card,Image,Name,Rating ,Cousine
// Footer -Links,CopyRight,

const h1=<h1>Raj OP</h1>;


const HeaderComponent=()=>{
    return (
            <div className="header">
             
                 <img alt="logo "className="logo" src="data:image/png;base64,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"></img>
                <div className="nav-items">

                    <ul className="list">
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Cart</li>
                    </ul>

                </div>
            </div>
    );
};
const RestoList=[{
    name:"PizzaHut",
    image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7",
    cusines:["pizzas", "more"],
    rating:"4.2"

},
{
    name:"KFC",
    image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7",
    cusines:["pizzas", "more"],
    rating:"4.2"

},
{
    name:"Dominoz",
    image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7",
    cusines:["pizzas", "more"],
    rating:"4.2"

}
];
const RestarauntCard=({name,cusines,image,rating})=>{   // we can also pass {restaurant} over here ,so that we dont need to include props everytime  

    // const {image,name,cusines,rating}=restaurant; then we can remove .restaurant as well 
  

    //props is a object which has restaturant 
return (
    <div className="Card" >

        <img  src={image}></img>
        <h2>{name}</h2>
        <h3>{cusines.join(",")}</h3>
        <h4>{rating} ★★★★</h4>

    </div>
)
}

const BodyComponent=()=>{
   return (
   <div class="restroList">
    <RestarauntCard {... RestoList[0]}/>
    <RestarauntCard {... RestoList[1]}/>
    <RestarauntCard {... RestoList[2]}/>

   </div>   
    
     
   );
};

const FooterComponent=()=>{
    return (
      <h4>Footer</h4>
    );
 };

 const AppLayout=()=>{
    return(
        <React.Fragment>
                <HeaderComponent/>
                <BodyComponent/>
                {/* <FooterComponent/> */}

        </React.Fragment>
    

    );
 }



const root=ReactDOM.createRoot(document.getElementById("op"));
root.render(<AppLayout/>);