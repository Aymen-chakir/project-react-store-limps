import Nav from "../component/Navbar"
import emailjs from '@emailjs/browser';
import { useState } from "react";
function Contact() {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [message, setmessage] = useState('')

    const Sendemail = () => {
        const serviceId = "service_lep5myj"
        const templateId = "template_omtinf5"
        const puplikKey = "kG_Fi7RasrdtYUAa1"

        const templateParam = {
            name: name,
            email: email,
            message: message,
        };
        // send email
        emailjs
            .send(serviceId, templateId, templateParam, puplikKey)
            .then(() => {
                console.log("email sent successfully");

            })
            .catch((error) => {
                console.log(error);

            })
            .finally(() => {
                setemail("")
                setname("")
                setmessage("")
            })
        console.log(templateParam);

    }
    return (
        <div className=" h-screen flex flex-col gap-10 items-center">
            <Nav />
            <div className="w-[800px] h-[500px]  bg-[url('../limp-bg.jpg')] bg-cover shadow-lg rounded-4xl overflow-hidden flex flex-col justify-center items-center ">

                <div className="p-8">
                    <h2 className="text-3xl font-bold mb-6">Contact Us</h2>

                    <form className="flex flex-col gap-4">
                        <input
                            type="text"
                            id='name'
                            value={name}
                            placeholder="Your Name"
                            onChange={(e) => setname(e.target.value)}
                            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        <input
                            id="email"
                            value={email}
                            type="email"
                            placeholder="Your Email"
                            onChange={(e) => setemail(e.target.value)}
                            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        <textarea
                            placeholder="Your Message"
                            id="message"
                            value={message}
                            rows="5"
                            onChange={(e) => setmessage(e.target.value)}
                            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>

                        <button type="button" onClick={Sendemail} className=" text-white bg-[#856e4c55]  py-3 rounded-lg hover:bg-[#856e4c8c]  transition">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
