const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div className="text-foreground flex-center pb-2 pt-0 gap-3">
      <img src="/koala.svg" className="w-5"/>
      <i>{year} Alessandro Caula</i>
    </div>
  )
}

export default Footer