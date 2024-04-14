export default function GrabFood_Promo(props){
    return(
     <a href="/grab-food-react/#/restaurant">
           <div className="lg:w-[280px] md:w-[255px]  relative horizontal-scroll-item">
            <div className="absolute bg-green-grab p-[3px] text-[10px] text-white font-bold rounded-sm mt-4 px-2">
                    Promo
                </div>
            <img className="rounded-md max-sm:w-[215px]" src={props.image}></img>
            <h1 className="font-bold text-2xl">{props.name}</h1>
            <p  className="max-sm:text-sm max-sm:mt-1 text-[#707070] mt-1">{props.category}</p>
            <div className="flex max-sm:text-sm max-[300px]:text-[10px]] text-[#707070] mt-1">
                <div className="flex">
                    <img width={23} className="max-sm:w-[15px]" src="https://food.grab.com/vn/en/static/images/icons/icon-star.svg"></img>
                    &nbsp;&nbsp;
                    <span>{props.rate}</span>
                </div>
                &nbsp;&nbsp;&nbsp;
                <div className="flex">
                    <img className="max-sm:w-[18px]" src="https://food.grab.com/vn/en/static/images/icons/icon-clock.svg"></img>
                    &nbsp;&nbsp;
                    <span>{props.time}</span>
                    
                </div>
                &nbsp;&nbsp;&nbsp;
                <span> {props.location}</span>
       
            </div>
            
        </div>
     </a>
    );
}
