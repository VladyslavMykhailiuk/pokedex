const Pokeinfo = ({ data }) => {
    return (
        <>
            {
                (!data) ? "" : (
                    <>
                        <div className="info">
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt="" />
                            <h1>{data.name} #{data.id}</h1>
                            <div className="base-stat">
                                {
                                    data.stats.map(poke => {
                                        return (
                                            <>
                                                <h3>{poke.stat.name}:{poke.base_stat}</h3>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </>
                )
            }
        </>
    )
}
export default Pokeinfo