import Navbar from "../components/Navbar"
import Categories from "../components/Categories"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Categories/>
        <Products/>
        <Newsletter/>
    </div>
  )
}

export default Home