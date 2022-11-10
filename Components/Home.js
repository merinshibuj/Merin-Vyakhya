import { useEffect, useState } from "react";
import React from "react";
import "./Home.css";
import axios from "axios";
import { Homeserviceobj } from "./HomeService";
import Card from './Card';
import Carousel from "react-bootstrap/Carousel";
import Footer from "./Footer";
import Pdetails from "./Pdetails";
function Home() {
  let [pno, setpno] = useState("");
  let [pname, setpname] = useState("");
  let [Habitat, sethabitat] = useState("");
  let [price, setprice] = useState("");
 
  let [prods, setProds] = useState([])
  function products() {
    Homeserviceobj.getallproducts().then((response) => {
      setProds(response.data)
      console.log(response.data)
    });
  }
  useEffect(() => {
    products()
  }, [])
  // console.log(prods);

  function fn_Carousel() {
    return (
      <div >
      <Carousel>
        <Carousel.Item>
          <img
            className="carosel"
            src="https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="First slide"
          />
          <Carousel.Caption className="nocap">
            <h3>First slide label</h3>
            <p className="para">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carosel"
            src="https://images.pexels.com/photos/113335/pexels-photo-113335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Second slide"
          />
  
          <Carousel.Caption className="nocap">
            <h3>Second slide label</h3>
            <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carosel"
            src="https://images.pexels.com/photos/793012/pexels-photo-793012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Third slide"
          />
  
          <Carousel.Caption className="nocap">
            <h3>Third slide label</h3>
            <p className="para">
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    );
  }

  return (
    <div>
      <div className="products1">
      <div className="cars">
        {fn_Carousel()}
      </div>
      <br/><br/><br/>
        <div className="card-grid">
          {
            prods && prods.map((item, index) => <Card key={index} data={item} />)
          }
          
        </div>
      </div>
      <br/><br/>
      <div>
          
      <Footer/>
      

      </div>
      <br/><br/>
    </div>
  );
}





export default Home;
