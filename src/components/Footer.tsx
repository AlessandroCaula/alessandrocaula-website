const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div className="text-foreground flex-center pb-2 pt-8 gap-3">
      <img src="../../public/koala.svg" className="w-5"/>
      <i>{year} Alessandro Caula</i>
    </div>
  )
}

export default Footer