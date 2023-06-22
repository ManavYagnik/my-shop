import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { productSearch } from "../redux/productAction";
import { emptyCart } from "../redux/action";
import { Button, Grid, Input, TextField } from "@mui/material";
// import Input from "@mui/material";
import { TextFieldProps } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { hover } from "@testing-library/user-event/dist/hover";
import { color } from "@material-ui/system";


const Header = () => {
    const result = useSelector((state) => state.cartData)
    const dispatch = useDispatch();

    console.log("redux data in header", result)
    return (<div className="header   ">
        <div className="w3-panel sticky w3-card w3-small" style={{zIndex:1200}}>
            <Link to="/">
                <img className="w3-margin-right-100" src="./images/logo.png" width="200 px" alt="" /> </Link>
            <span className="w3-hide-medium w3-hide-small w3-space-around">
                {/* <button className="w3-button w3-white">Edible Oils</button> */}

                <Button variant="text" color="error">Edible Oils</Button>
                <Button variant="text" color="error">Foods</Button>
                <Button variant="text" color="error">Ready to Cook</Button>
                <Button variant="text" color="error">Fortunes Recipes</Button>
                <Button variant="text" color="error">About US</Button>
                <Link to="/contact"><Button variant="text" color="error" >Contact Us</Button></Link>
                <Input placeholder="Search Product" color="error" onChange={(event) => dispatch(productSearch(event.target.value))} />
            </span>
            
            <span className="w3-hide-large  ">
                <span className="w3-dropdown-hover ">
                    <button className="w3-button w3-red fa fa-bars"> Products Menu</button>
                    <div className="w3-dropdown-content w3-bar-block w3-border">
                        <Button variant="text" color="error">Edible Oils</Button>
                        <Button variant="text" color="error">Foods</Button>
                        <Button variant="text" color="error">Ready to Cook</Button>
                        <Button variant="text" color="error">Fortunes Recipes</Button>
                        <Button variant="text" color="error">About US</Button>
                        <Link to="/contact"><Button variant="text" color="error" >Contact Us</Button></Link>
                        <Input placeholder="Search Product" color="error" onChange={(event) => dispatch(productSearch(event.target.value))} />
                    </div>
                </span>
            </span>

            
            <Link to="/cart">
                <div className="w3-right w3-padding-16">
                    <span className="w3-center w3-red w3-padding w3-margin-left  w3-small w3-circle">{result.length}</span>
                    <div className="w3-margin-right l">< ShoppingCartIcon sx={{ fontSize: 54, color:"marron",}} />
                    </div>
                </div>
            </Link>


        </div>
    </div>);
}

export default Header;