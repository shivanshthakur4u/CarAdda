import { MouseEventHandler } from "react";

export interface customButtonProps{
    title:String;
    containerStyles?:String;
    handleClick?:MouseEventHandler<HTMLButtonElement>;
    btnType?:"button" | "submit"  ; 
    textStyle?:string;
    rightIcon?:string;
    isDisabled?:boolean; 
}

export interface customFilterProps{
    title:String
}

export interface searchManufacturerProps{
    manufacturer:String,
    setManufacturer:( manufacturer:string)=>void;
}

export interface CarProps{
    city_mpg:number;
class:string;
combination_mpg:number;
cylinders:number;
displacement:number;
drive:string;
fuel_type:string;
highway_mpg:number;
make:string;
model:string;
transmission:string;
year:1993;
}

export interface CarDetailProps{
car:CarProps;
isOpen:boolean;
closeModal:()=>void;
}