import React from 'react'

export default function Footer() {
    return (
        <footer className="footer py-3">
            <div className="continer">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 text-white text-center text-capitalize">
                    <h3>All rights reserved &copy;{new Date().getFullYear().toString()} Carlston G.</h3>
                    </div>
                </div>
            </div>
        </footer>

        );
}
