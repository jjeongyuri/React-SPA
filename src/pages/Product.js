import ProductItem from "../components/ProductItem";

export default function Product(){
    return(
        <>
        <div id="box07">
            <div>
                <div className="pic">
                    <img src=" " alt=""/>
                </div>
                <div className="info">
                    <dl>
                        <dt>영어이름</dt>
                        <dd>한글이름</dd>
                        <dd>가격</dd>
                        <dd>내용</dd>
                    </dl>
                    <p>
                        <button>장바구니 담기</button>
                    </p>
                </div>
            </div>
        </div>
        <div id="box08">
           <div>
             <dl>
                <dt>성분</dt>
                <dd>내용</dd>
                <dt>사용방법</dt>
                <dd>내용</dd>
             </dl>
             <div className="detail">
                <figure>
                    <img src="" alt=""/>
                    <figcaption>
                        <dl>
                            <dt>탑 노트</dt>
                            <dd>티슘</dd>
                            <dd>내용</dd>
                        </dl>
                    </figcaption>
                </figure>
             </div>
           </div> 
        </div>
        <div id="box03">
            <h2>당신을 위한 추천 상품</h2>
            <div id="productItem">
                <ProductItem/>
            </div>
        </div>
        </>
    )
}