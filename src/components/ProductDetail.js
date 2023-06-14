import { getData } from "../Api/Api";
import './ProductDetail.css';


function ProductDetailEtc({data}){
    // console.log(data)


    return (
        <div className="detailetc">
            <figure>
            <img src="" alt=""/>
            <figcaption>
                <dl>
                    <dt></dt>
                    <dd></dd>
                    <dd></dd>
                </dl>
            </figcaption>
            </figure>
    </div>
    )
}


export default function ProductDetail({item}){
    // console.log(item)
    const data = getData();


    return(
        <div>
        <dl>
           <dt>성분</dt>
            <dd>
            <span>전성분:</span>
            {item.ingredient}
           </dd>
           <dt>사용방법</dt>
           <dd>손목, 목 부위 등 맥박이 뛰는 곳에 충분히 뿌려주세요. 시간이 지날 수록 체온으로 인해 향이 더욱 은은하게 퍼져나갑니다. 단독으로 사용 또는 다른 코롱이나 배스 앤 바디 제품과 함께 레이어링 해보세요.</dd>
        </dl>
        <div className="detail">
           <p>테이스팅 노트</p>
           <ProductDetailEtc data={data}/>
        </div>
      </div>
    )
}