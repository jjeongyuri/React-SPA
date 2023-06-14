import data from './data.json';

export function getData(keyword){
    if(!keyword) return data;
    return filterByKeyword(data,keyword);
}

function filterByKeyword(item,keyword){
    const lowerd = keyword.toLowerCase();
    return item.filter(({titleEnglish})=>titleEnglish.toLowerCase().includes(lowerd))
}

export function getCoursesBySlug(dataSlug){
    return data.find((data)=>data.slug === dataSlug)
}
