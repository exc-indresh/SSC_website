import React from "react";
import styles from "./Events.module.css";

function Events() {
    return (
        <div>
            <div className={styles.middle}>
                <section className={styles.about}>
                    <div className={styles.container}>
                        <div className={styles.para}>
                            <h1 className="heading"><strong>Jagriti</strong></h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias beatae consequuntur rem
                                pariatur explicabo facere corrupti necessitatibus non! Adipisci quibusdam vero asperiores eos fugiat?
                            </p>
                            <div className="row">
                                <div className="col-sm-6 mb-3 mb-sm-0">
                                    <div className>
                                        <div className="card-body">
                                            <h5 className="card-title">Lorem ipsum</h5>
                                            <p className="card-text">With supporting text below.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className>
                                        <div className="card-body">
                                            <h5 className="card-title">Lorem ipsum</h5>
                                            <p className="card-text">With supporting text below.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.contain}><button type="button" className="btn btn-primary btn-lg btn-warning opacity-75">Large button</button></div>
                        </div>
                        <div className={styles.img}>
                            <img className={styles.logo} src="https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-64316cae6bec2_jagritilogo23.png" alt="jagriti-img" />
                        </div>
                    </div>
                    <div><h1 className={styles.title}><strong>Our Partners</strong></h1></div>
                    <div className={styles.partner}>
                        <p>This section is for partners</p>
                    </div>
                </section>
            </div>
            <section className={styles.gallery}>
                <div className={styles.middlediv}>
                    <h1><strong>Our gallery</strong></h1>
                </div>
                <div>
                    <div className="row">
                        <div className="col-md-3">
                            <div className>
                                <img src="https://picsum.photos/id/0/367/267" className="card-img-top" alt="" />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className>
                                <img src="https://picsum.photos/id/18/367/267" className="card-img-top" alt="" />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className>
                                <img src="https://picsum.photos/id/6/367/267" className="card-img-top" alt="" />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className>
                                <img src="https://picsum.photos/id/12/367/267" className="card-img-top" alt="" />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className>
                                <img src="https://picsum.photos/id/13/367/267" className="card-img-top" alt="" />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className>
                                <img src="https://picsum.photos/id/8/367/267" className="card-img-top" alt="" />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className>
                                <img src="https://picsum.photos/id/20/367/267" className="card-img-top" alt="" />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className>
                                <img src="https://picsum.photos/id/28/367/267" className="card-img-top" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.speaker}>
                <div className={styles.middle}>
                    <h1 className={styles.middlediv}><strong>Our Speakers</strong></h1>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="card">
                                    <img src="https://picsum.photos/id/0/367/267" className="card-img-top" alt="/" />
                                    <div className="card-body">
                                        <p className="card-text">Some quick example text.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card">
                                    <img src="https://picsum.photos/id/0/367/267" className="card-img-top" alt="/" />
                                    <div className="card-body">
                                        <p className="card-text">Some quick example text.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card">
                                    <img src="https://picsum.photos/id/0/367/267" className="card-img-top" alt="/" />
                                    <div className="card-body">
                                        <p className="card-text">Some quick example text.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card">
                                    <img src="https://picsum.photos/id/0/367/267" className="card-img-top" alt="/" />
                                    <div className="card-body">
                                        <p className="card-text">Some quick example text.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
export default Events;
