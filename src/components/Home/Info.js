import React from 'react';
import {Link} from 'gatsby';
import Title from '../Globals/Title';

export default function Info() {
    return (
                <section className="py-5">
                        <div className="container">
                            <Title title="Coffify Apologue"/>
                            <div className="row">
                                <div className="col-10 col-sm-8 mx-auto text-center">
                                    <p className="lead text-muted mb-5">
                                        Our Story, the great APOLOGUE!
                                       
                                    </p>
                                  
                                    <Link to="/about/">
                                       <button className="btn text-uppercase btn-yellow">
                                           Learn More!
                                           </button> 
                                    </Link>
                                </div>

                            </div>
                        </div>
                </section>

)
}
