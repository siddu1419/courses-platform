import Courses from './Courses'
import Main from './Main'
import About from './About'
import AboutExamTrakker from './AboutExamTrakker'
import Blog from './Blog'
import Testimonials from './Testimonials'
import Contact from './Contact'
import PrivacyNotice from './PrivacyNotice'
import TeacherTribute from './TeacherTribute'
import ChaturVsRancho from './ChaturVsRancho'

export default function Home() {
  return (
    <>
      <Main />
      <About />
      <AboutExamTrakker/>
      <ChaturVsRancho/>
      <Courses />
      <Testimonials />
      <Blog /> 
      <Contact /> 
      <PrivacyNotice/>
      <TeacherTribute/>
    </>
  )
}
