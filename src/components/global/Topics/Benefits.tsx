import H4 from "../Title/H4";

interface BenefitsProps {
  title?: string;
  description?: string[];
  className?: string;
}

export default function Benefits({
  title,
  description,
  className,
}: BenefitsProps) {

  return (
    <div className={`text-start flex flex-col ${className}`}>
      {
        title && <H4 className="mb-1">{title}</H4>
      }
      {description?.map((item:string, index:number) => {
        return(
          <p className="mt-0" key={index}>{item}</p>
        )
      })}
    </div>
  );
}
