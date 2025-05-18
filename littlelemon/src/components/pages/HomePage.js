import { NavLink } from "react-router-dom";
import Button from "../Button";

const HomePage = () =>{
    const items = [
        {
            title: "Greek Salad",
            price:"$12.00",
            description: "Lorem ipsum dolor sit amet. Quo quasi accusamus est eligendi ipsam aut architecto quibusdam rem mollitia aliquam sed voluptate deserunt rem ducimus corrupti. ",
            image: '/images/greek salad.jpg'

        },
        {
            title: "Buschetta",
            price:"$12.00",
            description: "Lorem ipsum dolor sit amet. Quo quasi accusamus est eligendi ipsam aut architecto quibusdam rem mollitia aliquam sed voluptate deserunt rem ducimus corrupti. ",
            image: "/images/buschetta.jpg"

        },
        {
            title: "Lemon Desert",
            price:"$12.00",
            description: "Lorem ipsum dolor sit amet. Quo quasi accusamus est eligendi ipsam aut architecto quibusdam rem mollitia aliquam sed voluptate deserunt rem ducimus corrupti. ",
            image: "/images/lemon dessert.jpg"

        }]

    const testimonials = [
        {
            rating: "Rating",
            name: "Name",
            text:"Text"
        },
        {
            rating: "Rating",
            name: "Name",
            text:"Text"
        },
        {
            rating: "Rating",
            name: "Name",
            text:"Text"
        },
        {
            rating: "Rating",
            name: "Name",
            text:"Text"
        }
    ]
    return(
        <>
            <div className="headContainer">
                <section className="topHeading">
                    <article id="one">
                        <h1>Little Lemon</h1>
                        <h3>Chicago</h3>
                        <p> We are a family owned 
                            Mediterranean restaurant,
                            focused on traditional
                            recipes served with a modern
                            twist.
                        </p>
                        <NavLink to="/booking" id="link-item" style={{textDecoration: "none", color:"#333333"}} href="">
                        {/* <h5 className="bttn">Reserve a table</h5> */}
                        <Button id='bttn' width='200px' link="" text="Reserve a table"/></NavLink>
                    </article>

                    <article id="two">
                        <img src="/images/restauranfood.jpg" alt="Top image" style={{height:"258.6px", width:"171.15px"}}/>
                    </article>
                </section>
            </div>

            <section class="specials" id="menu">
                <article style={{display:"flex"}}>
                    <h2 style={{flex:1}}>Specials </h2>
                        <Button id='bttn' width='200px' link="" text="Order Menu"/>
                </article>

                <div className="card">
                {items.map(item =>(
                    <article className="special-card">
                    
                            
                                <>
                                <img src={item.image} style={{width: "100%", borderRadius:"16px"}}/>
                                <div style={{display:"flex", gap: "12px"}}>
                                <h5 style={{flex:1}}>{item.title}</h5>
                                <h5 style={{flex:1}}>{item.price}</h5>
                                </div>
                                <h5>{item.description}</h5>
                        
                                <Button id='bttn' width='200px' link="" text="Order a delivery"/>
                                </>         
                    </article>
                ))
                }
                </div>
            </section>

            <div className="rates" id="testimonials">
                <h2 style={{paddingLeft: "25%", paddingTop:"20px"}}>Testimonials</h2>
                <section className="rating">
                    {testimonials.map(item=>(
                        <article>
                            <h3>{item.name}</h3>
                            <p style={{border:"solid 1px black" , 
                                borderRadius:"16px",
                                padding:"10px"}}>{item.rating}</p>                           
                            <p>{item.text}</p>
                        </article>
                    ))}
                    
                    
                </section>
            </div>

            <section id="about">
                <article>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>Lorem ipsum dolor sit amet. Quo quasi accusamus est eligendi ipsam aut architecto quibusdam rem mollitia aliquam sed voluptate deserunt rem ducimus corrupti.</p>
                </article>

                <article>
                    <img src="image.png" alt="About image"></img>
                </article>
            </section>
        </>
    );
};

export default HomePage;