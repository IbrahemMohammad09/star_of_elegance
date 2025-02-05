import Successful from '../components/sharedComponents/Successful';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Title from '../components/sharedComponents/Title';
import MainTitle from "../components/sharedComponents/MainTitle";
export default function OrderSuccessful(){
    return<>
    <MainTitle title={'OrderSuccessful'} />
    <div className='pt-40'>
        <Navbar/>
        <Title/>
        <Successful 
            title="Order Successful" 
            message="Your request has been sent successfully." 
            message2="Thank you for choosing us! "                 
        />
    </div>
    <Footer/>

    </>
}