import ContactButtons from "./ContactButtons.js";
export default function About() {
    return (
        <div>
            <img className="rounded-full h-28"
                src="https://media.licdn.com/dms/image/D5603AQHu7Kj5X0ljIA/profile-displayphoto-shrink_800_800/0/1674073759784?e=2147483647&v=beta&t=O1P4DrAuIakqohPgIUbXpay5MVEu4GOXvt24S92o1o4" />
            <h1>Hi, I'm Josiah!</h1>
            <h1>As a young boy, I fell in love with all things computers... especially coding.
                At the age of 9 I discovered Codecademy and getting me off of that website was near impossible. I devoutly enjoyed learning the basics of HTML, JavaScript, and CSS.
                I continued to learn about web development throughout high school and while working in restaurants.
                I then decided to continue my education by attending Flatiron School, a 3-month software engineering bootcamp,
                where I learned a variety of skills like React, Ruby(on Rails), and a wide variety of other basic programming knowledge.
            </h1>
            {/* <button></button> */}

            <a href="https://www.linkedin.com/in/josiah-storrie/" target="blank">
                <div className="navbg rounded-full shadow-lg shadow-gray-200 p-6 h-6 w-6 cursor-pointer hover:scale-110 ease-in duration-100">
                    <svg viewBox="0 0 448 550" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                    </svg>
                </div>
            </a>
            <ContactButtons/>
        </div>
    )
}