import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur-lg">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <Image src="/hardtech-logo.svg" alt="Logo" width={50} height={50} />
            <div className="text-xl font-semibold tracking-tight">HardTech</div>
          </div>
          <div className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
            <a href="#home" className="transition hover:text-blue-600">
              Home
            </a>
            <a href="#about" className="transition hover:text-blue-600">
              About us
            </a>
            <a href="#services" className="transition hover:text-blue-600">
              Our Services
            </a>
            <a href="#projects" className="transition hover:text-blue-600">
              Curated Projects
            </a>
            <a href="#team" className="transition hover:text-blue-600">
              Our Teams
            </a>
            <a href="#contacts" className="transition hover:text-blue-600">
              Contacts
            </a>
          </div>
          <a
            href="#contacts"
            className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Contact us
          </a>
        </nav>
      </header>

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-24 px-6 py-10">
        <section id="home" className="space-y-8 pt-8 flex flex-row">
          <div className="max-w-3xl space-y-6">
            <p className="text-sm uppercase tracking-[0.32em] text-slate-500">
              Welcome to HardTech
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Building modern companies with{" "}
              <span className="text-blue-700">thoughtful</span> digital
              products.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              We craft high-quality websites, services, and project experiences
              that help teams launch confidently and grow with clarity.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Explore services
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-300"
              >
                Learn about us
              </a>
            </div>
          </div>
          <Image
            src="/data-center-room.png"
            alt="Logo"
            width={400}
            height={400}
            className="ml-auto"
          />
        </section>

        <section
          id="about"
          className="rounded-3xl bg-white p-8 shadow-sm shadow-slate-200/50"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.32em] text-slate-500">
                About us
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-950">
                Complete IT Solutions for Businesses of{" "}
                <span className="text-blue-700">All Sizes</span>.
              </h2>
              <p className="mt-4 text-slate-600 leading-8 text-justify">
                HardTech IT Solution is an Indonesian-based IT consulting firm
                offering end-to-end technology services — from Cloud Migration
                and application development to hardware engineering and
                cybersecurity. We partner with businesses of all sizes to
                deliver solutions that are technically sound, locally grounded,
                and strategically aligned with their long-term goals.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-50 p-6 text-center">
                <Image
                  src="/vision.svg"
                  alt="Logo"
                  width={50}
                  height={50}
                  className="m-auto my-3"
                />
                <p className="text-base font-semibold text-slate-900">Vision</p>
                <p className="mt-2 text-slate-600">
                  Indonesia&apos;s catalyst for integrated digital
                  transformation and hardware-software synergy.
                </p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-6 text-center">
                <Image
                  src="/approach.svg"
                  alt="Logo"
                  width={50}
                  height={50}
                  className="m-auto my-3"
                />
                <p className="text-base font-semibold text-slate-900">
                  Approach
                </p>
                <p className="mt-2 text-slate-600">
                  We listen and align with your goals, moving rapidly to deliver
                  secure, end-to-end technology.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="space-y-8">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-slate-500">
              Our Services
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950">
              Scalable Tech Services to{" "}
              <span className="text-blue-700">Power Your Business</span> Growth
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <article className="rounded-3xl bg-white p-6 shadow-sm shadow-slate-200/50">
              <Image
                src="/devsecops.svg"
                alt="Logo"
                width={120}
                height={120}
                className="m-auto my-3"
              />
              <h3 className="text-xl font-semibold text-slate-950">
                DevSecOps & Infrastructure Reliability
              </h3>
              <p className="mt-3 text-slate-600 leading-7 text-justify">
                Ensuring high availability across your entire infrastructure. We
                manage everything from core bare-metal servers to modern
                microservices, applying continuous patching and automated
                pipelines for maximum reliability
              </p>
            </article>
            <article className="rounded-3xl bg-white p-6 shadow-sm shadow-slate-200/50">
              <Image
                src="/backend.svg"
                alt="Logo"
                width={120}
                height={120}
                className="m-auto my-3"
              />
              <h3 className="text-xl font-semibold text-slate-950">
                Backend Developer & System Architecture
              </h3>
              <p className="mt-3 text-slate-600 leading-7 text-justify">
                Engineering scalable server-side solutions and efficient system
                architectures. From database optimization to API orchestration,
                building the high-performance foundations that power seamless
                digital products.
              </p>
            </article>
            <article className="rounded-3xl bg-white p-6 shadow-sm shadow-slate-200/50">
              <Image
                src="/hardware.svg"
                alt="Logo"
                width={120}
                height={120}
                className="m-auto my-3"
              />
              <h3 className="text-xl font-semibold text-slate-950">
                Hardware Engineering & IoT Integration
              </h3>
              <p className="mt-3 text-slate-600 leading-7 text-justify">
                End-to-end IoT ecosystems bridging physical and digital worlds.
                Integrating precision PCB prototyping, advanced firmware, and
                cloud architecture to deliver industrial-grade systems optimized
                for connectivity, security, and long-term stability.
              </p>
            </article>
            <article className="rounded-3xl bg-white p-6 shadow-sm shadow-slate-200/50">
              <Image
                src="/uiux.svg"
                alt="Logo"
                width={120}
                height={120}
                className="m-auto my-3"
              />
              <h3 className="text-xl font-semibold text-slate-950">
                Product Design & UI/UX Experience
              </h3>
              <p className="mt-3 text-slate-600 leading-7 text-justify">
                Creating purposeful digital experiences through human-centered
                design. We turn complex ideas into intuitive interfaces using
                deep research, interactive prototyping, and testing to ensure a
                seamless experience that helps your business grow.
              </p>
            </article>
          </div>
        </section>

        <section id="projects" className="space-y-8">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-slate-500">
              Curated Projects
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950">
              <span className="text-blue-700">Proven Innovations</span> that
              Align Technology with Business Goals
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            <article className="rounded-3xl bg-slate-950 p-6 text-white">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-300">
                Infrastructure & Cloud Migration
              </p>
              <h3 className="mt-3 text-2xl font-semibold">
                Infrastructure Separation & Crucial Services Migration
              </h3>
              <p className="mt-3 text-slate-300 leading-7 text-justify">
                Executed seamless migration of crucial services during
                infrastructure separation. Focused on maintaining continuous
                operational uptime without full system re-engineering.
              </p>
            </article>
            <article className="rounded-3xl bg-slate-950 p-6 text-white">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-300">
                DevOps Engineering
              </p>
              <h3 className="mt-3 text-2xl font-semibold">
                Machine Learning Container Optimization & Patching
              </h3>
              <p className="mt-3 text-slate-300 leading-7 text-justify">
                Slashed machine learning Docker image sizes from 21GB to 2.65GB.
                Routinely patched standardized base images to ensure secure and
                lightweight operations.
              </p>
            </article>
            <article className="rounded-3xl bg-slate-950 p-6 text-white">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-300">
                DevOps Engineering
              </p>
              <h3 className="mt-3 text-2xl font-semibold">
                Isolated CI/CD Pipeline Architecture
              </h3>
              <p className="mt-3 text-slate-300 leading-7 text-justify">
                Designed automated and secure deployment pipelines. Deployed the
                GitLab Runner entirely outside the main Kubernetes cluster to
                guarantee resource isolation and security.
              </p>
            </article>
            <article className="rounded-3xl bg-slate-950 p-6 text-white">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-300">
                Cloud Infrastructure Management.
              </p>
              <h3 className="mt-3 text-2xl font-semibold">
                High-Availability Database Cluster Management
              </h3>
              <p className="mt-3 text-slate-300 leading-7 text-justify">
                Maintained continuous availability for distributed database
                server architectures. Managed robust cluster configurations and
                automated failovers for Patroni PostgreSQL, MongoDB, and Oracle
                DB.
              </p>
            </article>
            <article className="rounded-3xl bg-slate-950 p-6 text-white">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-300">
                Backend Developer
              </p>
              <h3 className="mt-3 text-2xl font-semibold">
                EV Charging Station Data & API Infrastructure
              </h3>
              <p className="mt-3 text-slate-300 leading-7 text-justify">
                Engineered a robust backend system powering real-time data
                ingestion, processing, and delivery for an EV charging station
                network. Designed scalable REST APIs and a reliable data
                pipeline to ensure accurate, low-latency communication between
                charging hardware and the monitoring dashboard.
              </p>
            </article>
            <article className="rounded-3xl bg-slate-950 p-6 text-white">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-300">
                Frontend Developer
              </p>
              <h3 className="mt-3 text-2xl font-semibold">
                EV Charging Station Monitoring Dashboard
              </h3>
              <p className="mt-3 text-slate-300 leading-7 text-justify">
                Developed a real-time monitoring dashboard for electric vehicle
                charging stations, providing operators with live visibility into
                station status, energy consumption, and usage analytics. Built
                with a responsive and intuitive interface to support efficient
                fleet and infrastructure management.
              </p>
            </article>
            <article className="rounded-3xl bg-slate-950 p-6 text-white">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-300">
                UI/UX Designer
              </p>
              <h3 className="mt-3 text-2xl font-semibold">
                UI/UX Design for Human Capital Consulting Platform
              </h3>
              <p className="mt-3 text-slate-300 leading-7 text-justify">
                Delivered a comprehensive UI/UX design for an HR consulting
                firm&apos;s client-facing platform, encompassing user research,
                wireframing, and high-fidelity prototyping. Focused on creating
                a clean, professional interface that simplifies complex HR
                workflows and enhances the overall user experience for both
                consultants and their clients.
              </p>
            </article>
            <article className="rounded-3xl bg-slate-950 p-6 text-white">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-300">
                Hardware Engineering
              </p>
              <h3 className="mt-3 text-2xl font-semibold">
                Charging Station Series Design for Electric Motor
              </h3>
              <p className="mt-3 text-slate-300 leading-7 text-justify">
                Charging Station Series Design for Electric Motor is the design
                of a battery charging system arranged in series to provide
                stable and controlled power distribution. The system includes
                voltage and current regulation, as well as protection features
                such as auto cut-off to stop charging when the battery is full.
                Its purpose is to improve charging efficiency, ensure circuit
                safety, and extend the battery lifespan
              </p>
            </article>
          </div>
        </section>

        <section
          id="team"
          className="rounded-3xl bg-white p-8 shadow-sm shadow-slate-200/50"
        >
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.32em] text-slate-500">
              Our Teams
            </p>
            <h2 className="text-3xl font-semibold text-slate-950">
              A small team with{" "}
              <span className="text-blue-700">broad expertise</span>.
            </h2>
            <p className="max-w-2xl text-slate-600 leading-8">
              Our team mixes product thinkers, designers, and engineers who work
              closely together to shape ideas into polished digital experiences.
            </p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <Image
                src="/research.svg"
                alt="Logo"
                width={60}
                height={60}
                className="m-3"
              />
              <h3 className="text-xl font-semibold text-slate-950">Strategy</h3>
              <p className="mt-3 text-slate-600 leading-7">
                Research, product direction, and business alignment.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <Image
                src="/cloud.svg"
                alt="Logo"
                width={60}
                height={60}
                className="m-3"
              />
              <h3 className="text-xl font-semibold text-slate-950">
                Cloud and DevOps
              </h3>
              <p className="mt-3 text-slate-600 leading-7">
                Scalable infrastructure and automated deployment pipelines
                designed for maximum security
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <Image
                src="/engineering.svg"
                alt="Logo"
                width={60}
                height={60}
                className="m-3"
              />
              <h3 className="text-xl font-semibold text-slate-950">
                Engineering
              </h3>
              <p className="mt-3 text-slate-600 leading-7">
                Front-end and web experiences built for speed and accessibility.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <Image
                src="/design.svg"
                alt="Logo"
                width={60}
                height={60}
                className="m-3"
              />
              <h3 className="text-xl font-semibold text-slate-950">Design</h3>
              <p className="mt-3 text-slate-600 leading-7">
                Brand systems, interfaces, and motion that feel considered.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <Image
                src="/iot.svg"
                alt="Logo"
                width={60}
                height={60}
                className="m-3"
              />
              <h3 className="text-xl font-semibold text-slate-950">
                Hardware Engineering
              </h3>
              <p className="mt-3 text-slate-600 leading-7">
                Precise circuit design and power distribution systems for
                sustainable technology solutions
              </p>
            </div>
          </div>
        </section>

        <section
          id="contacts"
          className="rounded-3xl bg-white p-8 shadow-sm shadow-slate-200/50"
        >
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-slate-500">
                Contacts
              </p>
              <Image
                src="/getintouch.svg"
                alt="Logo"
                width={72}
                height={72}
                className="m-auto mb-5"
              />
              <h2 className="mt-3 text-3xl font-semibold text-slate-950 text-center">
                <span className="text-blue-700">Get in touch</span> with
                HardTech.
              </h2>
              <p className="mt-4 max-w-xl text-slate-600 leading-8 text-center">
                Whether you are starting a new project, exploring collaboration,
                or need a web partner, we are here to help.
              </p>
            </div>
            <div className="space-y-4 rounded-3xl bg-slate-50 p-6">
              <div>
                <p className="text-sm font-semibold text-slate-900">Email</p>
                <p className="mt-2 text-slate-600">
                  hello@hardtechsolution.com
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Phone</p>
                <p className="mt-2 text-slate-600">+62 878 2455-1401</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Location</p>
                <p className="mt-2 text-slate-600">
                  Remote-first team based Indonesia.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-neutral-primary-soft">
        <div className="mx-auto w-full max-w-7xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="https://flowbite.com/" className="flex items-center">
                <Image
                  src="/hardtech-white-logo.png"
                  alt="Logo"
                  width={50}
                  height={50}
                  className="me-3"
                />
                <span className="text-heading self-center text-2xl font-semibold whitespace-nowrap">
                  HardTech IT Solution
                </span>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-heading uppercase">
                  Menu
                </h2>
                <ul className="text-body font-medium">
                  <li className="mb-4">
                    <a href="#services" className="hover:underline">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#projects" className="hover:underline">
                      Curated Projects
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-heading uppercase">
                  Follow us
                </h2>
                <ul className="text-body font-medium">
                  <li className="mb-4">
                    <a href="" className="hover:underline ">
                      Github
                    </a>
                  </li>
                  <li>
                    <a href="" className="hover:underline">
                      Discord
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-heading uppercase">
                  Legal
                </h2>
                <ul className="text-body font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-default sm:mx-auto lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-body sm:text-center">
              © 2026{" "}
              <a href="https://flowbite.com/" className="hover:underline">
                HardTech IT Solution
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
