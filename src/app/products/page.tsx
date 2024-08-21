import axios from "axios";
// import { log } from "console";
import React, { useEffect, useState } from "react";

export default function page() {
    const [products,setProducts]=useState<any>();
  // di goi api  lay data de di render ra man hinh trinh duyet !

  // fetch
  //axios
  useEffect(() => {
    axios.get(" http://localhost:3000/api/products")
    .then((response)=>{
        console.log("data",response);
        setProducts(response.data.data)
        
    })
    .catch((err)=>{

    })
  }, []);
  return <div>danh sach san pham
    {products.map((item:any)=>{
        return(
            <div key={item.id}>
                 <p>ten:{item.name}</p>
                 <p>gia:{item.price}</p>
            </div>
           
        )
    })}
  </div>;
}
