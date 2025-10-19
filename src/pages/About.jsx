const About = () => {
  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">About Us</h1>
        <p className="text-lg text-base-content mb-8">
          Welcome to our project! We're a team of passionate developers, designers, and dreamers dedicated to building beautiful and functional web experiences. Our mission is to make technology intuitive, accessible, and inspiring for everyone.
        </p>

        <div className="grid md:grid-cols-1 gap-6">
          {/* Card 1 */}
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all">
            <div className="card-body items-center text-center">
              <h2 className="card-title text-secondary">Our Vision</h2>
              <p>
                To empower creativity through technology and deliver seamless digital solutions.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all">
            <div className="card-body items-center text-center">
              <h2 className="card-title text-secondary">Our Mission</h2>
              <p>
                We aim to bridge innovation and design, crafting software that feels human.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all">
            <div className="card-body items-center text-center">
              <h2 className="card-title text-secondary">Our Values</h2>
              <p>
                Integrity, curiosity, and collaboration guide everything we build and believe in.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <button className="btn btn-primary btn-wide">Contact Us</button>
        </div>
      </div>
    </div>
  );
}

export default About
