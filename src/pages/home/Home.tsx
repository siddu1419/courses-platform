import Courses from './Courses'
import Main from './Main'
import About from './About'
import Blog from './Blog'
import Testimonials from './Testimonials'
import Contact from './Contact'
import PrivacyNotice from './PrivacyNotice'
import TeacherTribute from './TeacherTribute'

export default function Home() {
  return (
    <>
      <Main />
      <About />
      <Courses />
      <Testimonials />
      <Blog /> 
      <Contact /> 
      <PrivacyNotice/>
      <TeacherTribute/>
    </>
  )
}
