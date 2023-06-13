import './ProductItem.css';

function ItemEtc(){
    return (
        <figure>
            <img src="" alt=""/>
            <figcaption>
                <dl>
                    <dt>신제품</dt>
                    <dd>""</dd>
                    <dd>""</dd>
                    <dd>""
                        <span>""</span>
                    </dd>
                </dl>
                <p>
                    <button>미리보기</button>
                </p>
            </figcaption>
        </figure>
    )
}

export default function ProductItem(){
    return(
        <div id="byItem">
          <ItemEtc/>
        </div>
    )
}