import NavBar from "../../components/NavBar";
import styles from './employer.module.css';
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
import partners from './assets/partners.png'

import Footer from "../../components/Footer";


function EmployerPage() {
    return (
        <>
            <NavBar />
            <center><div className={`d-flex justify-content-center align-items-start w-100  mt-5`}>
                <div className="container">
                    <div className="row">
                        {/* Text Column - Full width on small screens, adjusts as needed on larger screens */}
                        <div className="col-12 col-md-8  mt-5 text-start">
                            <h1 className="Titles">Take control, improve your workforce</h1>
                            <p>Our platform delivers tailored learning plans, leveraging AI-assistance for efficiency.  Candidates can upskill in language proficiency, technical skills, and  industry-specific knowledge essential for success in your workplace.</p>
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
                    <h2 className="Titles">250K</h2>
                    <p>More writing and <br />stuff.</p>
                </div>
                <div>
                    <h2 className="Titles">250K</h2>
                    <p>More writing and <br /> stuff.</p>
                </div>
                <div>
                    <h2 className="Titles">250K</h2>
                    <p>More writing and <br />stuff.</p>
                </div>
            </div></center>

            <center><div className={`d-flex justify-content-center w-75 ${styles.employers}`}>
                <div className="container">
                    <div className="row">
                        {/* Text Column - takes full width on small screens, and an adjusted width on larger screens */}
                        <div className="col-12 col-lg-8  text-start">
                            <h1 className="Titles">Why Opptunity</h1>
                            <p className="miniTitle">Scale your business with the best talents.</p>
                            <p>This clarity of a dynamic skills taxonomy enables you to proactively upskill your existing talent, identify future skills needs, and streamline your hiring process with AI-powered matching that finds candidates with the exact skills you require.</p>
                            <input type="button" className={`${styles.btn} btn btn-primary `} value='Candidate space' />
                        </div>

                        {/* Image Column - takes full width on small screens, and an adjusted width on larger screens */}
                        <div className="col-12 col-lg-4">
                            <img src={computer} className="img-fluid" alt="Opptunity Platform" />
                        </div>
                    </div>
                </div>
            </div>
            </center>








            <div className={`${styles.quotes} mt-5 text-start`}>
                <h1 className={`${styles.quotestitle} Titles`}>Business Quotes</h1>
                <p>Opptunity helped us elevate our hiring process extensively, and upskill our workforce to adapt to market changes.</p>
                <div>
                    <img></img>
                    <p>Manager by apple california inc.</p>
                </div>
            </div>


            <center><div className={`d-flex  mt-5 align-items-stretch text-start w-100 align-items-center container  `}>
                <div className="row">

                    <img src={partners} className="col-12 col-md-6"></img>


                    <div className=" col-md-6 col-12 mt-5 ">
                        <h2 className="mt-3 Titles">Trusted partners</h2>
                        <p className="miniTitle">Scale your buisness with the best talents</p>
                        <p>
                            At Opptunity, we believe in joining forces with people who can bring something to the table and share our values – people like you and organizations like yours. That is why we have curated a network of reliable and respected partners to ensure the right fit for your short- and long-term needs.                         </p>
                    </div>
                </div>

            </div></center>
            <Footer />
        </>
    )
}
export default EmployerPage