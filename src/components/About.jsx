import './About.css';
import heroImage from '../assets/hero image.png'
import icon from '../assets/font circle.png'


export default function About(){

    return(
        <div className="container">
            <div className="top">
                <div className="info">
                    <div className="heading">
                        <h1>Design products</h1>
                        <h1>Deliver experience</h1>
                    </div>
                    <div className="info-p">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id elementum. Quam vel aliquam sit vulputate. Faucibus nec gravida ipsum pulvinar vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id elementum.
                        </p>
                        <button>Get started</button> 
                    </div>
                </div>
                <div className="pic">
                    <img className='iconName' src={icon} alt="icon" />
                    <img src={heroImage} alt="camera img"/>
                </div>
            </div>
            <div className="cards">
                <div className="card">
                    <h4>Title 1</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. imperdiet sed id elementum. 
                    Quam vel aliquam sit vulputate. </p>
                </div>
                <div className="card">
                    <h4>Title 2</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. imperdiet sed id elementum. 
                    Quam vel aliquam sit vulputate. </p>
                </div>
                <div className="card">
                    <h4>Title 3</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. imperdiet sed id elementum. 
                    Quam vel aliquam sit vulputate. </p>
                </div>
                <div className="card">
                    <h4>Title 4</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. imperdiet sed id elementum. 
                    Quam vel aliquam sit vulputate. </p>
                </div>
            </div>
        </div>
    )
}