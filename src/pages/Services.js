import React from 'react'

const Services = () => {
  return (
    <div className="container my-5 pop center">
        <div
          className="cards py-4 d-flex shadow-out p-2 center"
          style={{ width: "55rem" }}
        >
          <div className="product_images col-5 center p-3 ">
            <img
              className="product_img shadoww-in p-2"
              src="https://5.imimg.com/data5/OF/QX/RT/SELLER-36709685/pit-pot-furnace-500x500.jpg"
              alt=""
            />
          </div>
          <div className="card-body col-7">
            <h2>Pit Pot Furnace</h2>
            <span className="">Rs 4 Lakhs / Unit</span>
            <br />
            <span className="">Melting Material : </span>
            <span>Copper</span>
            <br />
            <span className="">Power Source : </span>
            <span>Electric</span>
            <br />
            <span className="">Type Of Furnace : </span>
            <span>Tilt</span>
            <br />
            <span className=""> Max Temperature : </span>
            <span>500-1000 degree Celsius</span>
            <br />
            <span className="">Rated Power (KW) : </span>
            <span>15 kW</span>
            <br />
            <span className="">Input Voltage (V) : </span> <span>415 V</span>
            <br />
            <span className="">Automation Grade : </span> <span>Automatic</span>
            <br />
          </div>
        </div>
      </div>
  )
}

export default Services