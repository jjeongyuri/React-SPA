import './ProductItem.css';

export default function ProductItem(){
    return(
        <figure>
            <img src="이미지" alt="title"/>
            <figcaption>
                <dl>
                    <dt>신제품</dt>
                    <dd>영어이름</dd>
                    <dd>한글이름</dd>
                    <dd>가격
                        <span>미리수</span>
                    </dd>
                </dl>
                <p>
                    <button>미리보기</button>
                </p>
            </figcaption>
        </figure>
    )
}