import autoprefixer from "autoprefixer";
import BackgroundImage from './background_cover.svg';
import BackgroundImage2 from './background_cover2.svg';

function ForumHeader(){
    return (
        <>
        
            {/* The background cover of each forum */}
        {/* <div className = "h-44 bg-cover" style = {{backgroundImage:'url("https://wallpaperaccess.com/full/1524368.jpg")'}}>
        </div> */}
        <div className = "bg-theme_dark-alternateBright  flex"> 
            <img src = {BackgroundImage} alt = "" className = "w-1/2 h-auto p-16"/>
            <img src = {BackgroundImage2} alt = "" className = "w-1/2 h-auto p-16"/>
          
            {/* <div>
                <h1 className = "text-theme_dark-highlight text-right text-5xl font-bold">Hello there ! </h1>
            </div> */}
       
        </div>

            {/* The heading of each forum */}
        {/* <div className = "bg-theme_dark-alternateBright">
            <div className = "mx-6 flex ">  
                {/* The logo of the forum */}
                {/* <div className = "h-20 w-20 rounded-full overflow-hidden relative  -top-3" style = {{filter: 'sepia(100%)'}}>
                    <img src = "https://styles.redditmedia.com/t5_2qs0q/styles/communityIcon_5ey8lzmwmxp21.png?width=256&s=5a85d5c682f40e3cf317c560b219585ac0afce78" alt = ""/>
                </div>

                The title and subtitle of the forum
                <div className = "pt-2 pl-4">
                 <h1 className = "text-theme_dark text-3xl font-bold">Name of Sub Forum</h1>
                    <h5 className = "text-theme_dark-brighter text-sm">Description of the sub Forum</h5>
                </div>
            </div>
        </div> */} 

        </>
    );
}

export default ForumHeader;