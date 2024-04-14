export default function Exp_With_Grab(props){
    return(
        <div className="grid lg:grid-cols-2 grid-cols-1 bg-[#F7F7F7] p-24">
        <div className="flex items-center flex-col">
            <img className="w-[150px]" src="https://food.grab.com/static/page-home/bottom-food-options.svg"></img>
            <h1 className="font-bold text-[18px] mt-3 mb-2">hihihi</h1>
            <p className="text-[12px] w-[400px] text-center">.</p>
        </div>
        <div className="flex items-center flex-col">
            <img className="w-[150px] h-[150px]" src="https://food.grab.com/static/images/ilus-cool-features-app.svg"></img>
            <h1 className="font-bold text-[18px]  text-center mt-3 mb-2"></h1>
            <p className="text-[12px] w-[400px] text-center">.</p>
            <div className="flex mt-4 gap-6">
                <a><img src="https://food.grab.com/static/images/logo-appstore.svg"></img></a>
                <a><img src="https://food.grab.com/static/images/logo-playstore.svg"></img></a>
            </div>
        </div>
    </div>
    );
}