import ProductItem from "../components/ProductItem";

export default function WishList(){
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
                    <ul>
                        <li>
                            <ProductItem/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}