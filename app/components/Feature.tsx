export default function Features() {
  const features = [
    {
      icon: "/human-resources (3).png", // Replace with your actual image path
      title: "Save Time & Effort",
      description: "Create a professional resume in under 10 minute,No more struggling with formatting in Word."
    },
    {
      icon: "/finger-snap.png",
      title: "Completely Free & Easy",
      description: "Get smart, structured, and human-readable notes delivered instantly."
    },
    {
      icon: "/retention.png",
      title: "Stand Out to Employers",
      description: "Who said what? Who’s doing what? We’ll mark it, assign it, and organize it."
    },
    {
      icon: "/interview.png",
      title: "Increase Interview Chances",
      description: "Send notes to your team, Notion, Slack, or inbox with a click. It's worthy of sharing."
    }
  ];

  return (
    <div className="relative mt-50 pb-10 sm:mt-140 h-auto overflow-hidden mask-image-top">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover opacity-30 sm:opacity-50 backdrop-blur-sm"
        style={{ backgroundImage: "url('/pink-bg.png')" }}
      ></div>

      {/* Text & Content */}
      <div className="relative z-10 pt-40 flex flex-col items-center justify-center px-4 ">
        <div className="flex items-center justify-center gap-3 mt-4">
          <img
            src="/sparkle.png"
            alt="sparkle"
            className="ww-6 sm:w-8 h-6 sm:h-8 object-contain animate-sparkle text-extrabold"
          />
          <h2 className="text-4xl sm:text-6xl font-bold text-black drop-shadow-md">
            Our Features
          </h2>
          <img
            src="/sparkle.png"
            alt="sparkle"
            className="w-6 sm:w-8 h-6 sm:h-8 object-contain animate-sparkle text-extrabold mt-2"
          />
        </div>

        <p className="text-xl mt-4 text-gray-700 text-center max-w-2xl">
          Explore the magical tools that make CVGenie the easiest way to build stunning resumes.
        </p>

        {/* Feature Cards Grid */}
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-6xl w-full px-4 md:px-0 py-0 sm:py-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className=" rounded-2xl p-6 text-center shadow-md backdrop-blur-sm hover:scale-[1.02] transition duration-300"
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="mx-auto mb-4 w-20 h-20 object-contain "
              />
              <h3 className="text-2xl font-semibold text-black mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-700 text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
