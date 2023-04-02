import htmlImg from './html.svg'
import cssImg from './css.svg'
import javaImg from './javascript.svg'
import typeImg from './typescript.svg'



export const frontend = {
  html:{
   name:'HTML',
   desc:'HTML (Hypertext Markup Language) is the standard markup language used to create web pages. As a developer, knowing HTML is essential as it is the foundation of every web page. HTML provides the structure and content of the page, allowing other languages like CSS and JavaScript to add style and interactivity.',
   img:htmlImg
  },
  css:{
    name:'CSS',
    desc:'CSS (Cascading Style Sheets) is a language used to add visual style and layout to web pages. As a developer, CSS is valuable because it allows for the separation of presentation and content, making it easier to maintain and update the visual design of a website. CSS also enables responsive design, allowing web pages to adapt to different devices and screen sizes.',
    img:cssImg
   },
  javaScript:{
    name:'JavaScript',
    desc:'JavaScript is a popular programming language used to add interactivity and dynamic behavior to web pages. As a developer, JavaScript is valuable because it allows for client-side scripting, meaning the code is executed on the users computer, reducing the need for server requests. JavaScript can also be used on the server-side with technologies like Node.js.',
    img:javaImg
   },
  typeScript:{
    name:'TypeScript',
    desc:'TypeScript is a superset of JavaScript that adds optional static typing and other features to the language. As a developer, TypeScript is valuable because it helps catch errors and improve code quality by providing a more strict type system. TypeScript also adds features like interfaces, classes, and namespaces, making it easier to manage and scale larger codebases.',
    img:typeImg
  }  

}
