import { Button } from "../ui/button"

interface props {
  icon?: React.ReactNode;
  label?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

// Button used for the home page, with the links for LinkedIn, GitHub, Email, etc.
const SocialButton = ({ icon = null, label = '', onClick = () => {}}: props) => {
  return (
    <Button className='social-button' size="lg" onClick={onClick}>
      {icon}
      {label}
    </Button>
  )
}

export default SocialButton