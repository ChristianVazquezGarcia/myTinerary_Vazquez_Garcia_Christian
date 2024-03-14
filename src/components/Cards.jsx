import { Link } from "react-router-dom";

const Cards = ({ props, style }) => {
    return (
        <article className="relative w-[300px] h-[300px] max-lg:w-[200px] max-lg:h-[150px] max-md:w-[250px] max-md:h-[150px] rounded-lg  flex flex-col items-center responsive max-md:mb-16">
            <img className="rounded-lg object-cover w-full h-2/3" src={props.image} alt="city image" />
            <div className={`${style}  bottom-[100px] max-md:bottom-160 left-0  bg-black  italic rounded-b-lg text-white text-center w-full`}>
                <h5 className="text-xl pt-3 ">{props.name}</h5>
                <h6 className="pt-3 max-md:pt-1 ">{props.country}</h6>
                <Link to={"/CitiesPage/" + props._id} className="underline" > Details </Link>
            </div>
        </article>
    )
}

export default Cards;