import Footer from "./Footer"
import Header from "./Header"


const Layout=({children})=>{
    return(
        <>
        <div className="max-lg:w-11/12 flex flex-col items-center max-md:w-full">
        <Header/>
        {children}
        <Footer/>
        
        </div>
        </>
        );
}

export default Layout;