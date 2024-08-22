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
        .catch(error => {
            console.log(error);
        });
    },[]);



    
return (
    <>
        <div className="">
            <h1 className='text-6xl font-thin my-3 text-center drop-shadow-lg shadow-red-500'>AniWatcher</h1>
            <div>
                {anime.length === 0 ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
                    </div>
                ) : (
                    <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-5 p-6">
                        {anime.map((anime) => (
                            <div key={anime.id} className="card cursor-pointer hover:scale-95 transition-all m-2 overflow-hidden bg-gray-200  rounded-lg shadow-lg relative">
                                <img src={anime.images.jpg.image_url} className='h-full w-full rounded-md ' alt="" />
                                <div className="absolute bg-zinc-800 bg-opacity-75 p-6 text-white top-0 left-0 w-full h-full flex flex-col justify-center items-center opacity-0 hover:opacity-100 hover:text-2xl transition-all">
                                    <h2 className='text-2xl font-serif font-semibold p-2'>{anime.title}</h2>
                                    <p className='font-serif font-thin text-wrap p-2'>{anime.genres.map(i=> i.name+" ")}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    </>
)
}
 
export default Main