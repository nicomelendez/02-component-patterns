import { ReactElement } from "react";

export interface ProductCardProps {
    product:Product,
    children?: ReactElement | ReactElement[]
}
  
export interface Product {
id:string;
title:string;
img?:string;
}

export interface ProductContextProps{
counter:number;
increaseBy:(value: number) => void;
product:Product;
}

export interface ProductCardHOCProps{
    ({ children, product }: ProductCardProps):JSX.Element,
    Title: ({title}:{title?:string}) => JSX.Element,
    Image:({image}:{image?:string})=> JSX.Element,
    Buttons:()=>JSX.Element

}