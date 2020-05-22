import React from 'react'
import Title from '../Globals/Title'



export default function Contact() {
    return (
        <section className="contact py-5">
            <Title title="Contact Us"/>
            <div className="row">
                <div className="col-10 col-sm-8 col0nd-6 mx-auto">
                    <form action="https://formspree.io/mzbjdwon" method="POST">
                        {/* Name */}
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" name="name" id="name" placeholder="Type your name"/>

                        </div>
                        {/* Email */}
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" className="form-control" name="email" id="email" placeholder="email@email.com"/>
                            
                        </div>
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                            <textarea name="description" id="description" rows="5"
                            className="form-control" placeholder="Comment here!...."/>
                            </div>
                        {/* Submit button */}

                            <button type="submit" className="btn btn-yellow btn-block text-capitalize mt-5" target="_blank">
                                Submit
                            </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
