import logo from './assets/logo.svg'
import styles from './footer.module.css'
function Footer() {
    return (
        <>
            <div className={`container-fluid ${styles.bg} bg-dark`}>
                <div className="row align-items-start justify-content-around">
                    <div className="col-12 col-md-4 text-center">
                        <img src={logo} className="img-fluid" alt="Company Logo"></img>
                    </div>
                    <div className="col-12 col-md-2">
                        <h3 >Get in touch</h3>
                        <p>contact@opptunity.com</p>
                        <p>HR@opptunity.com</p>
                    </div>
                    <div className="col-12 col-md-2">
                        <h3>Opportunities</h3>
                        <p>Start a new life in Canada</p>
                        <p>Hire abroad effortlessly</p>
                        <p>Become a provider</p>
                    </div>
                    <div className="col-12 col-md-2">
                        <h3>About us</h3>
                        <p>Who are we?</p>
                        <p>FAQs</p>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Footer