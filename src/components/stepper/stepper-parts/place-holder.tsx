import { Component} from 'react'; 

export const PlaceHolderComponent:  React.FC<{Content: React.FC}> = ({ Content })=> {

    return <>
       <Content />
    </>

}