import { createContext } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const dataFurnace = [
    {
      id: 1,
      img: "https://5.imimg.com/data5/OF/QX/RT/SELLER-36709685/pit-pot-furnace-500x500.jpg",
      title: "Pit Pot Furnace",
      // price: "Rs 4 Lakhs / Unit",
      // material: "Melting Material : Copper",
      // power: "Power Source : Electric",
      // type: "Type Of Furnace : Tilt",
      // temp: "Max Temperature : 500-1000 degree Celsius",
      // rated: "Rated Power (KW) : 15 kW",
      // input: "Input Voltage (V) : 415 V",
      // automation: "Automation Grade : Automatic",
    },
    {
      id: 2,
      img: "https://5.imimg.com/data5/PR/IJ/OS/SELLER-36709685/roller-hearth-furnace-500x500.jpg",
      title: "Roller Furnace",
      // price: "Rs 10 Lakhs / Unit",
      // material: "Melting Material : Copper",
      // power: "Material Loading Capacity (T) : 3-4 Ton",
      // type: "Type Of Furnace : Tilt",
      // temp: "Max Temperature : 500-1000 degree Celsius",
      // rated: "Rated Power (KW) : 15 kW",
      // input: "Input Voltage (V) : 415 V",
      // automation: "Automation Grade : Automatic",
    },
    {
      id: 3,
      img: "https://5.imimg.com/data5/TR/SX/QC/SELLER-36709685/gas-fire-furnace-500x500.jpg",
      title: "Gas Fire Furnace",
      // price: "Rs 2 Lakhs / Unit",
      // material: "Melting Material : Copper",
      // power: "Power Source : Electric",
      // type: "Type Of Furnace : Tilt",
      // temp: "Max Temperature : 500-1000 degree Celsius",
      // rated: "Rated Power (KW) : 15 kW",
      // input: "Input Voltage (V) : 415 V",
      // automation: "Automation Grade : Automatic",
    },
    {
      id: 4,
      img: "https://5.imimg.com/data5/ZR/EG/OK/ANDROID-36709685/product-jpeg-500x500.jpg",
      title: "Open Forging Furnace",
      // price: "Rs 10 Lakhs / Unit",
      // material: "Melting Material : Copper",
      // power: "Power Source : Electric",
      // type: "Type Of Furnace : Tilt",
      // temp: "Max Temperature : 500-1000 degree Celsius",
      // rated: "Rated Power (KW) : 15 kW",
      // input: "Input Voltage (V) : 415 V",
      // automation: "Automation Grade : Automatic",
    },
    {
      id: 5,
      img: "https://5.imimg.com/data5/KZ/UJ/CX/ANDROID-36709685/product-jpeg-500x500.jpg",
      title: "Heart Treatment Furnace",
      // price: "Rs 10 Lakhs / Unit",
      // material: "Melting Material : MS",
      // power: "Power Source : Electric",
      // type: "Type Of Furnace : Tilt",
      // temp: "Max Temperature : 500-1000 degree Celsius",
      // rated: "Rated Power (KW) : 15 kW",
      // input: "Input Voltage (V) : 415 V",
      // automation: "Automation Grade : Automatic",
    },
    
    {
      id: 6,
      img: "https://5.imimg.com/data5/VQ/QT/LW/ANDROID-36709685/product-jpeg-500x500.jpg",
      title: "Heat Treating And Forging Furnace",
      // price: "Rs 10 Lakhs / Unit",
      // material: "Melting Material : Copper",
      // power: "Power Source : Electric",
      // type: "Type Of Furnace : Tilt",
      // temp: "Max Temperature : 500-1000 degree Celsius",
      // rated: "Rated Power (KW) : 15 kW",
      // input: "Input Voltage (V) : 415 V",

      // automation: "Automation Grade : Automatic",
    },
    {
      id: 7,
      img: "https://5.imimg.com/data5/AG/GB/CQ/SELLER-36709685/open-forging-furnaces-500x500.jpg",
      title: "Open Forging Furnaces",
      // price: "Rs 40,000 / Unit",
      // material: "Melting Material : Copper",
      // power: "Power Source : Electric",
      // type: "Type Of Furnace : Tilt",
      // temp: "Max Temperature : 1000-1500 degree Celsius",
      // rated: "Rated Power (KW) : 30 kW",
      // input: "Input Voltage (V) : 440 V",

      // automation: "Automation Grade : Automatic",
    },
    {
      id: 8,
      img: "https://5.imimg.com/data5/KF/DT/CM/SELLER-36709685/industrial-heat-treatment-furnace-500x500.png",
      title: "Industrial Heat Treatment Furnace",
      // price: "Rs 10 Lakhs / Unit",
      // material: "Melting Material : Copper",
      // power: "Power Source : Electric",
      // type: "Type Of Furnace : Tilt",
      // temp: "Max Temperature : 500-1000 degree Celsius",
      // rated: "Rated Power (KW) : 15 kW",
      // input: "Input Voltage (V) : 415 V",

      // automation: "Automation Grade : Automatic",
    },
    {
      id: 9,
      img: "https://5.imimg.com/data5/PL/AK/LD/SELLER-36709685/muffle-furnace-500x500.png",
      title: "High Temperature Muffle Furnace",
      // price: "Rs 80000 / Unit",
      // material: "Melting Material : Ms",
      // power: "Power Source : Electric",
      // type: "Type Of Furnace : Tilt",
      // temp: "Max Temperature : 500-1000 degree Celsius",
      // rated: "Rated Power (KW) : 15 kW",
      // input: "Input Voltage (V) : 415 V",

      // automation: "Automation Grade : Automatic",
    },
    {
      id: 10,
      img: "https://5.imimg.com/data5/OD/MU/OP/ANDROID-36709685/product-jpeg-500x500.jpg",
      title: "Industrial Heat Treatment Furnaces",
      // price: "Rs 7 Lakhs / Unit",
      // material: "Melting Material : Copper",
      // power: "Power Source : Electric",
      // type: "Type Of Furnace : Tilt",
      // temp: "Max Temperature : 500-1000 degree Celsius",
      // rated: "Rated Power (KW) : 15 kW",
      // input: "Input Voltage (V) : 415 V",

      // automation: "Automation Grade : Automatic",
    },
    {
      id: 11,
      img: "https://5.imimg.com/data5/RE/EK/AO/ANDROID-36709685/product-jpeg-500x500.jpg",
      title: "Box Furnaces",
      // price: "Rs 80,000 / Unit",
      // material: "Melting Material : Copper",
      // power: "Power Source : Electric",
      // Loading: "Material Loading Capacity (T): 100Kg",
      // type: "Type Of Furnace : Tilt",
      // temp: "Max Temperature : 500-1000 degree Celsius",
      // rated: "Rated Power (KW) : 5 kW",
      // input: "Input Voltage (V) : 415 V",

      // automation: "Automation Grade : Automatic",
    },
    {
      id: 12,
      img: "https://5.imimg.com/data5/KW/XN/KK/SELLER-36709685/electric-aluminum-heat-treatment-furnace-500x500.jpg",
      title: "Thermal Sytech Furnaces",
      // price: "Rs 7 Lakhs / Unit",
      // material: "Melting Material : Copper",
      // power: "Power Source : Electric",
      // Loading: "Material Loading Capacity (T): 100Kg",
      // type: "Type Of Furnace : Fix",
      // rated: "Rated Power (KW) :80 kW",
      // input: "Input Voltage (V) : 440 V",

      // automation: "Automation Grade : Automatic",
    },
    // {
    //   id: 16,
    //   img: "https://img.directindustry.com/images_di/photo-g/21762-14916681.jpg",
    //   title: "Pre Heating Furnaces",
    //   price: "Rs 80,000 / Unit",
    //   material: "Melting Material : Copper",
    //   power: "Power Source : Electric",
    //   Loading: "Material Loading Capacity (T): 100Kg",
    //   type: "Type Of Furnace : Tilt",
    //   temp: "Max Temperature : 500-1000 degree Celsius",
    //   rated: "Rated Power (KW) : 5 kW",
    //   input: "Input Voltage (V) : 415 V",

    //   automation: "Automation Grade : Automatic",
    // },
  ];
  const dataServices = [
    {
      id: 1,
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxxMT1OenPFH_iQL7WHVv0PwrLD8DRIxB8Vu2iv2ZDtccDnGY4Ux_Uan1ddtGwya_5JpE",
      productTitle: "Furnace",
      ProductDescription:
        "Efficient high-temperature heating device tailored for industrial processes, ensuring optimal material processing and operational excellence.",
      link: "/services/furnace",
    },
    {
      id: 2,
      imgUrl:
        "https://cdn.thefabricator.com/a/what-is-metal-fabrication-and-where-is-the-industry-headed--0.jpg",
      productTitle: "Furnace Parts",
      ProductDescription:
        "High-quality furnace parts designed to enhance the performance and longevity of industrial heating systems, supporting seamless material processing.",
      link: "/services/FurnaceParts",
    },
    {
      id: 3,
      imgUrl:
        "https://haryanarubberudyog.com/wp-content/uploads/2020/02/cnc-turning.jpg",
      productTitle: "Manufacturing",
      ProductDescription:
        "Comprehensive manufacturing services integrating cutting-edge technology to meet the diverse needs of industrial processes and material processing.",
      link: "/services/Manufacturing",
    },
    {
      id: 4,
      imgUrl:
        "https://cdn.pixabay.com/photo/2016/01/13/14/16/factory-1137993__480.jpg",
      productTitle: "Metal Tool Room",
      ProductDescription:
        "Specialized metal tool room offering high-temperature heating solutions for industrial processes, ensuring precision and efficiency in material processing.",
      link: "/services/MetalToolRoom",
    },
  ];

  return (
    <DataContext.Provider value={{ dataFurnace, dataServices }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
