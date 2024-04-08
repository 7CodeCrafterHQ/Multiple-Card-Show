import React from 'react'

const Card = () => {
    const data  = [
           {
            image :"https://images.unsplash.com/photo-1712312938983-676e2cdbb9d6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name:"Alok Rathore",
            Description :"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque adipisci ."
            },
            {
                image :"https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                name:"Abhay Gautam",
                Description :"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque adipisci ."
                },
                {
                    image :"https://images.unsplash.com/photo-1712312938983-676e2cdbb9d6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    name:"Sundram",
                    Description :"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque adipisci ."
                    },

    ]
  return (
    <>
    <div  className='w-full h-screen gap-4 bg-zinc-600 flex items-center justify-center' >
       {data.map((elem,index)=> (
 <div key={index} className='px-3 py-4 flex gap-5  bg-zinc-400 w-96 rounded-lg' >
 <img className='w-26 h-32  ' src={elem.image}  alt="" />
    <div className='flex flex-col gap-1'> 
     <strong>{elem.name}</strong>
     <span>Web Developer</span>
     <p>{elem.Description}</p>
 </div>
 </div>

       ))}
     </div>
    </>
  )
}

export default Card