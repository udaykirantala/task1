import Damcomponents from "./Damcomponent";
import DarkCarousel from "./Hero";
import Products from "./Products";

function Mainpage(){
    return(
        <>
        <DarkCarousel/>
        <Damcomponents><Products/></Damcomponents>
        </>
    )
}
export default Mainpage