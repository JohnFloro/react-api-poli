import React from 'react';

class Album extends React.Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <>
                <div className="album py-5 bg-light">
                    <div className="container">
                        <div className="row">
                            {this.props.data.map(movie => {
                            return(
                               <div className="col-md-4">
                               <div className="card mb-4 shadow-sm">
                                   <svg className="bd-placeholder-img card-img-top" width="100%" height="225"
                                       xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice"
                                       focusable="false" role="img" aria-label="Placeholder: Thumbnail">
                                       <title>Placeholder</title>
                                       <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef"
                                           dy=".3em">{movie.title}</text>
                                   </svg>
                                   <div className="card-body">
                                       <p className="card-text">{movie.description}</p>
                                       <div className="d-flex justify-content-between align-items-center">
                                           <div className="btn-group">
                                               <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                               <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                           </div>
                                           <small className="text-muted"> {movie.minutes} mins</small>
                                       </div>
                                   </div>
                               </div>
                           </div>
                        )         
                            })}
                        </div>
                    </div>
                </div>
            </>
        );
    }



}

export default Album;