import PageStructure from "../PageStructure";

const Contact = () => (
    <PageStructure>
         <div id="picture">
                <div id="contacts">
                    <div class="contact">
                        <a href="https://www.linkedin.com/in/pauloteixeiraoliveira/"> <img src="./assets/linkedin.svg"
                                alt="Icone do Linkedin"/>linkedin.com/pauloteixeiraoliveira</a>

                    </div>
                    <div class="contact">

                        <a href="https://github.com/paulinhoteixeira"><img src="./assets/github.svg"
                                alt=""/>github.com/paulinhoteixeira</a>
                    </div>
                    <div class="contact">


                        <a href="mailto:pauloteixeira.ti@hotmail.com"><img src="./assets/email.png" alt=""/> pauloteixeira.ti@hotmail.com</a>
                    </div>

                    <div class="contact">

                        <a href="tel:11999480172"><img src="./assets/phone.png" alt=""/> 11 999 480 172</a>
                    </div>

                </div>


            </div>
    </PageStructure>
)

export default Contact;