import ProductItem from "../components/ProductItem";
import './Product.css';
import { getCoursesBySlug } from "../Api/Api";
import { useParams } from "react-router-dom";
import { getData } from "../Api/Api";
import ProductDetail from "../components/ProductDetail";


function ProductName({item}){

    return(
        <div>
                <div className="pic">
                    <img src={item.photoUrl} alt={item.titleEnglish}/>
                </div>
                <div className="info">
                    <dl>
                        <dt>신제품</dt>
                        <dd>{item.titleEnglish}</dd>
                        <dd>{item.titleKorea}</dd>
                        <dd>{item.price}</dd>
                        <dd><span>{item.title}</span>
                            {item.summary}
                        </dd>
                    </dl>
                    <p>
                        <button>장바구니 담기</button>
                    </p>
                </div>
            </div>
    )
}

export default function Product(){
    const {parmsSlug} = useParams();
    const item = getCoursesBySlug(parmsSlug);
    const data = getData();
    // console.log(data)

    return(
        <>
        <div id="box07">
            <ProductName item={item}/>
        </div>
        <div id="box08">
            <ProductDetail item={item}/>
        </div>
        <div id="box03">
            <h2>당신을 위한 추천 상품</h2>
               <ProductItem data={data}/>
        </div>
        </>
    )
}