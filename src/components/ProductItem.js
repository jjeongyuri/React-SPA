import './ProductItem.css';

export function ItemEtc({item}){
    // console.log(item)

    return (
        <figure>
            <img src={item.photoUrl} alt={item.titleEnglish}/>
            <figcaption>
                <dl>
                    <dt>신제품</dt>
                    <dd>{item.titleEnglish}</dd>
                    <dd>{item.titleKorea}</dd>
                    <dd>{item.price}
                        <span>{item.ml}</span>
                    </dd>
                </dl>
                <p>
                    <button>제품보기</button>
                </p>
            </figcaption>
        </figure>
    )
}

export default function ProductItem({data}){
    // console.log(data)


    return(
        <div id="byItem">
          {data && data.map((item)=>(
            <ItemEtc key={item.id}
                     item={item}/>
          ))}
        </div>
    )
}