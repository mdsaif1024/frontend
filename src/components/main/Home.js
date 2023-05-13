import React from 'react'

const Home = () => {
  return (
    <>
  {/* Carousel wrapper */}
  <div
    id="carouselBasicExample"
    className="carousel slide carousel-fade"
    data-mdb-ride="carousel"
  >
    {/* Indicators */}
    <div className="carousel-indicators">
      <button
        type="button"
        data-mdb-target="#carouselBasicExample"
        data-mdb-slide-to={0}
        className="active"
        aria-current="true"
        aria-label="Slide 1"
      />
      <button
        type="button"
        data-mdb-target="#carouselBasicExample"
        data-mdb-slide-to={1}
        aria-label="Slide 2"
      />
      <button
        type="button"
        data-mdb-target="#carouselBasicExample"
        data-mdb-slide-to={2}
        aria-label="Slide 3"
      />
    </div>
    {/* Inner */}
    <div className="carousel-inner">
      {/* Single item */}
      <div className="carousel-item active">
        <img
          src="https://www.marketdesignco.com/hubfs/Brand%20Development%20Strategy.jpeg"
          className="d-block w-100"
          alt="Sunset Over the City"
        />
        <div className="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </div>
      {/* Single item */}
      <div className="carousel-item">
        <img
          src="https://assets-global.website-files.com/634e7aa49f5b025e1fd9e87b/634e7aa49f5b028063d9f059_YOU%20ARE%20YOUR%20OWN%20BRAND%20Brand%20Building%20concept.jpg"
          className="d-block w-100"
          alt="Canyon at Nigh"
        />
        <div className="carousel-caption d-none d-md-block">
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      {/* Single item */}
      <div className="carousel-item">
        <img
          src="https://www.namasteui.com/wp-content/uploads/2020/01/brand-building.jpg"
          className="d-block w-100"
          alt="Cliff Above a Stormy Sea"
        />
        <div className="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </div>
      </div>
    </div>
    {/* Inner */}
    {/* Controls */}
    <button
      className="carousel-control-prev"
      type="button"
      data-mdb-target="#carouselBasicExample"
      data-mdb-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-mdb-target="#carouselBasicExample"
      data-mdb-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  {/* Carousel wrapper */}
</>

  )
}

export default Home