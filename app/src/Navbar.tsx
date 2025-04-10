import "./Navbar.css";
import companyLogo from "./static/logo.svg";
export function Navbar() {
  function handler() {
    alert("I was Clicked");
  }

  return (
    <>
      <div className="col nav-principal" style={{ background: "white" }}>
        <nav className="navbar navbar-expand-sm bg-body-tertiary">
          <div className="container-sm">
            <a className="navbar-brand" href="#">
              <img src={companyLogo} alt="" className="logo"/>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                  
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Produtos
                  </a>
                  
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Servicos
                  </a>
                  
                </li>
              </ul>
        
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
