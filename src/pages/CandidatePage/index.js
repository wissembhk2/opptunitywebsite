import NavBar from "../../components/NavBar";
import styles from './candidate.module.css';
import face1 from './assets/firstgirl.png';
import face2 from './assets/firstgirl.png';
import face3 from './assets/firstgirl.png';
import comp1 from './assets/firstgirl.png';
import comp2 from './assets/firstgirl.png';
import loop from './assets/firstgirl.png';
import education from './assets/firstgirl.png';
import world from './assets/firstgirl.png';
import woman from './assets/firstgirl.png';
import computer from './assets/computer.png';
import thumbup from './assets/thumbup.png'
import partners from './assets/partners.png'
import Footer from "../../components/Footer";


function CandidatePage() {
    return (
        <>
            <NavBar />

            <center><div className={`d-flex justify-content-center align-items-start w-100 `}>
                <div className="container">
                    <div className="row">
                        {/* Text Column - Full width on small screens, adjusts as needed on larger screens */}
                        <div className="col-12 col-md-8  mt-5 text-start">
                            <h1>Land a PSW position in Canada!</h1>
                            <p>As a candidate, Opptunity unlocks a world of possibilities. We connect you with exciting opportunities, assess your skills, and provide upskilling resources to boost your resume. Don't just find a job, find your perfect career path.</p>
                            <input type="button" className={`${styles.btn} btn btn-primary `} value='Start the process' />
                        </div>

                        {/* Image Column - Full width on small screens, adjusts as needed on larger screens */}
                        <div className="col-12 col-md-4">
                            <img src={comp2} className="img-fluid" alt="Company Image"></img>
                        </div>
                    </div>
                </div>
            </div>
            </center>




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

            <center><div className={`d-flex  w-50 mt-5 text-start justify-content-between`}>
                <div>
                    <h2>250K</h2>
                    <p>More writing and <br />stuff.</p>
                </div>
                <div>
                    <h2>250K</h2>
                    <p>More writing and <br /> stuff.</p>
                </div>
                <div>
                    <h2>250K</h2>
                    <p>More writing and <br />stuff.</p>
                </div>
            </div></center>



            <center><div className={`d-flex justify-content-center w-75 ${styles.employers}`}>
                <div className="container">
                    <div className="row">
                        {/* Text Column - takes full width on small screens, and an adjusted width on larger screens */}
                        <div className="col-12 col-lg-8  text-start">
                            <h1>Why Opptunity</h1>
                            <p className="miniTitle">Scale your business with the best talents.</p>
                            <p>Opptunity bridges borders. We assist with visa sponsorships, ensuring a smooth relocation process for talented individuals. Recruiters can tap into a global pool of talent, while candidates can explore career opportunities worldwide.</p>
                            <input type="button" className={`${styles.btn} btn btn-primary `} value='Candidate space' />
                        </div>

                        {/* Image Column - takes full width on small screens, and an adjusted width on larger screens */}
                        <div className="col-12 col-lg-4">
                            <img src={thumbup} alt="Thumbs Up" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
            </center>









            <div className={`${styles.quotes}`}>
                <h1 className={`${styles.quotestitle}`}>Business Quotes</h1>
                <p>Opptunity helped us elevate our hiring process extensively, I highly recommend their services</p>
                <div>
                    <img></img>
                    <p>Manager by apple california inc.</p>
                </div>
            </div>


            <center><div className={`d-flex  mt-5 align-items-stretch text-start w-100 align-items-center container  `}>
                <div className="row">

                    <img src={partners} className="col-12 col-md-6"></img>


                    <div className=" col-md-6 col-12 mt-5 ">
                        <h2 className="mt-3">Trusted partners</h2>
                        <p>Scale your buisness with the best talents</p>
                        <p>
                            At Opptunity, we recognize the power of collaboration. That's why we partner with leading organizations who share our passion for fostering exceptional talent experiences. Together, we combine our expertise to offer a comprehensive suite of services, from skills assessments and upskilling resources to seamless visa sponsorship solutions.                        </p>
                    </div>
                </div>

            </div></center>
            <Footer />
        </>
    )
}
export default CandidatePage