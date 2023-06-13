import {BiUser,BiShoppingBag} from 'react-icons/bi';
import './Header.css';
// import { getData } from '../Api/Api';
import { useState } from 'react';

// function ProductName({items,toggle}){
//     console.log(items)
//     if(!toggle){
//         return null;
//        }
//     return (
//         <li>
//           <a href="#">{items.titleKorea}</a>
//         </li>
//     )
// }


export default function Header(){
    // const data =  getData();
    // console.log(data)
    const [toggle,setToggle] = useState(false);
      
    
    return(
        <header>
            <div>
                <nav>
                    <ul>
                        <li onClick={()=>setToggle(!toggle)}>
                            <a href="#">하일랜드 컬렉션</a>
                            <ul>
                              {/* {data.map((items)=>
                              <ProductName key={items.id}
                                           items={items}
                                           toggle={toggle}/>
                             )} */}
                            </ul>
                        </li>
                        <li>
                            <a href="#">조말론 런던 하우스</a>
                        </li>
                        <li>
                            <a href="#">컬렉션의 탄생</a>
                        </li>
                    </ul>
                </nav>
                <h1>
                    <a href="#">JO MALONE<span>LONDON</span></a>
                </h1>
                <ul className="etc">
                    <li>
                        <a href="#">
                            <BiUser/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <BiShoppingBag/>
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    )
}