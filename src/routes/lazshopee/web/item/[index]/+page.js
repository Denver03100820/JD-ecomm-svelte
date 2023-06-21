import {get} from "svelte/store"
import { product } from "$lib/module/page/products/store.js";

export async function load({params}){
    console.log(params);
    const d = await get(product)
    return d ? d[params.index]:{} ;
}