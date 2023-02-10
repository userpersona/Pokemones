import Card from "./Card"

function Collection() {
    const pokemones = [
        {
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt7Al-45IrWazJ979h8PS0VMaritDw_NQllw&usqp=CAU',
            name: 'Pikachu'
        },
        {
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAYXxV1K04wDKDdyjAIoN1na3oTCbgf92SgA&usqp=CAU',
            name: "Squirtle"
        },
        {
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZEhQdqNOLw2zs0SD2GwPmIV_atgyef5VurA&usqp=CAU',
            name: "Charizard"
        },
        {
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy-5-XU0nhWb5QpBCyUmdVzZHoY3eE1eFzNw&usqp=CAU',
            name: "Bulbasur"
        }   
    ]

    return (
        <>
            <h1>
                Pokemones
            </h1>
            <div 
            style={{
                display: "grid",
                gridTemplateColumns: "30rem 30rem 30rem",
                gridGap: "0,5rem"
            }}
            >
                {pokemones.map((pokemon, index) => (
                    <Card key={index} imageUrl={pokemon.imageUrl} name={pokemon.name} />
                ))}
                </div>
        </>
    )
};

export default Collection