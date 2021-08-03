import React from "react";

export interface PrimitiveType{
    title:string;
    servicedesc: string;
    icon: React.ReactElement;
}

export interface ComplexType{
    
}

export interface EventType{

}


export type Props = PrimitiveType & ComplexType & EventType;

export default Props;