import { BsGithub, BsLinkedin } from 'react-icons/bs'
import LightModeProfilePic from '../../assets/Web_Light_Mode.jpeg'
import DarkModeProfilePic from '../../assets/Web_Dark_Mode.jpeg'
import SocialButton from '../custom/SocialButton'
import { SiGmail } from 'react-icons/si'
import { GrDocumentPdf } from 'react-icons/gr'
import { useTheme } from '@/context/ThemeContext'

const Home = () => {
  const { isDark } = useTheme();

  return (
    <div className='flex-center flex-col margin-top'>
      <img 
        className="w-68 custom-shadow rounded-full max-sm:w-56" 
        src={isDark ? DarkModeProfilePic : LightModeProfilePic} 
        alt="Alessandro Caula Picture" 
      />
      <h1 className='sm:mt-18 mt-12'>Hi! I'm <span className='font-inter'>Alessandro Caula</span></h1>
      <h2 className='font-inter sm:mt-8 mt-6 font-light'>Software Developer and Bioinformatician</h2>

      <div className='mt-14 sm:mt-20 w-full flex-center sm:space-x-4 md:space-x-8 max-sm:flex-col max-sm:space-y-4 max-sm:px-4'>
        <SocialButton 
          icon={<BsLinkedin className={!isDark ? "text-[#0967C2]" : ""} />}
          label='LinkedIn'
          onClick={() => window.open('https://www.linkedin.com/in/alessandro-caula-25a20418a/', '_blank')}
        />
        <SocialButton 
          icon={<BsGithub />}
          label='GitHub'
          onClick={() => window.open('https://github.com/AlessandroCaula', '_blank')}
        />
        <SocialButton 
          icon={<SiGmail className={!isDark ? "text-[#EA4336]" : ""} />}
          label='Email'
          onClick={() => window.location.href = 'mailto:alecaula96@gmail.com'}
        />
        <SocialButton 
          icon={<GrDocumentPdf />}
          label='CV'
          onClick={() => window.open('/public/Alessandro_Caula_CV.pdf', '_blank')}
        />
      </div>
    </div>
  )
}

export default Home