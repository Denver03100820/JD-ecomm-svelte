// @ts-nocheck
import { writable } from "svelte/store";

const authStoreName = "auth";

const auth = writable([]);

const {subscribe,set,update} = auth

let isBrowser = typeof window !== 'undefined';

const setLoginDetails = (data)=>{
    if(!isBrowser) return false; 

    localStorage.setItem(authStoreName,JSON.stringify(data));
    set(data);
}

const authStore =()=>{
    // isBrowser && localOrder && setOrder(JSON.parse(localOrder));
    isBrowser && localStorage.getItem(authStoreName) && set(JSON.parse(localStorage.getItem(authStoreName)));

    return{
        subscribe,
        set:(data)=>{
            loader.set(true);
            console.log(data)

            let accounts = JSON.parse(localStorage.getItem("registerAccount"))
            console.log(accounts)
            if(accounts)
            {
                let isExist = accounts.filter(account => account.username == data.username && account.password == data.password )
    
                if(isExist.length)
                {
                    let userDetails = {isLogin:true,data:isExist};
                    setLoginDetails(userDetails);
                    loader.set(false)
                    error.set(false)
                    errorMsg.set("");
                }
                else
                {
                    error.set(true)
                    errorMsg.set("Invalid username or password");
                }
            }
            else
            {
                error.set(true)
                errorMsg.set("Acount does not exist");
            }
        },
        clear:()=>{
            localStorage.removeItem("auth");
            set([]);
        }
    }
}
export const login     = authStore();
export const loader    = writable(false)
export const error     = writable(false)
export const errorMsg  = writable("")