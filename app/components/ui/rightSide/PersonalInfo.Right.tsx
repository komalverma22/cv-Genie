export default function PersonalInfoRight({ info }) {
  return (
    <div className=" px-6 pt-4  space-y-4">
      {/* Name & Contact */}
      <div className="text-center">
        <h1 className="text-3xl font-bold uppercase mb-2">{info.name || "Your Name"}</h1>
        <p className=" text-sm flex justify-center gap-1">
          
            {info.location || "Your Location"}  {" "} |
            
         <a
  href={`mailto:${info.email}`}
  style={{
    color: "var(--link-color)", // DodgerBlue shade (pretty and soft)
    // textDecoration: "underline",
    fontWeight: "500",
    // padding:"2px"
  }}
>
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
    className=" "
              style={{
    color: "var(--link-color)", // DodgerBlue shade (pretty and soft)
    // textDecoration: "underline",
    fontWeight: "500",
    //  textUnderlineOffset: "4px"
    // padding:"2px"
  }}
    target="_blank"
    rel="noopener noreferrer"
  >
    linkedin.com/in/{info.linkedin || "username"} |</a>
</div>
</div>
            <a
              href={`https://github.com/${info.github || "username"}`}
             
               style={{
    color: "var(--link-color)", // DodgerBlue shade (pretty and soft)
    // textDecoration: "underline",
    fontWeight: "500",
    //  textUnderlineOffset: "4px"
    // padding:"2px"
  }}
              target="_blank"
              rel="noopener noreferrer"
            >github.com/{info.github|| "username"} |
            </a>
        
         
            <a
              href={`https://twitter.com/${info.twitter || "username"}`}
              className=" "
               style={{
    color: "var(--link-color)", // DodgerBlue shade (pretty and soft)
    // textDecoration: "underline",
    fontWeight: "500",
    // padding:"2px"
  }}
              target="_blank"
              rel="noopener noreferrer"
            >
              twitter.com/{info.twitter||"username"}
            </a>
        
        </div>
      </div>

      {/* Summary */}
      <div className=" my-1">
          <h2 className="font-semibold border-b var[--border] pb-2 mb-1 text-base leading-relaxed
"  style={{ borderBottom: "var(--border)" }}>SUMMARY</h2>
        <p className="text-sm">
         {info.summary || "Tell us about Yourself..."} {" "}
        </p>
      </div>
    </div>
  );
}
