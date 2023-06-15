import ProductItem from "../components/ProductItem";
import './WishList.css';
import { getWishList,deleteWishList } from "../Api/Api";
import { useEffect, useState } from "react";


function WishListItem({item,setDataFromBy}){
    const num = [0,1,2,3,4];

    const [count,setCount] = useState(116000);
    
    // const countChange = (a)=>setCount(count * a)
    // console.log(countChange)

    const handleDelete = (dataSlug)=>{
        deleteWishList(dataSlug);
        const NestData = getWishList();
        setDataFromBy(NestData);
    }
    
    return (

          <figure>
            <p>
                <img src={item.photoUrl} alt={item.titleEnglish}/>
            </p>
            <figcaption>
                <dl className="leftdl">
                    <dt>{item.titleKorea}</dt>
                    <dd>{item.titleEnglish}</dd>
                    <dd>{item.ml}</dd>
                </dl>
                <dl className="rightdl">
                    <dt>{count}</dt>
                    <dd>
                        <select>
                           {num.map((numId)=><option key={numId}
                                                     onClick={(aa)=>setCount(count *aa)}>{numId}</option>)}
                        </select>
                    </dd>
                    <dd>{count}</dd>
                    <dd>
                        <button onClick={()=>handleDelete(item.slug)}>삭제</button>
                    </dd>
                </dl>
            </figcaption>
          </figure>
          )
}

export default function WishList(){
    const [dataFromBy,setDataFromBy] = useState([]);


    useEffect(()=>{
        const NestData = getWishList();
        setDataFromBy(NestData);
    },[])


    return(
        <div id="box15">
            <div>
                <h2>장바구니</h2>
                <div id="wishlist">
                    <ul className="all">
                        <li>제품</li>
                        <li>가격</li>
                        <li>수량</li>
                        <li>총 합계</li>
                    </ul>
                    <ul className="wishlistproduct">
                        {dataFromBy.map((item)=>(
                            <li key={item.slug}>
                                <WishListItem item={item}
                                              setDataFromBy={setDataFromBy}/>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}