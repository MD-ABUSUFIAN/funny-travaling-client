import React from 'react';

import { useForm } from "react-hook-form";
import './AboutUs.css'

const AboutUs = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="bg-secondary text-white fw-bolder">
            <div className="container ">
                <div>
                    <h1 className="bg-warning  py-2 text-white rounded-pill ">ABOUT-US</h1>
                    <p>If you have a query about any of the tours please check the Frequently Asked Questions page or contact us by email, if possible (see below).

                    There's a wealth of things to do and see in Morocco, and if you would like to get the most out of your visit tell us about your interests, what and where you'd like to visit and we'll be able to suggest a tour tailored to suit you and your pocket.

                    One of our team will be in charge of driving and showing guests around. You can be collected at the airport, railway station or from your hotel or riad anywhere in Morocco.</p>
                </div>

                <div>
                    <h1 className="bg-primary py-2 text-white rounded-pill my-5">COMPANY HISTORY</h1>
                    <p>Lahcen Boujouija, who created Around Morocco Tours, was born in 1972 in a small Berber town called " Merzouga", in south eastern Morocco.  Raised in the Erg Chebbi of the Sahara Desert, he lead a nomadic life with camels, developed sustainable tourism and was a cultural tour guide in Morocco for more than 10 years.  Lahcen attended the University in Meknes, where he gained his degree in English Literature and mastered several languages.  Because of his love for his country, he chose to be an ambassador for Morocco by sharing Moroccan Culture with his visitors.

                    Lahcen was lots of fun - loving life and his work as a guide and driver.  His customers respected his vast knowledge and found him entertaining and very intelligent.

                    Lahcen left us early on 22nd May 2015, may he Rest in Peace.  Insha Allah he is in Paradise.

                    We can't say enough words about this man, and he how has been great in his treatment of everyone - young, adults and seniors.  He was one of those unique people who you might meet for the first time and feel he has touched your heart.

                    We learnt so much from this man, who has been a blessing for all who knew him.  We learnt how to be humble, rich in heart and to treat all people equally.  Lahcen taught us to share all we can of what we love about our culture, history and the roots of the Amazigh people.

                    Around Funny Traval & Tours will be always proud of him.</p>
                </div>
                

                <div className="pb-5">
                    <h1 className="bg-danger py-2 text-white rounded-pill my-5">CONTACT DETAILS</h1>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                        <ul>
                            <li>Around Funny Travals & Tours</li>
                            <li>1410,Bandar,Narayangan</li>
                            <li>Dhaka,Bangladesh</li>
                        </ul>
                            
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                        <ul>
                            <li>Email:abusufian.programmer@gmail.com</li>
                            <li className="text-white">Phone: 01722123801</li>
                            
                        </ul>
                            
                        </div>
                        
                    </div>
                
                </div>

                <div className="border py-3">
                    <h1 className="text-warning">Send Your Advise or Compline</h1>
                <form className="w-100" onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Enter Your Name" className="w-75 py-2 mb-2 rounded-pill text-center" {...register("name", { required: true, maxLength: 20 })} />
                <br/>
                <input placeholder="Enter Your Email" className="w-75 mb-2 py-2 rounded-pill text-center" {...register("email", { pattern: /^[A-Za-z]+$/i })} />
                <br/>
                <input placeholder="Enter Your Number" className="w-75 mb-2 py-2 rounded-pill text-center" type="number" {...register("number", { min: 18, max: 99 })} />
                <br/>
                <input className="btn-lg my-2 btn-primary" type="submit" />
                </form>
                </div>
                
            </div>
        </div>
    );
};

export default AboutUs;