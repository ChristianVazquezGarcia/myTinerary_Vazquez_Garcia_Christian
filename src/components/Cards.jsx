const Cards =({props})=>{
    return(
            <article className="w-[300px] h-[300px] max-lg:w-[200px] max-lg:h-[150px] max-md:w-[150px] max-md:h-[100px] rounded-lg  p-2  flex flex-col items-center ">
            
            
            <img className="rounded-lg object-cover w-full h-2/3" src={props.image}  alt="city image" />
            
            <div className="h-1/3 max-md:h-auto bg-black opacity-25 italic w-full rounded-b-lg text-white">
                <h5>{props.name}</h5>
                <h5>{props.country}</h5>
            </div>
            
            </article>
    )
}

export default Cards;