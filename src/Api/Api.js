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


// wishlist에 필요한것
const WISHLIST_KEY = 'wishlist';
const wishlist = JSON.parse(localStorage.getItem(WISHLIST_KEY));

export function addWishList(dataSlug){
    wishlist[dataSlug] = true;
    localStorage.setItem(WISHLIST_KEY,JSON.stringify(wishlist));
}

export function getWishList(){
    return data.filter((item)=>wishlist[item.slug])
}

export function deleteWishList(dataSlug){
    delete wishlist[dataSlug];
    localStorage.setItem(WISHLIST_KEY,JSON.stringify(wishlist))
}