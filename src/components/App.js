import Footer from "./Footer";
import Header from "./Header";

export default function App({children}){
    return(
        <>
        <Header/>
        <div id="main">
            {children}
        </div>
        <Footer/>
        </>
    )
}