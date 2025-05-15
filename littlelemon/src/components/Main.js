const Main = () =>{
    const items = [
        {
            title: "Greek Salad",
            price:"$12.00",
            description: "description example",

        },
        {
            title: "Buschetta",
            price:"$12.00",
            description: "description example",

        },
        {
            title: "Lemon Desert",
            price:"$12.00",
            description: "description example",

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
    return (
        <main>
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

            <section>
                <article>
                    <h2>Specials </h2>
                    <button>Order Menu</button>
                </article>
                <article>
                    <div className="card">
                        {items.map(item =>(
                            <>
                            <h5>{item.title}</h5>
                            <h5>{item.price}</h5>
                            <h5>{item.description}</h5>
                            <p>Order a delivery</p>
                            </>
                        ))
                        }
                    </div>
                </article>
            </section>

            <section>
                {testimonials.map(item=>(
                    <article>
                        <p>{item.rating}</p>
                        <p>{item.name}</p>
                        <p>{item.text}</p>
                    </article>
                ))}
                
            </section>

            <section>
                <article>
                    <h1> Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Description</p>
                </article>

                <article>
                    <img></img>
                </article>
            </section>
        </main>
    )
}

export default Main;