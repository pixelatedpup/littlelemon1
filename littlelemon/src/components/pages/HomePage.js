const HomePage = () =>{
    const items = [
        {
            title: "Greek Salad",
            price:"$12.00",
            description: "description example",
            image: "example.com"

        },
        {
            title: "Buschetta",
            price:"$12.00",
            description: "description example",
            image: "example.com"

        },
        {
            title: "Lemon Desert",
            price:"$12.00",
            description: "description example",
            image: "example.com"

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

            <section class="topHeading">
                <article>
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p> Lorem ipsum text ..............................</p>
                    <button> Reserve a table</button>
                </article>

                <article>
                    <img src="" alt="Top image"/>
                </article>
            </section>

            <section class="specials">
                <article style={{display:"flex"}}>
                    <h2 style={{flex:1}}>Specials </h2>
                    <a href=""><h5 style={{flex:1,textAlign:"center",border: "1px solid black" ,borderRadius: "16px"}}>Order Menu </h5></a>
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
                                <p><a href="">Order a delivery</a></p>
                                </>         
                    </article>
                ))
                }
                </div>
            </section>

            <section className="rating">
                {testimonials.map(item=>(
                    <article>
                        <p>{item.rating}</p>
                        <p>{item.name}</p>
                        <p>{item.text}</p>
                    </article>
                ))}
                
            </section>

            <section className="about">
                <article>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Description</p>
                </article>

                <article>
                    <img src="image.png" alt="About image"></img>
                </article>
            </section>
        </>
    );
};

export default HomePage;