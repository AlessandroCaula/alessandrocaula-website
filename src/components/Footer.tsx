const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div className="text-foreground flex-center pb-2 pt-8">
      <i>@ {year} Alessandro Caula</i>
    </div>
  )
}

export default Footer