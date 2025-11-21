export interface Student {
  id: number;
  name: string;
  grade: 'Freshman' | 'Sophomore' | 'Junior' | 'Senior';
  image: string;
  link: string;
  hexcode: string;
}

function hexGen(id: number): string {
  const randNum = id * 10;
  const hexValue = (id * randNum).toString(16).toUpperCase();
  return hexValue.padStart(4, '0'); 
}


export const students: Student[] = [
  { id: 1,  name: 'Eyad', grade: 'Freshman', image: 'previews/Eyad.png', link: 'https://eddythesixthofsevens.github.io/my-website/', hexcode: '' },
  { id: 2,  name: 'Jayden', grade: 'Freshman', image: 'previews/Jayden.png', link: 'http://jaydenangulo.github.io', hexcode: '' },
  { id: 3,  name: 'Nicholas W', grade: 'Freshman', image: 'previews/NicholasW.png', link: 'https://njkittens555.github.io/web_project_123/', hexcode: '' },
  { id: 4,  name: 'Gabi', grade: 'Freshman', image: 'previews/Gabriela.png', link: 'https://gabibabi2609.github.io/90s-Personal-Home-Page/', hexcode: '' },
  { id: 5,  name: 'Aishwarya', grade: 'Freshman', image: 'previews/Aishwarya.png', link: 'https://aishwaryac8811.github.io/Web_project/', hexcode: '' },
  { id: 6,  name: 'Jaden', grade: 'Freshman', image: 'previews/Jaden.png', link: 'https://senorpancake2.github.io/90s_html_project/', hexcode: '' },
  { id: 7,  name: 'Grayson', grade: 'Freshman', image: 'previews/Grayson.png', link: 'https://redfrog3.github.io/90s_webpage/', hexcode: '' },
  { id: 8,  name: 'Aarush', grade: 'Freshman', image: 'previews/Aarush.png', link: 'https://aarush544.github.io/Personal-Webpage/', hexcode: '' },
  { id: 9,  name: 'Leo', grade: 'Freshman', image: 'previews/Leonardo.png', link: 'https://didactic-fortnight-q7ggw4prw7wv36xqx-5501.app.github.dev/', hexcode: '' },
  { id: 11, name: 'Azaan', grade: 'Freshman', image: 'previews/Azaan.png', link: 'https://cool-guy6767.github.io/Web_Practice/', hexcode: '' },
  { id: 12, name: 'Arsen', grade: 'Freshman', image: 'previews/Arsen.png', link: 'https://agnet9367.github.io/web_project/', hexcode: '' },
  { id: 13, name: 'Shiven', grade: 'Freshman', image: 'previews/Shiven.jpeg', link: 'https://shivencsp.github.io/90s-HTML-CSS-page/', hexcode: '' },
  { id: 14, name: 'Ethan', grade: 'Freshman', image: 'previews/Ethan.png', link: 'https://congenial-dollop-pj9p565qpvh66rp-5500.app.github.dev/', hexcode: '' },
  { id: 15, name: 'Chance', grade: 'Freshman', image: 'previews/Chance.png', link: 'https://github.com/sirchance123/htmlprojectcsaea', hexcode: '' },
  { id: 16, name: 'Elijah', grade: 'Freshman', image: 'previews/Elija.png', link: 'https://slash7xx.github.io/90s_webpage/', hexcode: '' },
  { id: 17, name: 'James F', grade: 'Freshman', image: 'previews/James.png', link: 'https://jko12345-theskibber.github.io/Html-Css/#dogs', hexcode: '' },
  { id: 18, name: 'Julian', grade: 'Freshman', image: 'previews/Julian.png', link: 'https://julianf-30.github.io/90s-website/', hexcode: '' },
  { id: 19, name: 'Liam', grade: 'Freshman', image: 'previews/William.png', link: 'https://liamjostar.github.io/web_practice/', hexcode: '' },
  { id: 20, name: 'Christian B', grade: 'Junior', image: 'previews/ChristianB.png', link: 'https://iheartny888-dev.github.io/htmlproject/', hexcode: '' },
  { id: 21, name: 'Yogita', grade: 'Junior', image: 'previews/Yogita.png', link: 'https://yogitam004.github.io/90-s-Personal-Web-Page-Project/', hexcode: '' },
  { id: 22, name: 'Vaibhav', grade: 'Junior', image: 'previews/Vaibhav.png', link: 'https://voorheesvikings.github.io/comp_sci_90s_homepage/', hexcode: '' },
  { id: 23, name: 'Sofia', grade: 'Junior', image: 'previews/Sofia.png', link: 'https://sofia7334.github.io/90s-personal-web-page/', hexcode: '' },
  { id: 24, name: 'Diego', grade: 'Junior', image: 'previews/Diego.png', link: 'https://diego4322.github.io/html-project/', hexcode: '' },
  { id: 25, name: 'Joseph S', grade: 'Junior', image: 'previews/JosephS.png', link: 'https://josephs67.github.io/html_web_design_project/', hexcode: '' },
  { id: 26, name: 'Hunter', grade: 'Junior', image: 'previews/Hunter.png', link: 'https://poltergeese91.github.io/my-personal-website/', hexcode: '' },
  { id: 27, name: 'Joshua', grade: 'Junior', image: 'previews/Joshua.png', link: 'https://bnshua.github.io/90s/', hexcode: '' },
  { id: 28, name: 'Bernard', grade: 'Junior', image: 'previews/Bernard.png', link: 'https://bernardloquias.github.io/Bernard-s-Cool-Web-Page/', hexcode: '' },
  { id: 29, name: 'Sourish', grade: 'Junior', image: 'previews/Sourish.png', link: 'https://sausysausages.github.io/I_am_a_webpage/', hexcode: '' },
  { id: 30, name: 'Makenzie', grade: 'Junior', image: 'previews/Makenzie.png', link: 'https://bleepzorpvorp.github.io/About-Me/', hexcode: '' },
  { id: 31, name: 'Corbin', grade: 'Junior', image: 'previews/Corbin.png', link: 'https://corbinpetzinger-sys.github.io/Sigma-page-project/', hexcode: '' },
  { id: 32, name: 'Wyatt', grade: 'Junior', image: 'previews/Wyatt.png', link: 'https://wyatt1003.github.io/HTMLproject/', hexcode: '' },
  { id: 33, name: 'Shrenik', grade: 'Junior', image: 'previews/Shrenik.png', link: 'https://shrenikraxit.github.io/90sproj/#music-mania', hexcode: '' },
  { id: 34, name: 'Christopher', grade: 'Junior', image: 'previews/Christopher.png', link: 'https://chrisc115.github.io/My-90s-Personal-Home-Page/', hexcode: '' },
  { id: 35, name: 'Luca', grade: 'Junior', image: 'previews/Luca.png', link: 'https://fictional-guacamole-94gw7vgr62779w-5500.app.github.dev/', hexcode: '' },
  { id: 36, name: 'Ryan', grade: 'Sophomore', image: 'previews/Ryan.png', link: 'https://cagneycarnationreal.github.io/My_90s_Homepage/', hexcode: '' },
  { id: 37, name: 'Cole', grade: 'Sophomore', image: 'previews/Cole.png', link: 'https://realmugman.github.io/90s-google-bungus-/', hexcode: '' },
  { id: 38, name: 'Nathaniel', grade: 'Sophomore', image: 'previews/Nathaniel.png', link: 'https://nzv105.github.io/My-90s-Personal-Home-Page-Project/', hexcode: '' },
  { id: 39, name: 'Aaditya', grade: 'Sophomore', image: 'previews/Aaditya.png', link: 'https://general-obi-one-kenobi.github.io/html-project/', hexcode: '' },
  { id: 40, name: 'Tor', grade: 'Sophomore', image: 'previews/Tor.png', link: 'https://pewpewtorjones.github.io/csaeawebsite/', hexcode: '' },
  { id: 41, name: 'Joseph', grade: 'Sophomore', image: 'previews/Joseph.png', link: 'https://stegss.github.io/JS-Personal-Page-Terence/', hexcode: '' },
  { id: 42, name: 'Thomas', grade: 'Sophomore', image: 'previews/Thomas.png', link: 'https://thomasmorgan394.github.io/90s/#soccer', hexcode: '' },
  { id: 43, name: 'Rudy', grade: 'Sophomore', image: 'previews/Rudy.png', link: 'https://codemaster78.github.io/HTML-Practice/', hexcode: '' },
  { id: 44, name: 'John', grade: 'Sophomore', image: 'previews/John.png', link: 'https://jhmra28.github.io/NewHTMLWebsiteCool/', hexcode: '' },
  { id: 45, name: 'Liyana', grade: 'Sophomore', image: 'previews/Liyana.png', link: 'https://luluu888.github.io/my_90s_home_page_csaea/', hexcode: '' },
  { id: 46, name: 'Dilshan', grade: 'Sophomore', image: 'previews/Dilshan.png', link: 'https://idontknow442.github.io/CSAEA-project/', hexcode: '' },
  { id: 47, name: 'Joel', grade: 'Sophomore', image: 'previews/Joel.png', link: 'https://primitiveman495.github.io/evil-html/', hexcode: '' },
  { id: 48, name: 'Arben', grade: 'Sophomore', image: 'previews/Arben.png', link: 'https://nebra77.github.io/My-personal-thing/', hexcode: '' },
  { id: 49, name: 'Eris', grade: 'Sophomore', image: 'previews/Zoe.png', link: 'https://erisastrophysics.github.io/MyFirstWebpage/', hexcode: '' },
  { id: 50, name: 'Atharva', grade: 'Sophomore', image: 'previews/Atharva.png', link: 'https://djshiesty.github.io/90s-HTML-website/index.html', hexcode: '' },
  { id: 51, name: 'James K', grade: 'Sophomore', image: 'previews/JamesF.png', link: 'https://fechner20.github.io/my-html-website/', hexcode: '' },
  { id: 52, name: 'Eamon McKeon', grade: 'Sophomore', image: 'previews/Eamon.png', link: 'https://laughing-broccoli-g47r6g7ww9vrf9vxr-5501.app.github.dev/html.html', hexcode: '' },
  { id: 53, name: 'Arin', grade: 'Sophomore', image: 'previews/Arin.png', link: 'https://blighttix.github.io/website.../', hexcode: '' },
  { id: 54, name: 'Armaan', grade: 'Sophomore', image: 'previews/Armaan.png', link: 'https://blackmonkeyrat.github.io/90spersonalhomepageproject/', hexcode: '' },
  { id: 55, name: 'Nicholas S', grade: 'Junior', image: 'previews/NicholasS.png', link: 'https://ybgnick.github.io/90swebpage/', hexcode: '' },
  { id: 56, name: 'Tian', grade: 'Junior', image: 'previews/Tian.png', link: 'https://baltimoreoriole.github.io/muncher/', hexcode: '' },
  { id: 57, name: "Kavin", grade: "Freshman", image: "previews/Kavin.png", link: "https://dogattackerwfsdvckncbipdvcjvhb.github.io/HTML-PROJECT/", hexcode: '' },
  { id: 58, name: "Caleb", grade: "Freshman", image: "previews/Caleb.png", link: "https://elldoesstuff.github.io/Caleb-s-90-s-Website/", hexcode: '' },
  { id: 59, name: "Mateo", grade: "Freshman", image: "previews/Mateo.png", link: "https://m4fc.github.io/90-s-website-project-/", hexcode: '' }
];

students.forEach(student => {
  student.hexcode = hexGen(student.id);
});
