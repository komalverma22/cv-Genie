type InfoType = {
  name: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  twitter: string;
  summary?: string;
};

export default function PersonalInfoRight({ info }: { info: InfoType }) {
  // Filter out empty social media fields - completely remove if empty
  const socialLinks = [
    info.linkedin && {
      label: "LinkedIn",
      url: `https://linkedin.com/in/${info.linkedin}`,
      display: `linkedin.com/in/${info.linkedin}`
    },
    info.github && {
      label: "GitHub", 
      url: `https://github.com/${info.github}`,
      display: `github.com/${info.github}`
    },
    info.twitter && {
      label: "Twitter",
      url: `https://twitter.com/${info.twitter}`, 
      display: `twitter.com/${info.twitter}`
    }
  ].filter(Boolean);

  // Create contact info array, filtering out empty values
  const contactInfo = [
    info.location && info.location.trim(),
    info.email && info.email.trim()
  ].filter(Boolean);

  return (
    <div className="px-6 pt-4 space-y-4">
      {/* Name & Contact */}
      <div className="text-center">
        <h1 className="text-3xl font-bold uppercase mb-2">{info.name || "Your Name"}</h1>
        
        {/* Only show contact info if at least one field exists */}
        {contactInfo.length > 0 && (
          <p className="text-sm flex justify-center gap-1 flex-wrap">
            {info.location && <span>{info.location}</span>}
            {info.location && info.email && <span> | </span>}
            {info.email && (
              <a
                href={`mailto:${info.email}`}
                style={{
                  color: "var(--link-color)",
                  fontWeight: "500",
                }}
              >
                {info.email}
              </a>
            )}
          </p>
        )}

        {/* Social Links - Only show if they exist */}
        {socialLinks.length > 0 && (
          <div className="flex justify-center gap-1 text-sm mt-0 flex-wrap">
            {socialLinks.map((link, index) => (
              <span key={link.label}>
                <a
                  href={link.url}
                  style={{
                    color: "var(--link-color)",
                    fontWeight: "500",
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.display}
                </a>
                {index < socialLinks.length - 1 && " | "}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Summary - Only show if it exists */}
      {info.summary && info.summary.trim() && (
        <div className="my-1">
          <h2 
            className="font-semibold border-b pb-2 mb-1 text-base leading-relaxed"
            style={{ borderBottom: "var(--border)" }}
          >
            SUMMARY
          </h2>
          <p className="text-sm">
            {info.summary}
          </p>
        </div>
      )}
    </div>
  );
}