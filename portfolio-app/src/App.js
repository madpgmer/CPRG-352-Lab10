
import './App.css';

function App() {
  return (
    <>
    <div className="App">
      <header className="text-white bg-dark">
        <div className="container py-5">
            <div className="row">
                <div className="col-xs-3 col-lg-2 text-center">
                    <img src="https://www.seekpng.com/png/detail/110-1100707_person-avatar-placeholder.png"
                        alt="Person - Avatar Placeholder@seekpng.com" className="border border-5 rounded-circle img-fluid" style={{width: '150px', height: '150px'}}/>
                </div>
                <div className="col text-center text-lg-start">
                    <h1>Joe Blow</h1>

                    <p className="lead">Software development student at SAIT (Southern Alberta Institute of Technology).</p>

                    <ul className="list-inline">
                        <li className="list-inline-item my-2"><a href="joeblow@gmail.com" className="fs-5 link-light text-decoration-none"><i
                                    className="bi bi-envelope pe-1"></i>
                                <span className="text-center">E-mail</span></a></li>
                        <li className="list-inline-item my-2"><a href="www.linkedin.com" className="fs-5 link-light text-decoration-none"><i
                                    className="bi bi-linkedin pe-1"></i>
                                LinkedIn</a></li>
                        <li className="list-inline-item my-2"><a href="www.github.com" className="fs-5 link-light text-decoration-none"><i
                                    className="bi bi-github pe-1"></i>
                                GitHub</a></li>
                    </ul>
                </div>
            </div>
        </div>
        
       
    </header>
    <main className="container">
        <div className="row mt-3">
            <div className="col-md">
                <div className="card">
                    <div className="card-body">
                        <h2 className="card-title">Work Experience</h2>
                        <ul className="list-unstyled">
                            <li>
                                <h6 className="fw-bold">Senior Web Developer / Digital Agency 2016-2020</h6>
                                <p>Phasellus et tellus iaculis, interdum augue vel, luctus nulla. Aenean viverra,
                                    magna
                                    a
                                    ultricies
                                    elementum, dui mi tristique ligula, non euismod leo mauris ac metus.</p>
                            </li>
                            <li>
                                <h6 className="fw-bold">Web Developer / Big Firm 2010-2015</h6>
                                <p>Mauris volutpat, ex condimentum fringilla imperdiet, nulla turpis semper diam, ac
                                    semper
                                    risus urna quis
                                    libero. Fusce non nunc quam. Ut vulputate, magna eget molestie luctus, elit est
                                    posuere
                                    lorem, quis
                                    dapibus dolor felis id mi.</p>
                            </li>
                            <li>
                                <h6 className="fw-bold">Junior Web Developer / Websites 'R' Us 2004-2009</h6>
                                <p>Sed eu turpis placerat, posuere odio a, viverra velit. Pellentesque habitant
                                    morbi
                                    tristique
                                    senectus et
                                    netus et malesuada fames ac turpis egestas.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-md">
                <div className="card">
                    <div className="card-body">
                        <h2 className="card-title">Education</h2>
                        <ul className="list-unstyled">
                            <li>
                                <h6 className="fw-bold">Computer Science / University Name 2001-2004</h6>
                                <p>Sed et ornare quam. Cras scelerisque ex ultricies neque sodales tristique. Phasellus
                                    mattis
                                    dui ut enim
                                    tincidunt auctor. Maecenas euismod, orci eget varius elementum, nunc massa dignissim
                                    sapien,
                                    ac sagittis
                                    libero dolor vitae elit.</p>
                            </li>
                            <li>
                                <h6 className="fw-bold">Testville High School 1994-2000</h6>
                                <p>Aenean nisl enim, dictum in odio ut, suscipit efficitur diam. Nam nec velit a odio
                                    porta
                                    efficitur nec at
                                    magna.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col-md mb-5">
                <div className="card">
                    <div className="card-body">
                        <h2 className="card-title">Technology Summary</h2>
                        <ul className="list-unstyled">
                            <li>
                                <h6 className="fw-bold">Senior Web Developer / Digital Agency 2016-2020</h6>
                                <p>Phasellus et tellus iaculis, interdum augue vel, luctus nulla. Aenean viverra,
                                    magna
                                    a
                                    ultricies
                                    elementum, dui mi tristique ligula, non euismod leo mauris ac metus.</p>
                            </li>
                            <li>
                                <h6 className="fw-bold">Web Developer / Big Firm 2010-2015</h6>
                                <p>Mauris volutpat, ex condimentum fringilla imperdiet, nulla turpis semper diam, ac
                                    semper
                                    risus urna quis
                                    libero. Fusce non nunc quam. Ut vulputate, magna eget molestie luctus, elit est
                                    posuere
                                    lorem, quis
                                    dapibus dolor felis id mi.</p>
                            </li>
                            <li>
                                <h6 className="fw-bold">Junior Web Developer / Websites 'R' Us 2004-2009</h6>
                                <p>Sed eu turpis placerat, posuere odio a, viverra velit. Pellentesque habitant
                                    morbi
                                    tristique
                                    senectus et
                                    netus et malesuada fames ac turpis egestas.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </main>
    </div>
    </>
  );
}

export default App;
