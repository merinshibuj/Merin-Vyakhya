import './Card.css';
import Pdetails from './Pdetails';
function Card(props){
    const getRatings = () => {
        let stars = ""
        for(let i=0 ; i<props.data.Rating ; i++) {
            stars +="*"
        }
        return stars
    }
    return (
        <div >
            <div className="card-container">
            <a style={{ textDecoration:"none",color:"Black" }} href="/Pdetails">
            <img width="100px" height="100px" src={props.data.pic}/>

            <br/><br/>
            <span className='spanp'>{props.data.pname}</span><br/>
            <span>Price : {props.data.price} Rs</span><br/>
            <span>Habitat : {props.data.Habitat}</span>
            <br/>
            
            <span>
                {
                    getRatings()
                }
            </span>
            <br/><br/>
            <span style={{ fontWeight:"bold" }}>SEE PRODUCT DETAILS</span>
            </a>
            
            {/* <input type="button" className=" btn btn-primary" value="Product Details"  onClick={Pdetails}  /> */}
            </div>
        </div>
    )
}

export default Card;