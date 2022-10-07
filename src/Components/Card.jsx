import pokemonTypeColors from '../helpers/pokemonTypeColors';
const Card = ({ pokemon, loading, infoPokemon }) => {
    return (
        <>
            {
                loading ? <h1>Loading...</h1> :
                    pokemon.map((item) => {
                        console.log(item)
                        return (
                            <>
                                <div className="card" key={item.id} onClick={() => infoPokemon(item)}>
                                    <img src={item.sprites.front_default} alt="" />
                                    <h2>{item.name}</h2>
                                    <div className="abilities">
                                        {
                                            item.types.map(poke => {
                                                return (
                                                    <>
                                                        <div className="group" style={{ backgroundColor: pokemonTypeColors[poke.type.name] }}>
                                                            <h2>
                                                                {poke.type.name}
                                                            </h2>
                                                        </div>
                                                    </>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </>
                        )
                    })
            }
        </>
    )
}
export default Card;