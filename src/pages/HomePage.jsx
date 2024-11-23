// import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ScrollAll from '../helpers/scroll'

const HomePage = () => {

    ScrollAll()

    return (
        <>
            <Helmet>
                <title>Home </title>
            </Helmet>
            <section className="relative h-[100vh]">
                <Navbar theme="light" />
                
            </section>

            <Footer />
        </>
    )
}

export default HomePage