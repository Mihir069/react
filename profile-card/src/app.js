import 'bulma/css/bulma.css'
import ProfileCard from "./profileCard";
import AlexaImage from './img/alexa.png';
import CortanaImage from './img/cortana.png';
import SiriImage from './img/siri.png';

console.log(AlexaImage);
console.log(CortanaImage);
console.log(SiriImage);

function App(){
    return (
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">Personal Digital Assistants</p>
                </div>
            </section>
            {/* <img src={AlexaImage}/>
            <img src={CortanaImage}/>
            <img src={SiriImage}/> */}

            <div className="container">
                <section className='section'>
                    <div className="columns">
                        <div className="column is-4">
                            <ProfileCard 
                            title = 'Alexa' 
                            handle = '@alexa99'
                            image = {AlexaImage}
                            description = "Alexa was created by Amazon and helps you buy things"
                            />
                        </div>
                        <div className="column is-4">
                            <ProfileCard 
                            title = 'Cortana' 
                            handle = '@cortana32' 
                            image = {CortanaImage}
                            description="Cortana was made by Microsoft"
                            />
                        </div>
                        <div className="column is-4">
                            <ProfileCard 
                            title = 'Siri' 
                            handle = '@siri01' 
                            image = {SiriImage}
                            description="Siri was made by Apple"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
export default App;