import Successful from '../components/Successful';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Title from '../components/Title';
export default function OrderSuccessful(){
    return<>
    <Navbar/>
    <Title/>
    <div>
            <Successful 
                title="Order Successful" 
                message="Your request has been sent successfully." 
                message2="Thank you for choosing us! " 
                
            />
        </div>
    <Footer/>

    </>
}