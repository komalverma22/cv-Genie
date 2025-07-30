export default function PersonalInfo({ info, setInfo }) {
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const inputFields = [
    { label: "Full Name", name: "name", placeholder: "Enter your name" },
    { label: "Location", name: "location", placeholder: "Enter your location" },
    { label: "Email", name: "email", placeholder: "Enter your email" },
    { label: "GitHub", name: "github", placeholder: "Enter your GitHub username" },
    { label: "LinkedIn", name: "linkedin", placeholder: "Enter your LinkedIn username" },
    { label: "Twitter", name: "twitter", placeholder: "Enter your Twitter handle" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 title-font">Personal Info</h1>

      <div className="flex flex-wrap -mx-2">
        {inputFields.map((field) => (
          <div key={field.name} className="w-1/2 px-2 mb-4">
            <label className="block mb-1 font-medium">{field.label}</label>
            <input
              type="text"
              name={field.name}
              value={info[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
        ))}
      </div>

      {/* Summary Field */}
      <div className="">
        <label className="block mb-1 font-medium">Summary</label>
        <textarea
          name="summary"
          rows={3}
          value={info.summary}
          onChange={handleChange}
          placeholder="Tell us about yourself..."
          className="w-full border border-gray-300 p-2 rounded resize-y"
        />
      </div>
    </div>
  );
}
