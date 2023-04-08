const DynamicPage = ({ params }: any) => {
  const { id } = params

  console.log('calling this page')

  return (
    <div className="">
      <div className="">{id} page</div>
    </div>
  )
}

export default DynamicPage
