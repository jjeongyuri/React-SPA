import ProductItem from "../components/ProductItem";
import './Home.css';

export default function Home(){
    return(
        <>
        <div id="box01">
            <ul>
                <li>event01</li>
                <li>event02</li>
                <li>event03</li>
                <li>event04</li>
            </ul>
            <div className="collection">
                <h2>하일랜드 컬렉션</h2>
                <p>
                    <a href="#">컬렉션 보기</a>
                </p>
            </div>
        </div>
        <div id="box02">
            <div>
                <figure>
                    <img src={'./img/box02_pic01.avif'} alt=""/>
                    <figcaption>
                        <p>와일드 아킬리아 코롱</p>
                        <p>
                            <a href="#">더 알아보기</a>
                        </p>
                    </figcaption>
                </figure>
                <figure>
                    <img src={'./img/box02_pic02.avif'} alt=""/>
                    <figcaption>
                        <p>와일드 아킬리아 코롱</p>
                        <p>
                            <a href="#">더 알아보기</a>
                        </p>
                    </figcaption>
                </figure>
            </div>
        </div>
        <div id="box03">
            <h2>완벽한 선물</h2>
            <div id="productItem">
                <ProductItem/>
            </div>
        </div>
        </>
    )
}