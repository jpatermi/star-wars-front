import Image from "next/image";

interface LogoProps {
  width: number
}
export const Logo = ({
  width
}: LogoProps) => {
  return (
    <Image
      height={0}
      width={width}
      alt="logo"
      src="/star-wars.svg"
      className={"mx-auto"}
    />
  )
}