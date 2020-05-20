import React from 'react';
import {Link} from 'gatsby';
import Title from '../Globals/Title';

export default function Aboutinfo() {
    return (
                <section className="py-5">
                        <div className="container">
                            <Title title="Coffify Apologue"/>
                            <div className="row">
                                <div className="col-10 col-sm-8 mx-auto text-center">
                                    <p className="lead text-muted mb-5">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam impedit eius blanditiis vitae at ullam, ab harum. Placeat reiciendis cupiditate natus necessitatibus. Dolore sunt voluptates ipsa, quisquam, nam exercitationem molestiae nemo et quis temporibus ratione dolorum eius aliquam? Ipsam possimus soluta aliquid nostrum pariatur similique sint? Iure repellendus temporibus totam? 
                                    </p>
                                    <Link to="/">
                                       <button className="btn text-uppercase btn-yellow">
                                           Home Page
                                           </button> 
                                    </Link>
                                </div>

                            </div>
                        </div>
                </section>

)
}
