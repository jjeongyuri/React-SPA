import ProductItem from "../components/ProductItem";
import './Product.css';

export default function Product(){
   

    return(
        <>
        <div id="box07">
            <div>
                <div className="pic">
                    <img src={"../img/box_pic01.avif"} alt=""/>
                </div>
                <div className="info">
                    <dl>
                        <dt>신제품</dt>
                        <dd>영어이름</dd>
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
                <dd><span>전성분:</span>변성알코올,향료,정제수,리모넨,리날룰,쿠마린,시트로넬올,시트랄,제라니올,펜타에리스리틸테트라-다이-T-부틸하이드록시하이드로신나메이트 [ILN51023] *제공된 성분은 동일 제품이라도 경우에 따라 변경될 수 있습니다. <br/>최신정보는 제품 포장의 성분을 참고하시거나 본사 고객관리지원팀으로 연락 부탁 드립니다.</dd>
                <dt>사용방법</dt>
                <dd>손목, 목 부위 등 맥박이 뛰는 곳에 충분히 뿌려주세요. 시간이 지날 수록 체온으로 인해 향이 더욱 은은하게 퍼져나갑니다.단독으로 사용 또는 다른 코롱이나 배스 앤 바디 제품과 함께 레이어링 해보세요.</dd>
             </dl>
             <div className="detail">
                <figure>
                    <p>테이스팅 노트</p>
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
                <ProductItem/>
        </div>
        </>
    )
}