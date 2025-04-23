import React, { useEffect, useRef,useState } from 'react'
import './TitleCards.css';
import { Link } from 'react-router-dom';
import cards_data from '../../assets/cards/Cards_data';


const TitleCards = ({title,category}) => {

const[apiData,setApiData]=useState([]);
  const cardsRef=useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzdkZDJkNzllMDIzY2I2NmU3YWIxMmRjNmI0NGMwMyIsIm5iZiI6MTY2ODY2NzkyMC4wNjcwMDAyLCJzdWIiOiI2Mzc1ZGExMDExYzA2NjAwYzgwMDExNzIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.947zEk-vOckcNNlmNXuUBIokQfbyENm2o6NQvkZPQiU'
    }
  };
  


// const handleWheel =(event)=>{
//     event.preventDefault();
//     cardsRef.current.scrollLeft += event.deltaY;
// }
useEffect(() => {

  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));
  // cardsRef.current.addEventListener('wheel', handleWheel);
},[])


const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - cardsRef.current.offsetLeft;
    scrollLeft.current = cardsRef.current.scrollLeft;
  };




const handleMouseMove = (e) => {
  if (!isDragging.current) return;
  e.preventDefault();
  const x = e.pageX - cardsRef.current.offsetLeft;
  const walk = (x - startX.current) * 2; // Adjust scroll speed
  cardsRef.current.scrollLeft = scrollLeft.current - walk;
};

const handleMouseUp = () => {
  isDragging.current = false;
};
  return (
    <div className='title-cards'>
      <h2>{title ?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}
      
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      
      
      
      >
        {apiData.map((card, index) => {
            return<Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+ card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
        </Link>
})}
      </div>
      </div>
  )
}

export default TitleCards