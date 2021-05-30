import React from 'react';

const ReviewDetail = ({ testimonial }) => {

    return (
//         <div className="card shadow-sm">
//         <div className="card-body">
//             <p className="card-text text-center">{testimonial.quote}</p>
//         </div>
//         <div className="card-footer d-flex  align-items-center">
//             <img className="mx-3" src={testimonial.img} alt="" width="60"/>
//             <div>
//                 <h6 className="text-primary">{testimonial.name}</h6>
//                 <p className="m-0">{testimonial.from}</p>
//             </div>
//         </div>
//    </div>
<div className="col-md-4 text-center">
            <img style={{height: '156px',width:'147px'}} src={testimonial.img} alt="" />
            <h5 className="mt-3 mb-3 ">{testimonial.name}</h5>
            <h6 className="mt-3 mb-3 ">{testimonial.from}</h6>
            <p className="text-secondary">{testimonial.quote}</p>
        </div>

    );
};

export default ReviewDetail;