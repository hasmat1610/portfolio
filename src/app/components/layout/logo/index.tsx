import Image from "next/image"
import Link from "next/link"

const Logo = () => {
  return (
    <>
        <Link href="/" aria-label="Go to homepage">
            <Image src={"/images/logo/logo.svg"} alt="Hasmat Patel logo" width={70} height={70} priority />
        </Link>
    </>
  )
}

export default Logo