
import carrousel_one from './static/fresh-veg-1.jpg'
import carrousel_two from './static/fresh-veg-2.jpg'
import main_carousel from './static/main-image-carol.png'
export function Carousel(){

return (<>
<div className="col">
<div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src={carrousel_one} className="d-block w-100 h-50 img-fluid" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={carrousel_two} className="d-block w-100 h-50 img-fluid" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={main_carousel} className="d-block w-100 h-50 img-fluid" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

</div>

</>)

}