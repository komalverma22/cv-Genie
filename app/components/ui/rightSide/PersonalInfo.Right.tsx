export default function PersonalInfoRight({ info }) {
  return (
    <div className="text-black px-6  space-y-4">
      {/* Name & Contact */}
      <div className="text-center">
        <h1 className="text-3xl font-bold uppercase">{info.name || "Your Name"}</h1>
        <p className=" text-sm flex justify-center gap-1">
          
            {info.location || "Your Location"}  {" "} |
            
          <a href={`mailto:${info.email}`} className="text-blue-800 underline">
            {info.email || "youremail@example.com"} 
          </a>
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-1 text-sm mt-0 flex-wrap">
         <div>
  
 <div>
  {/* <strong>LinkedIn:</strong>{" "} */}
  <a
    href={`https://linkedin.com/in/${info.linkedin || "username"}`}
    className="text-blue-800 underline"
    target="_blank"
    rel="noopener noreferrer"
  >
    linkedin.com/in/{info.linkedin || "username"} |</a>
</div>
</div>
            <a
              href={`https://github.com/${info.github || "username"}`}
              className="text-blue-800 underline"
              target="_blank"
              rel="noopener noreferrer"
            >github.com/{info.github|| "username"} |
            </a>
        
         
            <a
              href={`https://twitter.com/${info.twitter || "username"}`}
              className="text-blue-800 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              twitter.com/{info.twitter||"username"}
            </a>
        
        </div>
      </div>

      {/* Summary */}
      <div>
        <h2 className="font-semibold  mb-1">SUMMARY</h2>
        <p className="text-black text-sm">
         {info.summary || "Tell us about Yourself..."} {" "}
        </p>
      </div>
    </div>
  );
}
