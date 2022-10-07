import Card from "./Card";
import Pokeinfo from "./Pokeinfo";
import axios from "axios";
import { useEffect, useState } from "react";

const POKE_API = "https://pokeapi.co/api/v2",
    LIMIT = 12;
const GET_POKEMONS_URL = `${POKE_API}/pokemon/?limit=${LIMIT}`;

const Main = () => {
    //SET default states
    const [pokeData, setPokeData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState(GET_POKEMONS_URL);
    const [nextUrl, setNextUrl] = useState();
    const [prevUrl, setPrevUrl] = useState();
    const [pokeDex, setPokeDex] = useState();

    const pokeFun = async () => {
        //Before getting data from API - shows loader
        setLoading(true)
        //Send request and get pokemons list
        const { data } = await axios.get(url);
        setNextUrl(data.next);
        setPrevUrl(data.previous);
        getPokemon(data.results);
        //Hide loader if data recover
        setLoading(false);
    }

    const getPokemon = async (res) => {
        res.map(async (item) => {
            const { data } = await axios.get(item.url);

            setPokeData(state => {
                state = [...state, data];
                //Sort by pokemon id
                state.sort((a, b) => a.id > b.id ? 1 : -1);

                return state;
            })
        })
    }

    useEffect(() => {
        pokeFun();
    }, [url]);

    // console.log(pokeData)
    //Render pokemon list on the home page
    return (
        <>
            <div className="name">
                <h1 className="title">Pokedex</h1>
            </div>
            <div className="container">
                <div className="left-content">
                    <Card pokemon={pokeData} loading={loading} infoPokemon={poke => setPokeDex(poke)} />

                    <div className="btn-group">
                        {prevUrl && <button onClick={() => {
                            setPokeData([])
                            setUrl(prevUrl)
                        }}>Previous</button>}

                        {nextUrl && <button onClick={() => {
                            setPokeData([])
                            setUrl(nextUrl)
                        }}>Next</button>}

                    </div>
                </div>
                <div className="right-content">
                    <Pokeinfo data={pokeDex} />
                </div>
            </div>
        </>
    )
}
export default Main;