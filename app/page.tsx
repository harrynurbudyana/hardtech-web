export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur-lg">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="text-xl font-semibold tracking-tight">HardTech</div>
          <div className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
            <a href="#home" className="transition hover:text-slate-950">Home</a>
            <a href="#about" className="transition hover:text-slate-950">About us</a>
            <a href="#services" className="transition hover:text-slate-950">Our Services</a>
            <a href="#projects" className="transition hover:text-slate-950">Curated Projects</a>
            <a href="#team" className="transition hover:text-slate-950">Our Teams</a>
            <a href="#contacts" className="transition hover:text-slate-950">Contacts</a>
          </div>
          <a
            href="#contacts"
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Contact us
          </a>
        </nav>
      </header>

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-24 px-6 py-10">
        <section id="home" className="space-y-8 pt-8">
          <div className="max-w-3xl space-y-6">
            <p className="text-sm uppercase tracking-[0.32em] text-slate-500">Welcome to HardTech</p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Building modern companies with thoughtful digital products.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              We craft high-quality websites, services, and project experiences that help teams launch confidently and grow with clarity.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
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
        </section>

        <section id="about" className="rounded-3xl bg-white p-8 shadow-sm shadow-slate-200/50">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.32em] text-slate-500">About us</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-950">A partner for product-led growth and design-led strategy.</h2>
              <p className="mt-4 text-slate-600 leading-8">
                HardTech combines business thinking, creative design, and engineering discipline to help startups and established companies build stronger digital brands and more meaningful customer experiences.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-50 p-6">
                <p className="text-sm font-semibold text-slate-900">Vision</p>
                <p className="mt-2 text-slate-600">Create products that feel effortless, look polished, and perform reliably.</p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-6">
                <p className="text-sm font-semibold text-slate-900">Approach</p>
                <p className="mt-2 text-slate-600">We listen, align goals, and move quickly to deliver value at every stage.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="space-y-8">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-slate-500">Our Services</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950">Services designed to support every stage of your business.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <article className="rounded-3xl bg-white p-6 shadow-sm shadow-slate-200/50">
              <h3 className="text-xl font-semibold text-slate-950">Digital Strategy</h3>
              <p className="mt-3 text-slate-600 leading-7">Research, product planning, and go-to-market support that connects your vision to measurable outcomes.</p>
            </article>
            <article className="rounded-3xl bg-white p-6 shadow-sm shadow-slate-200/50">
              <h3 className="text-xl font-semibold text-slate-950">Brand & Design</h3>
              <p className="mt-3 text-slate-600 leading-7">Meaningful branding, user interfaces, and creative systems that make your company feel distinct.</p>
            </article>
            <article className="rounded-3xl bg-white p-6 shadow-sm shadow-slate-200/50">
              <h3 className="text-xl font-semibold text-slate-950">Web Development</h3>
              <p className="mt-3 text-slate-600 leading-7">Fast, responsive websites and custom front-end experiences built for performance and scale.</p>
            </article>
          </div>
        </section>

        <section id="projects" className="space-y-8">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-slate-500">Curated Projects</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950">Recent work that highlights our craftsmanship.</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            <article className="rounded-3xl bg-slate-950 p-6 text-white">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-300">E-commerce</p>
              <h3 className="mt-3 text-2xl font-semibold">Launch-ready storefronts</h3>
              <p className="mt-3 text-slate-300 leading-7">Modern shopping experiences with intuitive checkout flows and performance-first architecture.</p>
            </article>
            <article className="rounded-3xl bg-slate-950 p-6 text-white">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-300">SaaS platform</p>
              <h3 className="mt-3 text-2xl font-semibold">Data-rich dashboards</h3>
              <p className="mt-3 text-slate-300 leading-7">Secure portals and analytic tools built to keep teams aligned and customers engaged.</p>
            </article>
            <article className="rounded-3xl bg-slate-950 p-6 text-white">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-300">Brand refresh</p>
              <h3 className="mt-3 text-2xl font-semibold">Identity systems</h3>
              <p className="mt-3 text-slate-300 leading-7">Visual systems and messaging that help companies stand out with consistency and polish.</p>
            </article>
          </div>
        </section>

        <section id="team" className="rounded-3xl bg-white p-8 shadow-sm shadow-slate-200/50">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.32em] text-slate-500">Our Teams</p>
            <h2 className="text-3xl font-semibold text-slate-950">A small team with broad expertise.</h2>
            <p className="max-w-2xl text-slate-600 leading-8">
              Our team mixes product thinkers, designers, and engineers who work closely together to shape ideas into polished digital experiences.
            </p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-xl font-semibold text-slate-950">Strategy</h3>
              <p className="mt-3 text-slate-600 leading-7">Research, product direction, and business alignment.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-xl font-semibold text-slate-950">Design</h3>
              <p className="mt-3 text-slate-600 leading-7">Brand systems, interfaces, and motion that feel considered.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-xl font-semibold text-slate-950">Engineering</h3>
              <p className="mt-3 text-slate-600 leading-7">Front-end and web experiences built for speed and accessibility.</p>
            </div>
          </div>
        </section>

        <section id="contacts" className="rounded-3xl bg-white p-8 shadow-sm shadow-slate-200/50">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-slate-500">Contacts</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-950">Get in touch with HardTech.</h2>
              <p className="mt-4 max-w-xl text-slate-600 leading-8">
                Whether you are starting a new project, exploring collaboration, or need a web partner, we are here to help.
              </p>
            </div>
            <div className="space-y-4 rounded-3xl bg-slate-50 p-6">
              <div>
                <p className="text-sm font-semibold text-slate-900">Email</p>
                <p className="mt-2 text-slate-600">hello@hardtech.com</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Phone</p>
                <p className="mt-2 text-slate-600">+1 (555) 123-4567</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Location</p>
                <p className="mt-2 text-slate-600">Remote-first team based across Europe and North America.</p>
              </div>
            </div>
          </div>
        </section>
      </main>




<footer className="bg-neutral-primary-soft">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="https://flowbite.com/" className="flex items-center">
                  <img src="https://flowbite.com/docs/images/logo.svg" className="h-7 me-3" alt="FlowBite Logo" />
                  <span className="text-heading self-center text-2xl font-semibold whitespace-nowrap">Flowbite</span>
              </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-heading uppercase">Resources</h2>
                  <ul className="text-body font-medium">
                      <li className="mb-4">
                          <a href="https://flowbite.com/" className="hover:underline">Flowbite</a>
                      </li>
                      <li>
                          <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                      </li>
                  </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-heading uppercase">Follow us</h2>
                  <ul className="text-body font-medium">
                      <li className="mb-4">
                          <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Github</a>
                      </li>
                      <li>
                          <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-heading uppercase">Legal</h2>
                  <ul className="text-body font-medium">
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-default sm:mx-auto lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-body sm:text-center">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a href="#" className="text-body hover:text-heading">
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd"/></svg>
                <span className="sr-only">Facebook page</span>
            </a>
            <a href="#" className="text-body hover:text-heading ms-5">
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M18.942 5.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.586 11.586 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3 17.392 17.392 0 0 0-2.868 11.662 15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.638 10.638 0 0 1-1.706-.83c.143-.106.283-.217.418-.331a11.664 11.664 0 0 0 10.118 0c.137.114.277.225.418.331-.544.328-1.116.606-1.71.832a12.58 12.58 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM8.678 14.813a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.929 1.929 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/></svg>
                <span className="sr-only">Discord community</span>
            </a>
            <a href="#" className="text-body hover:text-heading ms-5">
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"/></svg>
            <span className="sr-only">Twitter page</span>
            </a>
            <a href="#" className="text-body hover:text-heading ms-5">
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd"/></svg>
                <span className="sr-only">GitHub account</span>
            </a>
            <a href="#" className="text-body hover:text-heading ms-5">
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2a10 10 0 1 0 10 10A10.009 10.009 0 0 0 12 2Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.093 20.093 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM10 3.707a8.82 8.82 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.755 45.755 0 0 0 10 3.707Zm-6.358 6.555a8.57 8.57 0 0 1 4.73-5.981 53.99 53.99 0 0 1 3.168 4.941 32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.641 31.641 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM12 20.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 15.113 13a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clipRule="evenodd"/></svg>
                <span className="sr-only">Dribbble account</span>
            </a>
          </div>
      </div>
    </div>
</footer>


    </div>
  );
}
