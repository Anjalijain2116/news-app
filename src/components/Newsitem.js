import React from 'react'

const Newsitem=(props)=> {
  

    // render() {
        let {title , discription, imageurl, newsurl, author, date, source} = props;
        return (
            <div className='my-3'>
                <div className="card" >
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }
                    }>
                       <span className="badge rounded-pill bg-danger">{source}</span>
                    </div>
                
                    <img src={imageurl?imageurl:"https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2023/08/0/0/Untitled-design-942.png?ve=1&tl=1"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text"><small className="text-muted">By {!author?"Unknown": author} on {new Date (date).toGMTString()}</small></p>
                        <p className="card-text">{discription}...</p>
                        <a href={newsurl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read more</a>
                    </div>
                </div>
            </div>
        )
    // }
}

export default Newsitem
