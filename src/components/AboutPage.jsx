import ProfileImg from '../assets/harshPicture.jpg'
import LinkedLogo from '../assets/linkedin.png'
import InstaLogo from '../assets/instagram.svg'
import GithubLogo from '../assets/github.svg'
import FrontendMentor from '../assets/frontendMentor.svg'

const SocialMediaDetails =[
    {
        mediaName:"Instagram",
        mediaImage:{InstaLogo},
        mediaLink:"https://www.instagram.com/im_harshu11?igsh=MXJqMjhjOTc5NnF2ZA%3D%3D&utm_source=qr"
    },
    {
        mediaName:"Github",
        mediaImage:{GithubLogo},
        mediaLink:"https://github.com/ImHarsh11"
    },
    {
        mediaName:"LinkedIN",
        mediaImage:{LinkedLogo},
        mediaLink:"https://www.linkedin.com/in/harshavardhan-bajanthri-779010194/"
    },
    {
        mediaName:"Frontend Mentor",
        mediaImage:{FrontendMentor},
        mediaLink:"https://www.frontendmentor.io/profile/ImHarsh11"
    },

]

export default function AboutPage(){
    return(
        <div className="AboutData" id="aboutSection">
        <section>
          <h2 ><span>01. </span>About</h2>
          <div className="summary">
            <p>
              Hello! My name is Bajanthri Harshavardhan and I enjoy creating things that response live on the internet. 
              My interest in web development started back in 2024, Fast-forward to today, my main focus these days is building accessible website and great digital experiences.
              <br />
              Here are a few technologies I’ve been working with recently:
              <div className="recentwork">
            <div className="left">
              <ul className="custom-bullets">
                <li>JavaScript (ES6+)</li>
                <li>React Js</li>
                <li>Node Js</li>
              </ul>
            </div>
            <div className="right" id="aboutlink">
              <ul className="custom-bullets">
                <li>Tailwind Css</li>
                <li>MySql</li>
                <li>Mongodb</li>
                <li>HTML5,CSS</li>
              </ul>
            </div>
          </div>
          <div className='socialMedias'>
                <ul>
                <li><a href={SocialMediaDetails[2].mediaLink} target='_blank'><img src={LinkedLogo} alt="Linked In" /></a></li>
                <li><a href={SocialMediaDetails[1].mediaLink} target='_blank'><img src={GithubLogo} alt="Github logo" /></a></li>
                <li><a href={SocialMediaDetails[0].mediaLink} target='_blank'><img src={InstaLogo} alt="Insta logo" /></a></li>
                <li><a href={SocialMediaDetails[3].mediaLink} target='_blank'><img src={FrontendMentor} alt="Frontend Mentor" /></a></li>
                </ul>
            </div>
            </p>
            <div className="myImage">
              <img src={ProfileImg} alt="Harsh profile image"/>
            </div>
          </div>
          
        </section>
      </div>
             
    )
}