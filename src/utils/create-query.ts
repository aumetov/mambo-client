import { SearchFilter } from "../types/types";

export const createQueryString = (searchFilter: SearchFilter): string => {
    const keys = Object.keys(searchFilter);
    const queryParams = keys.map(key => {
        if (key !== 'priceRange' && searchFilter[key].length) {
            return `${key}=${searchFilter[key]}`
        } else if (key === 'priceRange') {
            return `priceMin=${searchFilter[key].min}&priceMax=${searchFilter[key].max}`
        }
    })
    const queryString = queryParams.filter(param => param).join('&');
    return queryString
}