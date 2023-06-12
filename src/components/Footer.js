import './Footer.css';
import pic from '../Assets/logo.webp';

export default function Footer(){
    return(
        <footer>
            <div>
                <div className="top">
                    <small>&copy; Jo Malone London 2021</small>
                    <img src={pic} alt="logo"/>
                    <ul>
                        <li>이용약관</li>
                        <li>개인정보 처리방침</li>
                    </ul>
                </div>
                <div className='bottom'>
                    <dl>
                        <dt>이엘씨에이한국(유) 대표:</dt>
                        <dd>Teng, Hsiao-Hua (Catherine), 서울시 강남구 강남대로 382 (역삼동) 메리츠타워, 06232</dd>
                        <dt>사업자등록번호:</dt>
                        <dd>211-81-71889</dd>
                        <dt>통신판매업신고번호:</dt>
                        <dd>강남-15737호</dd>                    
                        <dt>호스팅서비스 사업자:</dt>
                        <dd>(주)엘지유플러스</dd>
                    </dl>
                </div>
            </div>
        </footer>
    )
}