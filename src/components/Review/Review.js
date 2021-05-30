import david from '../../Image/davidMumma.png';
import etty from '../../Image/ettyFidele.png';
import gregory from '../../Image/gregoryHayes.png';
import ReviewDetail from '../Review/ReviewDetail';
import './Review.css';


const testimonialData = [
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'David Mumma',
        from : 'Mohammadpur',
        img : david
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Etty Fidele',
        from: 'Dhanmondi',
        img : etty
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Gregory Hayes',
        from : 'Banani',
        img : gregory
    }
]

const Review = () => {
    return (
    
    <section className="services-container mt-5">
            <div className="text-center">
                <h5 style={{color: '#1CC7C1'}}>Testimonial</h5>
                <h2>What Our Clients Say</h2>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5">
                {
                    testimonialData.map(testimonial => <ReviewDetail testimonial={testimonial} key={testimonial.name}/>)
                }
            </div>
        </div>
        </section>
    );
};

export default Review;