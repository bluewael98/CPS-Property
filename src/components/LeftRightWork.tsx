import Image from "next/image";
const blockData = [
  {
    imageFirst: true,
    heading: "1",
    textHeading: "Office Cleaning",
    textBody:
      "Keep your workplace pristine and inviting with our comprehensive office cleaning service. We'll meticulously clean and sanitize your workspace, ensuring a productive and healthy environment for your team. From desks to common areas, we leave no corner untouched..",
    imageUrl:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    imgAlt: "Office Cleaning",
  },
  {
    imageFirst: false,
    heading: "2",
    textHeading: "New Custom Built Homes Cleaning",
    textBody:
      "Celebrate the completion of your dream home with our new custom-built homes cleaning service. Our meticulous attention to detail ensures that every nook and cranny is spotless. Trust us to showcase the beauty of your new space, leaving it move-in ready.",
    imageUrl:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80",
    imgAlt: "New Home Cleaning",
  },
  {
    imageFirst: true,
    heading: "3",
    textHeading: "Property Pre and Post Renovation Cleaning",
    textBody:
      "Transform your property with confidence using our pre and post-renovation cleaning. Before the renovation, we prepare your space for the upcoming changes. Afterward, we'll clean away the dust and debris, allowing the new design to shine through. Our thorough service guarantees your property's beauty",
    imageUrl:
      "https://images.unsplash.com/photo-1618832515490-e181c4794a45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    imgAlt: "Property Pre and Post Renovation Cleaning",
  },
  {
    imageFirst: false,
    heading: "4",
    textHeading: "End of Lease Cleaning",
    textBody:
      "Transitioning to a new chapter? Leave your leased space in pristine condition with our end of lease cleaning. Our expert team ensures that every surface is thoroughly cleaned, meeting even the strictest inspection standards. Get your security deposit back hassle-free with our reliable service.",
    imageUrl:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80",
    imgAlt: "End of Lease Cleaning",
  },
  {
    imageFirst: true,
    heading: "5",
    textHeading:
      "Reliable Reporting for Ad-Hoc Repairs and Recommendations to Quality Trades",
    textBody:
      "Our comprehensive cleaning services go beyond just cleaning. We offer a unique service tailored to your property's needs – reliable reporting for ad-hoc repairs and recommendations to quality trades. ",
    imageUrl:
      "https://images.unsplash.com/photo-1603712725038-e9334ae8f39f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    imgAlt:
      "Reliable Reporting for Ad-Hoc Repairs and Recommendations to Quality Trades",
  },
];

export default function LeftRightWork() {
  return (
    <div
      className={`flex justify-center items-center text-center flex-col w-screen sm:mb-[200px] xxs:mb-[100px]`}
    >
      <div
        className={`flex justify-center items-center text-center flex-col bg-navy px-10 lg:px-[160px] py-[116px] md:rounded-[70px] gap-[70px]  `}
      >
        <div className="md:mb-[30px] max-w-[802px] flex flex-col gap-[25px]">
          <h1>Cleaning Services</h1>
          <p>
            We are your trusted partner for comprehensive cleaning services,
            offering meticulous cleaning, property transformation, and expert
            recommendations to keep your spaces pristine and worry-free.
          </p>
        </div>
        {blockData.map((data: any, index: any) => (
          <div
            key={index}
            className="flex flex-col max-w-[967px]  gap-[56px] justify-center items-center text-center md:flex-row md:justify-start md:items-start md:text-start"
          >
            <div
              className={`flex justify-center flex-col md:max-w-[456px] ${
                data.imageFirst === true ? "md:order-2" : "md:order-1"
              }`}
            >
              <div className="flex justify-between items-center ">
                <h1 className=" font-DM text-[80px] md:text-[120px] font-bold text-white">
                  {data.heading}
                </h1>
              </div>

              <h2 className=" text-brown ">{data.textHeading}</h2>
              <p>{data.textBody}</p>
            </div>
            <div
              className={` ${
                data.imageFirst === true ? "md:order-1" : "md:order-2"
              }`}
            >
              <Image
                src={data.imageUrl}
                alt={data.imgAlt}
                width={500}
                height={250}
                className={`md:rounded-bl-[327px] md:rounded-tr-[123px] rounded-[70px]`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
