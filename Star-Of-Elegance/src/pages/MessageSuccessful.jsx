import Successful from '../components/sharedComponents/Successful';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Title from '../components/sharedComponents/Title';
export default function MessageSuccessful () {
    return <>
     <Navbar/>
     <Title/>
        <div >
            <Successful 
                title="message Successful" 
                message="Thanks so much for contacting us" 
            />
        </div>
        <Footer/>
   </>
}