const Careers = () => {
  const jobs = [
    {
      title: "Frontend Developer",
      location: "Remote / Hybrid",
      type: "Full-Time",
      description:
        "We’re looking for a creative React developer with strong UI/UX skills and experience with Tailwind CSS.",
    },
    {
      title: "Backend Engineer",
      location: "New York, USA",
      type: "Full-Time",
      description:
        "Join our backend team to build scalable APIs and microservices with Node.js and modern cloud technologies.",
    },
    {
      title: "UI/UX Designer",
      location: "Remote",
      type: "Contract",
      description:
        "Help design intuitive interfaces and delightful user experiences across our digital products.",
    },
  ];

  return (
    <div className="min-h-screen bg-base-200 py-12 px-6 flex flex-col items-center">
      <div className="max-w-5xl text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Careers at Our Company</h1>
        <p className="text-lg text-base-content">
          Join a passionate team shaping the future of digital innovation. Explore our current openings and grow your career with us.
        </p>
      </div>

      <div className="grid md:grid-cols-1 gap-5 w-full max-w-5xl">
        {jobs.map((job, index) => (
          <div key={index} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all">
            <div className="card-body">
              <h2 className="card-title text-secondary">{job.title}</h2>
              <p className="text-sm text-base-content/70 mb-2">
                {job.location} • {job.type}
              </p>
              <p>{job.description}</p>
              <div className="card-actions justify-end mt-4">
                <button className="btn btn-outline btn-primary">Apply Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-3">Didn’t find your role?</h2>
        <p className="text-base-content mb-6">
          We’re always looking for talented individuals. Send us your resume — we’d love to hear from you!
        </p>
        <button className="btn btn-primary btn-wide">Send Resume</button>
      </div>
    </div>
  );
}

export default Careers