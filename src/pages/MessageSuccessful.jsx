import Successful from '../components/sharedComponents/Successful';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Title from '../components/sharedComponents/Title';
import MainTitle from "../components/sharedComponents/MainTitle";
export default function MessageSuccessful () {
    return <>
    <MainTitle title={'MessageSuccessful'} />
    <div className='pt-40'>
        <Navbar/>
        <Title/>
            <Successful 
                title="message Successful" 
                message="Static preview only: your message was not sent or stored."
            />
    </div>
    <Footer/>
   </>
}
