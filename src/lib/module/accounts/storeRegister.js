// @ts-nocheck
import { writable } from "svelte/store";
import { get } from "svelte/store";

const name = "registerAccount";

const registerAccount = writable([]);

const {subscribe,set,update} = registerAccount

let isBrowser = typeof window !== 'undefined';

const registerAccountData = (data)=>{
    if(!isBrowser) return false; 

    localStorage.setItem(name,JSON.stringify(data));
    set(data);
}

const registerStore =()=>{
    // isBrowser && localOrder && setOrder(JSON.parse(localOrder));
    isBrowser && localStorage.getItem(name) && set(JSON.parse(localStorage.getItem(name)));

    return{
        subscribe,
        set:(data)=>{
            loader.set(true);
            let values = get(registerAccount);
            let resAccount = [...values,data];
            registerAccountData(resAccount);
        }       
    }
}
export const register = registerStore();
export const loader = writable(false)
export const error  = writable(false)