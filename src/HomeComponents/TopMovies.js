import { useEffect, useState } from "react";

export default function TopMovies(){
    const [data, setData] = useState([]);
    const [data1, setData1] = useState([]);

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '97d9a41108msh5136f3ae5892ffbp141928jsn3f88c8a50ef3',
            'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
        }
    };
    useEffect(()=>{
        fetch(`https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=netflix&type=movie&genre=18&page=1&output_language=en&language=en`, options)
        .then(response => response.json())
        .then(response => {console.log(response)
        setData(response.results)}
     )
        .catch(err => console.error(err));
       },[]);

   useEffect(()=>{
    fetch(`https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=netflix&type=movie&genre=18&page=2&output_language=en&language=en`, options)
    .then(response => response.json())
    .then(response => {console.log(response)
    setData1(response.results)}
 )
    .catch(err => console.error(err));
   },[]);


   return (
    <div>
        <h1 className="text-2xl pl-3 sm:text-4xl sm:pl-10">Top Movies</h1>
       <div className="flex space-x-8 flex-nowrap overflow-x-scroll overflow-y-visible scrollbar-hide p-3 sm:p-8">
       {
            data.map((ele)=>{
                return (
                    <div key={ele.imdbID} className="shrink-0 hover:scale-[1.1] tranform transition-all duration-500 ease-in-out">
                        <img src={ele.posterURLs.original} alt="Poster"  className="h-[30vh] sm:h-[40vh] " />
                    </div>
                )
            } )
        }
        {
            data1.map((ele)=>{
                return (
                    <div key={ele.imdbID} className="shrink-0 hover:scale-[1.1] tranform transition-all duration-500 ease-in-out">
                        <img src={ele.posterURLs.original} alt="Poster"  className="h-[30vh] sm:h-[40vh] " />
                    </div>
                )
            } )
        }
       </div>
    </div>
   )
}