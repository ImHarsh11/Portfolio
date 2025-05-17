import HtmlImg from '../assets/HTMLWhite.svg'
  import CssImg from '../assets/CSSWhite.svg'
  import JavaScriptImg from '../assets/javascriptWhite.svg'
  import ReactImg from '../assets/reactWhite.svg'
  import MysqlImg from '../assets/mysqlWhite.svg'
  import JavaImg from '../assets/javaWhite.svg'
  import PythonImg from '../assets/pythonWhite.svg'
  import NodeJsImg from '../assets/nodejsWhite.svg'
  // import HtmlImg from './assets/'
  import LinuxImg from '../assets/linuxwhite.png'

    const contentForSkills = [
    {
      image:HtmlImg,
      title:"HTML",
      // score:"8/10"
    },
    {
      image:CssImg,
      title:"CSS"
    },
    {
      image:JavaScriptImg,
      title:"JavaScript"
    },
    {
      image:ReactImg,
      title:"React"
    },
    {
      image:MysqlImg,
      title:"Mysql"
    },
    {
      image:JavaImg,
      title:"Java"
    },
    {
      image:PythonImg,
      title:"Python"
    },
    {
      image:NodeJsImg,
      title:"Node Js"
    },
    {
      image:LinuxImg,
      title:"Linux"
    },
  ]

function SkillElements({ image, title, score }) {
  return (
    <li className="skill-item">
      <img src={image} alt={title} />
      <p>{title}</p>
      <p>{score}</p>
    </li>
  );
}

export default function SkillsStack() {
  return (
      <div id="skills-wrapper">
        <h2><span>03.</span>Some technologies I've worked with </h2>
      <section>
        <ul>
          {/* Displaying skills like Java, Python, HTML, CSS, etc. */}
          {contentForSkills.map((content) => (
            <SkillElements key={content.title} {...content} />
          ))}
        </ul>
      </section>
    </div>
  );
}
