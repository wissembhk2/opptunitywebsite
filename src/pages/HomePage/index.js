import NavBar from "../../components/NavBar";
import matching from './assets/matching.gif'
import styles from './homepage.module.css'
import face1 from './assets/face1.png'
import face2 from './assets/face2.png'
import face3 from './assets/face3.png'
import comp1 from './assets/component1.png'
import comp2 from './assets/component2.png'
import loop from './assets/loop.png'
import education from './assets/education.png'
import world from './assets/world.png'
import woman from './assets/woman.png'
import Footer from "../../components/Footer";


function HomePage() {
    return (
        <>
            <NavBar />
            <div className={`${styles.match} d-flex justify-content-center`}>
                <img src={matching} className="img-fluid" alt="Matching Image"></img>
            </div>

            <div className={`d-flex justify-content-center mt-5`}>
                <input className={`${styles.btn} btn btn-primary m-2`} type="button" value='Candidate space' />
                <input type="button" className="btn btn-outline-primary m-2" value='Employer space' />

            </div>
            <div className={`d-flex justify-content-around ${styles.partnersband} mb-5`}>
                <div className="col-12 col-md-9 d-flex justify-content-center flex-wrap align-items-center ">
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
                <div className="d-flex justify-content-center col-11 col-md-8">
                    <div className="text-center">
                        <span className={`${styles.rev}`}>
                            Transform your
                            <img src={face3} alt="Face 3" className={`mx-2  ${styles.faces}`} />
                            workforce with AI-powered upskilling, skill
                            <img src={face2} alt="Face 2" className={`mx-2 ${styles.faces}`} />
                            insights
                            <img src={face1} alt="Face 1" className={`mx-2 ${styles.faces}`} />
                            and precision hiring.
                        </span>
                    </div>
                </div>
            </center>


            <center><div className={`d-flex  align-items-stretch w-75   text-start mt-5 `}>
                <div className="row w-100">
                    {/* Image Column - takes full width on small screens, adjusts as needed on larger screens */}
                    <div className="col-12 col-md-6 ">
                        <img src={comp1} alt="Company Presentation" className="img-fluid  " />
                    </div>

                    {/* Text Column - takes full width on small screens, adjusts as needed on larger screens */}
                    <div className="col-12 col-md-6  mt-5">
                        <h1 className="Titles">Upskill</h1>
                        <p className="miniTitle">Scale your business with the best talents.</p>
                        <p>Opptunity empowers you to address skills gaps, optimize your talent strategy, and drive business growth through our AI-powered upskilling and recruitment platform.All you have to do is follow the guide! </p>
                        <input type="button" className="btn btn-outline-primary mt-2 mb-2" value="Employer space" />
                    </div>
                </div>
            </div></center>


            <center> <div className={`d-flex justify-content-between align-items-stretch w-75 mt-5 `}>
                <div className="row w-100">
                    {/* Text Column - Full width on small screens, adjusts as needed on larger screens */}
                    <div className="col-12 col-md-6 text-start">
                        <h1 className="Titles">Hire</h1>
                        <p className="miniTitle">Scale your business with the best talents.</p>
                        <p>Our sophisticated skills taxonomy goes beyond generic job titles to reveal your organization's specific strengths and areas for development, and streamline your hiring process with AI-powered matching</p>
                        <input type="button" className={`${styles.btn} btn btn-primary mt-2 mb-2`} value="Candidate space" />
                    </div>

                    {/* Image Column - takes full width on small screens, adjusts as needed on larger screens */}
                    <div className="col-12 col-md-6">
                        <img src={comp2} alt="Company Collaboration" className="img-fluid" />
                    </div>
                </div>
            </div></center>


            <div className={`${styles.quotes} mt-5 text-start`}>
                <h1 className={`${styles.quotestitle}`}>Business Quotes</h1>
                <p>Opptunity helped us elevate our hiring process extensively, and upskill our workforce to adapt to market changes.</p>
                <div>
                    <img></img>
                    <p>Manager by apple california inc.</p>
                </div>
            </div>
            <div className="mt-5 mb-5">
                <h1 className="text-center Titles">What we do</h1>
                <div className="d-flex flex-column flex-md-row justify-content-center mt-5">
                    <center><div className={`${styles.composent} ${styles.composent1}  mb-4 w-75 d-block d-md-inline-block text-start`}>
                        <img src={loop} alt="Candidate sourcing" className="mb-3 img-fluid"></img>
                        <h4 className="mb-3 Titles">Skills Taxonomy</h4>
                        <p>We use data insights to create a dynamic skills taxonomy for companies</p>
                    </div></center>

                    <center><div className={`${styles.composent}  mb-4 w-75 d-block d-md-inline-block text-start`}>
                        <img src={world} alt="Visa Sponsorship" className="mb-3 img-fluid"></img>
                        <h4 className="mb-3 Titles">Upskilling</h4>
                        <p >We use AI-assisted upskilling to allow employees to learn on the job </p>
                    </div></center>

                    <center>  <div className={`${styles.composent}  w-75 d-block d-md-inline-block text-start`}>
                        <img src={education} alt="Continuous upskilling" className="mb-3 img-fluid"></img>
                        <h4 className="mb-3 Titles">Precision Hiring</h4>
                        <p>We help companies source reliable talent based on the skills taxonomy</p>
                    </div></center>
                </div>
            </div>



            <center>
                <div className={`col-11 col-md-9 mx-auto text-center d-flex flex-column mt-5 mb-5`}>
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


            <div>
                <h1 className="text-center mb-5 Titles">Frequently asked questions</h1>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-12 col-md-6 text-center">
                            <img src={woman} alt="FAQ" className="img-fluid px-md-5 mx-auto" />
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="p-3 text-start">
                                <div className="d-flex align-items-center border-bottom pb-4 justify-content-between  mt-3">
                                    <p className="m-0">What benefits do I get as an Enterprise?</p>
                                    <img src={process.env.PUBLIC_URL + '/icons/arrow.svg'} alt="arrow" className="mx-3"></img>

                                </div>

                                <div className="d-flex align-items-center border-bottom pb-4 justify-content-between  mt-3">
                                    <p className="m-0">How can I improve my chances of getting a job?</p>
                                    <img src={process.env.PUBLIC_URL + '/icons/arrow.svg'} alt="arrow" className="mx-3"></img>

                                </div>

                                <div className="d-flex align-items-center border-bottom pb-4 justify-content-between  mt-3">
                                    <p className="m-0">How much will Opptunity charge me?</p>
                                    <img src={process.env.PUBLIC_URL + '/icons/arrow.svg'} alt="arrow" className="mx-3"></img>

                                </div>

                                <div className="d-flex align-items-center border-bottom pb-4 justify-content-between  mt-3">
                                    <p className="m-0">What happens after I apply for a demo?</p>
                                    <img src={process.env.PUBLIC_URL + '/icons/arrow.svg'} alt="arrow" className="mx-3"></img>

                                </div>
                                <div className="d-flex align-items-center border-bottom pb-4 justify-content-between  mt-3">
                                    <p className="m-0">Can I screen candidates based on specific criteria?</p>
                                    <img src={process.env.PUBLIC_URL + '/icons/arrow.svg'} alt="arrow" className="mx-3"></img>

                                </div>
                                <div className="d-flex align-items-center border-bottom pb-4 justify-content-between mt-3">
                                    <p className="m-0">What data privacy measures do you have in place?</p>
                                    <img src={process.env.PUBLIC_URL + '/icons/arrow.svg'} alt="arrow" className="mx-3"></img>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}
export default HomePage
