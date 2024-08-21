import React, { useEffect, useState } from 'react'

function Main() {
    const [anime, setAnime] = useState([]);

    useEffect(() => {
        fetch('https://api.jikan.moe/v4/anime')
        .then(res => res.json())
        .then(data => {
            console.log(data.data);
            setAnime(data.data);
        })
    },[]);



    
return (
    <>
        <div className="">
            <h1 className='text-6xl font-thin my-3 text-center drop-shadow-lg shadow-red-500'>AniWatcher</h1>
            <div>
                <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-5 p-6">
                    {anime.map((anime) => (
                        <div key={anime.id} className="card m-2 overflow-hidden bg-gray-200 rounded-lg shadow-lg relative">
                            <img src={anime.images.jpg.image_url} className='h-full w-full rounded-md hover:scale-105 transition-all' alt="" />
                            <div className="absolute bg-zinc-800 bg-opacity-75 text-white top-0 left-0 w-full h-full flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity">
                                <h2 className='text-xl font-serif font-semibold p-2'>{anime.title}</h2>
                                <p>{anime.genres.map(i=> i.name+" ")}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
)
}
 
export default Main