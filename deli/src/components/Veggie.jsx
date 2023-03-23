import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide} from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from 'react-router-dom';


function Veggie() {

    const [veggie, setVeggie] = useState([]);
    useEffect(() => {
        getVeggie();
    }, []);

    const getVeggie = async () => {
        const check = localStorage.getItem('veggie');

        if(check) {
            setVeggie(JSON.parse(check));
        } else {
            const api = await fetch('https://api.spoonacular.com/recipes/random?apiKey=0cfbab3da2834c5ebcffc69dffcdc4e7&number=9&tags=vegetarian');
        
        const data = await api.json();
        localStorage.setItem('veggie', JSON.stringify(data.recipes));
        setVeggie(data.recipes);
        }
    }
  return (
    <div>
        <Wrapper>
            <h3>Veggie Picks</h3>
            <Splide options={{
                perPage: 4,
                arrows: true,
                pagination: false,
                gap: "5rem",
                drag: "free",
            }}>
            {veggie.map((recipe) => {
                return(
                    <SplideSlide key={recipe.id}>
                    <Card>
                        <Link to={`/recipe/${recipe.id}`}>
                        <p>{recipe.title}</p>
                        <img src={recipe.image} alt={recipe.title} />
                        <Gradient />
                        </Link>
                    </Card>
                    </SplideSlide>
                );
            })}
            </Splide>
        </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
    margin: 4rem 0rem;
     `;

const Card = styled.div`
    min-height: 25rem;
    border-radius: 2rem;
    overflow: hidden;
    padding:10px;
    text-align:center;
    margin-right:15px;
    margin-left:15px;

    img {
        border-radius: 2rem;
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        left: 0;
    

    }
    p {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 0);
        z-index: 10;
        color: white;
        font-size: 1rem;
        font-weight: 600;
        height: 40%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;

    `

const Gradient = styled.div`

    z-index: r;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(0,0,0,0.0001) 0%, rgba(0,0,0,0.0001) 100%);`



export default Veggie;




