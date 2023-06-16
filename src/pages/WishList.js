import ProductItem from "../components/ProductItem";
import './WishList.css';
import { getWishList,deleteWishList } from "../Api/Api";
import { useEffect, useState } from "react";


function WishListItem({item,setDataFromBy,count,number,changeNum,arr,changeBy}){

    const handleDelete = (dataSlug)=>{
        deleteWishList(dataSlug);
        const NestData = getWishList();
        setDataFromBy(NestData);
    }
    
    function NumChangeBy(e){
        changeNum(e.target.value)
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
                    <dt>₩{item.price}</dt>
                    <dd>
                        <select defaultValue={number}
                                onChange={NumChangeBy}>
                           {arr.map((items,index)=>(
                            <option value={items}
                                    key={index}> {items} </option>
                           ))}
                        </select>
                    </dd>
                    <dd>₩{count}</dd>
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


    const numArr = [1,2,3,4];

    const [count,setCount] = useState(116000);
    const [number,setNumber] = useState(1);
    const [arr,setArr] = useState(numArr);

    function changeNum(num){
        setNumber(num)
    }

    function changeBy(){
        return setCount(count * changeNum)
    }


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
                                              setDataFromBy={setDataFromBy}
                                              count={count}
                                              number={number}
                                              changeNum={changeNum}
                                              arr={arr}
                                              changeBy={changeBy}
                                              />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}