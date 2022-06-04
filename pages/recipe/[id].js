
import { useRouter } from "next/router"
const id = () => {
    const router=useRouter()
    const id=router.query.id
  return (
    <>
    <h1>i am in {id}</h1>
    </>
  )
}

export default id