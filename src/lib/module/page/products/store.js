// @ts-nocheck
import { writable } from "svelte/store";
import { get } from "svelte/store";

const name = "products";

const products = writable([]);

const {subscribe,set,update} = products

let isBrowser = typeof window !== 'undefined';

const productData = (data)=>{
    if(!isBrowser) return false; 

    localStorage.setItem(name,JSON.stringify(data));
    set(data);
}

const productStore =()=>{
    // isBrowser && localOrder && setOrder(JSON.parse(localOrder));
    isBrowser && localStorage.getItem(name) && set(JSON.parse(localStorage.getItem(name)));

    return{
        subscribe,
        set:(data)=>{
            let prod = isBrowser && localStorage.getItem(name) && JSON.parse(localStorage.getItem(name));
            let values = get(product);
            // let resAccount = [...values,data];
            if(!prod)
            productData(data);
        }       
    }
}
export const product = productStore();
export const loader = writable(false)
export const error  = writable(false)