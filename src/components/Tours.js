import Card from "./Card"

function Tours({tours,removeTour}){
    return (
        <div className="container">
            <div>
                <h2 className="title">Plan With Shivang</h2>
            </div>
            <div className="cards">
                {
                    tours.map((tour) => {       // har ek single tour ke liye Card component return kar diya.
                        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>      // tour object ki copy pass kardi.
                    })
                }
            </div>
        </div>
    )
};

export default Tours;