import Button from '../components/ui/Button'
import GridLines from '../components/ui/GridLines'

export default function NotFound() {
  return (
    <section className="relative bg-offwhite py-28 lg:py-40">
      <GridLines tone="light" />
      <div className="container-site relative text-center">
        <p className="font-label text-[140px] leading-none text-navy-100 lg:text-[220px]">404</p>
        <h1 className="mt-2 text-[40px] text-navy-900 sm:text-[56px]">Page not found</h1>
        <Button href="/" variant="navy" arrow className="mt-10">Back to Home</Button>
      </div>
    </section>
  )
}
