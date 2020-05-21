import React, { Component } from 'react'
import Title from '../Globals/Title'
import Img from "gatsby-image"


const getCategories = items =>{
    let tempItems = items.map(items => {
            return items.node.category;
            
    });
    let tempCategories = new Set(tempItems);
    return tempCategories;
}

export default class Menu extends Component {
    constructor(props){
        super(props);
        this.state ={
            items: props.items.edges,
            coffeeItems: props.items.edges,
            categories:getCategories(props.items.edges)
        };
    }
    render() {
       
        //checking the data is passed: console.log(this.state.categories);
        if (this.state.items.length > 0){
            return (
                <section className="menu py-5">
                    <div className="container">
                        <title title="Top Menu"/>
                      
                        <div className="row">
                            {this.state.coffeeItems.map(({node})=>{
                                return(
                                    <div key={node.id} className="col-11 col-md-6 my-3 d-flex mx-auto">
                                        <div>
                                            <Img fixed={node.image.fixed}/>
                                        </div>
                                        <div>
                                            {/* item text*/}
                                            <div className="flex-grow-1 px-3">
                                                <div className="d-flex justify-content-between">
                                <h6 className="mb-0 text-blue">
                                    <small>{node.title}</small></h6>
                                <h6 className="mb-0 text-black">
                                 <small>${node.price}</small></h6>
                                            
                                                </div>
                                                <p className="text-muted">
                                                    <small>
                                                        {node.description.description}
                                                    </small>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}   

                        </div>
                    </div>
                </section>
            );
                
        }
        else{
            return(
            <section className="menu py-5">
                <div className="container">
                    <Title title="Our Top Menu"/>
                    <div className="row">
                        <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
                            <h1>There are no items to display...</h1>
                        </div>
                    </div>
                </div>
            </section>);
        }
        
    }
}
