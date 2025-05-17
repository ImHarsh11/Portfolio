<<<<<<< HEAD
import LinkedLogo from '../assets/linkedin.png'
import InstaLogo from '../assets/instagram.svg'
import GithubLogo from '../assets/github.svg'
import MailIcon from '../assets/mailIcon.svg'

const FooterSocialLinks = [
  {
    mediaName: "Instagram",
    mediaImage: InstaLogo,
    mediaLink: "https://www.instagram.com/im_harshu11?igsh=MXJqMjhjOTc5NnF2ZA%3D%3D&utm_source=qr"
  },
  {
    mediaName: "Github",
    mediaImage: GithubLogo,
    mediaLink: "https://github.com/ImHarsh11"
  },
  {
    mediaName: "LinkedIN",
    mediaImage: LinkedLogo,
    mediaLink: "https://www.linkedin.com/in/harshavardhan-bajanthri-779010194/"
  },
  {
    mediaName: "Mail",
    mediaImage: MailIcon,
    mediaLink: "mailto:harshab1104@gmail.com"
  },
]

export default function FooterSection() {
  return (
    <div id="footer-wrapper">
      <div className="build">
        <p>Build by Harshavardhan B </p>
      </div>
      <div className="footer-social">
        <ul>
          {FooterSocialLinks.map((item, index) => (
            <li key={index}>
              <a href={item.mediaLink} target="_blank" rel="noopener noreferrer">
                <img src={item.mediaImage} alt={item.mediaName} width="30" />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className='rights'>
        <p>All rights reserved. © 2025 www.harshab.dev</p>
          
          <p>Design inspired from <a href="https://v4.brittanychiang.com/">brittany chiang</a> 
        </p>
      </div>
    </div>
  );
}
=======
import LinkedLogo from '../assets/linkedin.png'
import InstaLogo from '../assets/instagram.svg'
import GithubLogo from '../assets/github.svg'
import MailIcon from '../assets/mailIcon.svg'

const FooterSocialLinks = [
  {
    mediaName: "Instagram",
    mediaImage: InstaLogo,
    mediaLink: "https://www.instagram.com/im_harshu11?igsh=MXJqMjhjOTc5NnF2ZA%3D%3D&utm_source=qr"
  },
  {
    mediaName: "Github",
    mediaImage: GithubLogo,
    mediaLink: "https://github.com/ImHarsh11"
  },
  {
    mediaName: "LinkedIN",
    mediaImage: LinkedLogo,
    mediaLink: "https://www.linkedin.com/in/harshavardhan-bajanthri-779010194/"
  },
  {
    mediaName: "Mail",
    mediaImage: MailIcon,
    mediaLink: "mailto:harshab1104@gmail.com"
  },
]

export default function FooterSection() {
  return (
    <div id="footer-wrapper">
      <div className="build">
        <p>Build by Harshavardhan B </p>
      </div>
      <div className="footer-social">
        <ul>
          {FooterSocialLinks.map((item, index) => (
            <li key={index}>
              <a href={item.mediaLink} target="_blank" rel="noopener noreferrer">
                <img src={item.mediaImage} alt={item.mediaName} width="30" />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className='rights'>
        <p>All rights reserved. © 2025 www.harshab.dev</p>
      </div>
    </div>
  );
}
>>>>>>> df2e70b31698d7cf642fdb9fd119bcb3f608c1dc
