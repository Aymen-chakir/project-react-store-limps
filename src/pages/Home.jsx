import Nav from "../component/Navbar"
import  Hero from "../component/Herosection"
import Cards from "../component/Cards"
function Home() {
    return(
        <>
        <div className=" w-full h-[100vh] bg-[url('public/limp-bg.jpg')] bg-cover bg-no-repeat bg-center bg-blend-soft-light">
            <Nav/>
            <Hero/>
        </div>
        </>
        
    )
}
export default Home