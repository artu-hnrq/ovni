import { Col } from '@/components'
import { Header } from './(components)/Tour'
import { Tour } from '@sdk/airtable'

export default async function Layout({ children, params }) {
  let tour = await Tour.retrieve({ 'id': params.id })

  return (
    <div class="col-center-start md:row-start-start min-w-full mt-12 gap-4">
      <Header className='' tour={tour} />
      {children}
    </div>
  )
}
