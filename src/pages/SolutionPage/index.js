import NavBar from "../../components/NavBar";
import styles from './solutionpage.module.css';
import face1 from './assets/firstgirl.png';
import face2 from './assets/firstgirl.png';
import face3 from './assets/firstgirl.png';
import comp1 from './assets/firstgirl.png';
import comp2 from './assets/firstgirl.png';
import loop from './assets/loop.png'
import education from './assets/education.png'
import world from './assets/world.png'
import woman from './assets/firstgirl.png';
import computer from './assets/computer.png';
import thumbup from './assets/thumbup.png'
import partners from './assets/partners.png'
import Footer from "../../components/Footer";
import ProcessMap from "../../components/Process";

function SolutionPage() {
    return (
        <>
            <NavBar />

            <center><div className={`d-flex justify-content-center mt-5 mb-5 align-items-start  w-100 `}>
                <div className="container ">
                    <div className="row  justify-content-center">
                        {/* Text Column - Full width on small screens, adjusts as needed on larger screens */}
                        <div className="col-11 col-md-6  mt-5 text-start ">
                            <h1 className="Titles">Bridging workforce gaps worldwide</h1>
                            <p>Optunity empowers businesses to close skills gaps, optimize talent development, and find the ideal candidates both locally and globally. Our platform combines robust skills assessment, personalized upskilling, and precision matching.</p>
                            <input type="button" className={`${styles.btn} btn btn-primary `} value='Start the process' />
                        </div>

                        {/* Image Column - Full width on small screens, adjusts as needed on larger screens */}
                        <div className="col-11 col-md-4">
                            <img src={comp2} className="img-fluid " alt="Company Image"></img>
                        </div>
                    </div>
                </div>
            </div>
            </center>



            <div className={`d-flex justify-content-around ${styles.partnersband} mb-5`}>
                <div className="col-11 col-md-9 d-flex justify-content-center flex-wrap align-items-center ">
                    <img src={process.env.PUBLIC_URL + '/logos/meta.svg'} alt="Meta Logo" className="mx-3"></img>
                    <img src={process.env.PUBLIC_URL + '/logos/cc.svg'} alt="CC Logo" className="mx-3" ></img>
                    <img src={process.env.PUBLIC_URL + '/logos/disc.svg'} alt="Disc Logo" className="mx-3"></img>
                    <img src={process.env.PUBLIC_URL + '/logos/victus.svg'} alt="Victus Logo" className="mx-3"></img>
                    <img src={process.env.PUBLIC_URL + '/logos/aax.svg'} alt="AAX Logo" className="mx-3"></img>
                    <img src={process.env.PUBLIC_URL + '/logos/vrt.svg'} alt="VRT Logo" className="mx-3"></img>
                    <img src={process.env.PUBLIC_URL + '/logos/box.svg'} alt="Box Logo" className="mx-3"></img>
                </div>
            </div>

            <center>
                <div className="mt-5 mb-5  w-75">
                    <h1 className="text-center Titles">What we do</h1>
                    <div className="d-flex flex-column flex-md-row justify-content-center mt-5">
                        <center><div className={`${styles.composent} ${styles.composent1}  mb-4 w-75 d-block d-md-inline-block text-start`}>
                            <img src={loop} alt="Candidate sourcing" className="mb-3 img-fluid"></img>
                            <h4 className="mb-3 Titles">Candidate sourcing</h4>
                            <p>We combine proven tutorial practices, which take advantage of the gains made in the Focus</p>
                        </div></center>

                        <center><div className={`${styles.composent}  mb-4 w-75 d-block d-md-inline-block text-start`}>
                            <img src={world} alt="Visa Sponsorship" className="mb-3 img-fluid"></img>
                            <h4 className="mb-3 Titles">Visa Sponsorship</h4>
                            <p>We combine proven tutorial practices, which take advantage of the gains made in the Focus</p>
                        </div></center>

                        <center>  <div className={`${styles.composent}  w-75 d-block d-md-inline-block text-start`}>
                            <img src={education} alt="Continuous upskilling" className="mb-3 img-fluid"></img>
                            <h4 className="mb-3 Titles">Continuous upskilling</h4>
                            <p>We combine proven tutorial practices, which take advantage of the gains made in the Focus</p>
                        </div></center>


                    </div>
                </div>
            </center>

            <center><div className="col-11 col-md-9">
                <ProcessMap />

            </div></center>

            <center><div className={`d-flex  mt-5 align-items-stretch text-center w-100 align-items-center container  `}>
                <div className="row">

                    <img src={partners} className="col-12 col-md-6"></img>


                    <div className=" col-md-6 col-12 mt-5 ">
                        <h2 className="mt-3 Titles text-start">Trusted partners</h2>
                        <p className=" text-start miniTitle">Scale your buisness with the best talents</p>
                        <p className=" text-start">
                            At Opptunity, we recognize the power of collaboration. That's why we partner with leading organizations who share our passion for fostering exceptional talent experiences. Together, we combine our expertise to offer a comprehensive suite of services, from skills assessments and upskilling resources to seamless visa sponsorship solutions.
                        </p>
                    </div>
                </div>

            </div></center>




            <center>
                <div className={`col-11 col-md-9 mx-auto text-center d-flex flex-column mt-5`}>
                    <h1 ><span className={`${styles.test} Titles`}>Waitlist</span></h1>
                    <p className="text-start">To find out more about the services offered, including a free assessment meeting, use the form below. We will contact you quickly!</p>
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" />
                        <label for="floatingInput">Email address</label>
                    </div>


                    <div class="row g-2">
                        <div class="col-md">
                            <div class="form-floating">
                                <input type="email" class="form-control" id="floatingInputGrid" />
                                <label for="floatingInputGrid">Prenom</label>
                            </div>
                        </div>
                        <div class="col-md">
                            <div class="form-floating">
                                <input type="email" class="form-control" id="floatingInputGrid" />
                                <label for="floatingInputGrid">Nom</label>
                            </div>
                        </div>

                        <div class={`form-floating `}>
                            <textarea class={`form-control ${styles.textarea}`} placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
                            <label for="floatingTextarea2">Message</label>
                        </div>
                        <center><input className={`  btn btn-primary   `} type="button" value='Send message' /></center>

                    </div>

                    <div className="d-flex justify-content-around mt-5">
                        <div className="d-flex align-items-center">
                            <img src={process.env.PUBLIC_URL + '/icons/mail.svg'} className="m-0 p-0"></img>
                            <p className="m-0 p-0">info@mesm.com</p>
                        </div>
                        <div className="d-flex align-items-center">
                            <img src={process.env.PUBLIC_URL + '/icons/phone.svg'}></img>
                            <p className="m-0 p-0">877-255-7945</p>
                        </div>
                        <div className="d-flex align-items-center">
                            <img src={process.env.PUBLIC_URL + '/icons/location.svg'}></img>
                            <p className="m-0 p-0">Canada</p>
                        </div>
                    </div>

                </div >
            </center>




            <Footer />
        </>
    )
}
export default SolutionPage