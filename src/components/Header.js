import {BiUser,BiShoppingBag} from 'react-icons/bi';
import './Header.css';

export default function Header(){
    return(
        <header>
            <div>
                <nav>
                    <ul>
                        <li>
                            <a href="#">하일랜드 컬렉션</a>
                            <ul>
                                <li>
                                    <a href="#">와일드 아킬리아 코롱</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">조말론 런던 하우스</a>
                        </li>
                        <li>
                            <a href="#">컬렉션의 탄생</a>
                        </li>
                    </ul>
                </nav>
                <h1>
                    <a href="#">JO MALONE<span>LONDON</span></a>
                </h1>
                <ul className="etc">
                    <li>
                        <a href="#">
                            <BiUser/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <BiShoppingBag/>
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    )
}