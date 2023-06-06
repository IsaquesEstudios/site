import Image from "next/image";

type Logo = {
  src: string | any,
  alt: string,
  height: number,
  width?: number
}

export default function Logo({ src, alt, height, width }: Logo) {

  return (
    <div className={`h-[${height}px]`}>
      <Image src={src} alt={alt} height={height} width={width} />
    </div>
  )
}