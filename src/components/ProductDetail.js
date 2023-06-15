import './ProductDetail.css';


function ProductDetailEtc({item}){
    // console.log(item)


    return (
        <div className="detailetc">
                {item.topics.map(({topic})=>{
                    return <figure key={topic.id}>
                           <img src={topic.pic} alt={topic.toname}/>
                           <figcaption>
                               <dl>
                                   <dt>{topic.totitle}</dt>
                                   <dd>{topic.toname}</dd>
                                   <dd>{topic.something}</dd>
                               </dl>
                           </figcaption>
                           </figure>
                })}
    </div>
    )
}


export default function ProductDetail({item}){
    // console.log(item)


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
           <ProductDetailEtc item={item}/>
        </div>
      </div>
    )
}