import type { SocialButtonProps } from "@/types"
import { Button } from "../ui/button"

// Button used for the home page, with the links for LinkedIn, GitHub, Email, etc.
const SocialButton = ({ icon = null, label = '', onClick = () => {}}: SocialButtonProps) => {
  return (
    <Button className='social-button z-20' size="lg" onClick={onClick}>
      {icon}
      {label}
    </Button>
  )
}

export default SocialButton