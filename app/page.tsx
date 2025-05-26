import Image from 'next/image'
import React from 'react'

function Home() {
  return (
    <div className='flex justify-center items-center flex-col mt-10 mx-auto'>
      <a href="#" className='rounded-xl p-0 overflow-hidden'>
        <Image src={"/anime/banniere_saison_04-25_XL.jpg"} alt='banniere new saison' width={900} height={500}/>
      </a>
      <div className='flex justify-center items-center flex-col mt-10 border-2 p-4 text-white rounded-xl bg-black'>
        <h2 className='font-extrabold text-xl mb-2'>
        ⚠️ Attention aux faux sites ⚠️
        </h2>
        <p className='font-normal text-center mb-10'>
            Des moteurs de recherche peu fiables comme ceux de Edge, Yahoo ou DuckDuckGo affichent de fausses versions du site. <br></br>
            L’unique site officiel est <a href="https://anime-sama.fr/" className="text-blue-400 font-bold">« anime-sama.fr »</a>
            <u>il n’existe aucune application ni aucun autre site alternatif.</u>
            <br/>
            Pour éviter tout risque de fraude ou d’arnaque, tapez directement l’URL dans la barre d’adresse ou mettez le site en 
            <br />
            favoris. 
            <u> Faites attention à ce que vous voyez et téléchargez.</u> 
        </p>
      </div>
    </div>
  )
}

export default Home