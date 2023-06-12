import ProductItem from "../components/ProductItem";
import './ProductList.css';
import {BiSearchAlt} from 'react-icons/bi';

export default function ProductList(){
    return(
        <>
        <div id="box04">
            <div>
            <img src={'./img/box04.avif'} alt="하일랜드"/>
            <h2>하일랜드</h2>
            </div>
        </div>
        <div id="box05">
            <div>
                <p>장엄한 광야. 안개가 자욱한 들판과 헤더 꽃으로 뒤덮인 언덕. 자연이 다시 차지한 고대 성곽.<br/>
                스코틀랜드 하일랜드의 길들여지지 않은 아름다움에서 영감을 받은 리미티드 컬렉션입니다.
                </p>
                <form>
                    <input type="text"/>
                    <BiSearchAlt style={{width:"30px",height:
                " 30px"}}/>
                </form>
                <div id="productItem">
                    <ProductItem/>
                </div>
            </div>
        </div>
        <div id="box06">
            <div>
                <figure>
                    <img src={"./img/box06.avif"} alt="컬렉션의 탄생"/>
                    <figcaption>
                        <p>컬렉션의 탄생</p>
                        <p>스토리보기</p>
                    </figcaption>
                </figure>
            </div>
        </div>
        </>
    )
}