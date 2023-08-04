import ContactButtons from "./ContactButtons.js";
export default function About() {
    return (
        <div className="flex flex-wrap justify-center">
            <div className="flex rounded-2xl p-3 bg-gray-400 w-10/12">
                <div className="flex flex-wrap justify-center">
                <img className="rounded-full h-28"
                    alt="Profile-Pic"
                    src="https://media.licdn.com/dms/image/D5603AQHu7Kj5X0ljIA/profile-displayphoto-shrink_800_800/0/1674073759784?e=2147483647&v=beta&t=O1P4DrAuIakqohPgIUbXpay5MVEu4GOXvt24S92o1o4" />
                <h1 className="text-2xl">Hi, I'm Josiah!</h1>
                </div>
                <h1 className="w-3/4">As a young boy, I fell in love with all things computers and acted as IT support for my family and close friends... At the age of 9 I began to learn about coding and quickly fell in love.
                    I spent my first few months creating mini projects through online courses, learning the basics of HTML, JavaScript, and CSS.
                    I continued my growth in web development throughout high school by taking online courses and focusing on growing my problem solving skills, all while working full time in restaurants.
                    Shortly after High School, I decided to continue my education by attending Flatiron School, a 3-month software engineering bootcamp,
                    where I learned a variety of skills like React, Ruby(on Rails), and a wide variety of other basic programming knowledge.
                    I graduated from Flatiron School in 2023. Since then I have continued improving and growing my skillset by pursuing AWS Certificates and learning new languages and frameworks such as Java and Next.js all while working full time as an IT Technician at Prospect Ridge Academy
                </h1>
            </div>
                <ContactButtons />
        </div>
    )
}
