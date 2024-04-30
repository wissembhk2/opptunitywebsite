import logo from './assets/logo.svg'

function NavBar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand m-3" href="/"><img src={logo} alt="Logo"></img></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-between  " id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-auto  ">
                        <li class="nav-item mx-3">
                            <a class="nav-link active " aria-current="page" href="/employers">Employers</a>
                        </li>
                        <li class="nav-item mx-3">
                            <a class="nav-link active" aria-current="page" href="#">Individuals</a>
                        </li>
                        <li class="nav-item mx-3">
                            <a class="nav-link active" aria-current="page" href="/solution">Our solution</a>
                        </li>
                        <li class="nav-item mx-3">
                            <a class="nav-link active" aria-current="page" href="#">About us</a>
                        </li>
                    </ul>
                    <form class="d-flex ms-lg-auto  justify-content-center">
                        {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"> */}
                        <button class="btn btn-primary m-3" type="submit">Join the waitlist</button>
                    </form>
                </div>
            </div>
        </nav>

    )
}
export default NavBar;