import React from "react";
import { motion } from "framer-motion";

const Products = () => {
  const data = [
    {
      id: 1,
      img: "https://5.imimg.com/data5/OF/QX/RT/SELLER-36709685/pit-pot-furnace-500x500.jpg",
      title: "Pit Pot Furnace",
      price: "Rs 4 Lakhs / Unit",
      material: "Melting Material : Copper",
      power: "Power Source : Electric",
      type: "Type Of Furnace : Tilt",
      temp: "Max Temperature : 500-1000 degree Celsius",
      rated: "Rated Power (KW) : 15 kW",
      input: "Input Voltage (V) : 415 V",
      automation: "Automation Grade : Automatic",
    },
    {
      id: 2,
      img: "https://5.imimg.com/data5/PR/IJ/OS/SELLER-36709685/roller-hearth-furnace-500x500.jpg",
      title: "Roller Furnace",
      price: "Rs 10 Lakhs / Unit",
      material: "Melting Material : Copper",
      power: "Material Loading Capacity (T) : 3-4 Ton",
      type: "Type Of Furnace : Tilt",
      temp: "Max Temperature : 500-1000 degree Celsius",
      rated: "Rated Power (KW) : 15 kW",
      input: "Input Voltage (V) : 415 V",
      automation: "Automation Grade : Automatic",
    },
    {
      id: 3,
      img: "https://5.imimg.com/data5/TR/SX/QC/SELLER-36709685/gas-fire-furnace-500x500.jpg",
      title: "Gas Fire Furnace",
      price: "Rs 2 Lakhs / Unit",
      material: "Melting Material : Copper",
      power: "Power Source : Electric",
      type: "Type Of Furnace : Tilt",
      temp: "Max Temperature : 500-1000 degree Celsius",
      rated: "Rated Power (KW) : 15 kW",
      input: "Input Voltage (V) : 415 V",
      automation: "Automation Grade : Automatic",
    },
    {
      id: 4,
      img: "https://5.imimg.com/data5/ZR/EG/OK/ANDROID-36709685/product-jpeg-500x500.jpg",
      title: "Open Forging Furnace",
      price: "Rs 10 Lakhs / Unit",
      material: "Melting Material : Copper",
      power: "Power Source : Electric",
      type: "Type Of Furnace : Tilt",
      temp: "Max Temperature : 500-1000 degree Celsius",
      rated: "Rated Power (KW) : 15 kW",
      input: "Input Voltage (V) : 415 V",
      automation: "Automation Grade : Automatic",
    },
    {
      id: 5,
      img: "https://5.imimg.com/data5/KZ/UJ/CX/ANDROID-36709685/product-jpeg-500x500.jpg",
      title: "Heart Treatment Furnace",
      price: "Rs 10 Lakhs / Unit",
      material: "Melting Material : MS",
      power: "Power Source : Electric",
      type: "Type Of Furnace : Tilt",
      temp: "Max Temperature : 500-1000 degree Celsius",
      rated: "Rated Power (KW) : 15 kW",
      input: "Input Voltage (V) : 415 V",
      automation: "Automation Grade : Automatic",
    },
    {
      id: 6,
      img: "https://5.imimg.com/data5/KW/YV/CH/SELLER-36709685/electric-roller-hearth-furnace-500x500.png",
      title: "Electric Roller Hearth Furnace",
      price: "Rs 10 Lakhs / Unit",
      material: "Melting Material : Copper",
      power: "Power Source : Electric",
      type: "Type Of Furnace : Tilt",
      temp: "Max Temperature : 500-1000 degree Celsius",
      rated: "Rated Power (KW) : 15 kW",
      input: "Input Voltage (V) : 415 V",

      automation: "Automation Grade : Automatic",
    },
    {
      id: 7,
      img: "https://5.imimg.com/data5/VQ/QT/LW/ANDROID-36709685/product-jpeg-500x500.jpg",
      title: "Heat Treating And Forging Furnace",
      price: "Rs 10 Lakhs / Unit",
      material: "Melting Material : Copper",
      power: "Power Source : Electric",
      type: "Type Of Furnace : Tilt",
      temp: "Max Temperature : 500-1000 degree Celsius",
      rated: "Rated Power (KW) : 15 kW",
      input: "Input Voltage (V) : 415 V",

      automation: "Automation Grade : Automatic",
    },
    {
      id: 8,
      img: "https://5.imimg.com/data5/AG/GB/CQ/SELLER-36709685/open-forging-furnaces-500x500.jpg",
      title: "Open Forging Furnaces",
      price: "Rs 40,000 / Unit",
      material: "Melting Material : Copper",
      power: "Power Source : Electric",
      type: "Type Of Furnace : Tilt",
      temp: "Max Temperature : 1000-1500 degree Celsius",
      rated: "Rated Power (KW) : 30 kW",
      input: "Input Voltage (V) : 440 V",

      automation: "Automation Grade : Automatic",
    },
    {
      id: 9,
      img: "https://5.imimg.com/data5/KF/DT/CM/SELLER-36709685/industrial-heat-treatment-furnace-500x500.png",
      title: "Industrial Heat Treatment Furnace",
      price: "Rs 10 Lakhs / Unit",
      material: "Melting Material : Copper",
      power: "Power Source : Electric",
      type: "Type Of Furnace : Tilt",
      temp: "Max Temperature : 500-1000 degree Celsius",
      rated: "Rated Power (KW) : 15 kW",
      input: "Input Voltage (V) : 415 V",

      automation: "Automation Grade : Automatic",
    },
    {
      id: 10,
      img: "https://5.imimg.com/data5/PL/AK/LD/SELLER-36709685/muffle-furnace-500x500.png",
      title: "High Temperature Muffle Furnace",
      price: "Rs 80000 / Unit",
      material: "Melting Material : Ms",
      power: "Power Source : Electric",
      type: "Type Of Furnace : Tilt",
      temp: "Max Temperature : 500-1000 degree Celsius",
      rated: "Rated Power (KW) : 15 kW",
      input: "Input Voltage (V) : 415 V",

      automation: "Automation Grade : Automatic",
    },
    {
      id: 11,
      img: "https://5.imimg.com/data5/OD/MU/OP/ANDROID-36709685/product-jpeg-500x500.jpg",
      title: "Industrial Heat Treatment Furnaces",
      price: "Rs 7 Lakhs / Unit",
      material: "Melting Material : Copper",
      power: "Power Source : Electric",
      type: "Type Of Furnace : Tilt",
      temp: "Max Temperature : 500-1000 degree Celsius",
      rated: "Rated Power (KW) : 15 kW",
      input: "Input Voltage (V) : 415 V",

      automation: "Automation Grade : Automatic",
    },
    {
      id: 12,
      img: "https://5.imimg.com/data5/JR/RP/AM/SELLER-36709685/mg-salt-bath-furnaces-500x500.jpg",
      title: "MG Salt Bath Furnaces",
      price: "Rs 2.5 Lakhs / Unit",
      material: "Melting Material : Copper",
      power: "Power Source : Electric",
      type: "Type Of Furnace : Tilt",
      temp: "Max Temperature : 1500-2000 degree Celsius",
      rated: "Rated Power (KW) : 15 kW",
      input: "Input Voltage (V) : 415 V",
      Consumption: "Power Comsumpstion (KW) : 50 KW",
      automation: "Automation Grade : Automatic",
    },
    {
      id: 13,
      img: "https://5.imimg.com/data5/KW/YV/CH/SELLER-36709685/electric-roller-hearth-furnace-500x500.png",
      title: "Electric Roller Hearth Furnace",
      price: "Rs 2.5 Lakhs / Unit",
      material: "Melting Material : Copper",
      Loading: "Material Loading Capacity (T): 100Kg",
      power: "Power Source : Electric",
      type: "Type Of Furnace : Tilt",
      temp: "Max Temperature : 500-1000 degree Celsius",
      rated: "Rated Power (KW) : 15 kW",
      input: "Input Voltage (V) : 415 V",
      automation: "Automation Grade : Automatic",
    },
    {
      id: 14,
      img: "https://5.imimg.com/data5/RE/EK/AO/ANDROID-36709685/product-jpeg-500x500.jpg",
      title: "Box Furnaces",
      price: "Rs 80,000 / Unit",
      material: "Melting Material : Copper",
      power: "Power Source : Electric",
      Loading: "Material Loading Capacity (T): 100Kg",
      type: "Type Of Furnace : Tilt",
      temp: "Max Temperature : 500-1000 degree Celsius",
      rated: "Rated Power (KW) : 5 kW",
      input: "Input Voltage (V) : 415 V",

      automation: "Automation Grade : Automatic",
    },
    {
      id: 15,
      img: "https://5.imimg.com/data5/KW/XN/KK/SELLER-36709685/electric-aluminum-heat-treatment-furnace-500x500.jpg",
      title: "Thermal Sytech Furnaces",
      price: "Rs 7 Lakhs / Unit",
      material: "Melting Material : Copper",
      power: "Power Source : Electric",
      type: "Type Of Furnace : Fix",
      Loading: "Material Loading Capacity(T) : 2-4 Ton",
      rated: "Rated Power (KW) :80 kW",
      input: "Input Voltage (V) : 440 V",

      automation: "Automation Grade : Automatic",
    },
    {
      id: 16,
      img: "https://img.directindustry.com/images_di/photo-g/21762-14916681.jpg",
      title: "Pre Heating Furnaces",
      price: "Rs 80,000 / Unit",
      material: "Melting Material : Copper",
      power: "Power Source : Electric",
      Loading: "Material Loading Capacity (T): 100Kg",
      type: "Type Of Furnace : Tilt",
      temp: "Max Temperature : 500-1000 degree Celsius",
      rated: "Rated Power (KW) : 5 kW",
      input: "Input Voltage (V) : 415 V",

      automation: "Automation Grade : Automatic",
    },
    {
      id: 17,
      img: "https://img.directindustry.com/images_di/photo-g/21762-14916681.jpg",
      title: "Dryer",
      price: "Rs 80,000 / Unit",
      material: "Melting Material : Copper",
      power: "Power Source : Electric",
      Loading: "Material Loading Capacity (T): 100Kg",
      type: "Type Of Furnace : Tilt",
      temp: "Max Temperature : 500-1000 degree Celsius",
      rated: "Rated Power (KW) : 5 kW",
      input: "Input Voltage (V) : 415 V",

      automation: "Automation Grade : Automatic",
    },
    {
      id: 18,
      img: "https://img.directindustry.com/images_di/photo-g/21762-14916681.jpg",
      title: "Conveyor",
      price: "Rs 80,000 / Unit",
      material: "Melting Material : Copper",
      power: "Power Source : Electric",
      Loading: "Material Loading Capacity (T): 100Kg",
      type: "Type Of Furnace : Tilt",
      temp: "Max Temperature : 500-1000 degree Celsius",
      rated: "Rated Power (KW) : 5 kW",
      input: "Input Voltage (V) : 415 V",

      automation: "Automation Grade : Automatic",
    },
    {
      id: 19,
      img: "https://img.directindustry.com/images_di/photo-g/21762-14916681.jpg",
      title: "Trolley",
      price: "Rs 80,000 / Unit",
      material: "Melting Material : Copper",
      power: "Power Source : Electric",
      Loading: "Material Loading Capacity (T): 100Kg",
      type: "Type Of Furnace : Tilt",
      temp: "Max Temperature : 500-1000 degree Celsius",
      rated: "Rated Power (KW) : 5 kW",
      input: "Input Voltage (V) : 415 V",

      automation: "Automation Grade : Automatic",
    },
  ];
  return (
    <>
      <div className="row my-5 pop container center cardsServices">
        <div className="col-12 center">
          <span className="center fs-2  stroke p-1 ls-2">Furnace</span>
          <div className="row">
            {data.map((item) => (
              <div className="col-12 col-md-6 col-lg-4 my-3">
                <motion.div
                  initial={{
                    y: item.id % 2 === 0 ? "-100vh" : "100vh",
                    opacity: 0,
                  }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, bounce: 0.5, type: "spring" }}
                  // style={{ height: "10rem" }}
                  whileHover={{ scale: 1.04 }}
                  className="card shadow-out bg-grey py-3 px-2"
                >
                  <div className="center furnaceImg p-2">
                    <img
                      src={item.img}
                      className="img-fluid p-2"
                      alt="..."
                      // style={{ height: "200px", width: "200px" }}
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title center dim">{item.title}</h5>
                    <p className="card-text mx-3">{item.price}</p>
                    <p className="card-text mx-3">{item.material}</p>
                    <p className="card-text mx-3">{item.power}</p>
                    <p className="card-text mx-3">{item.Loading}</p>
                    <p className="card-text mx-3">{item.type}</p>
                    <p className="card-text mx-3">{item.temp}</p>
                    <p className="card-text mx-3">{item.rated}</p>
                    <p className="card-text mx-3">{item.input}</p>
                    <p className="card-text mx-3">{item.Consumption}</p>
                    <p className="card-text mx-3">{item.automation}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
