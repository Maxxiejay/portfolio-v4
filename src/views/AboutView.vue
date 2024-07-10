<template>
  <div
    id="about"
    class=" h-full flex flex-col gap-10 items-center px-5 pb-20"
  >
    <!-- <PageBlocker
      content="Desktop view is temporarily unavailable. Please switch to mobile"
    /> -->
    <PageHeader title="About Me" />
    <section class="description flex flex-col gap-2">
      <h2 class="text-2xl text-primary font-semibold">Fullstack Developer</h2>
      <p class="text-lg text-gray-300">
        With over three years of experience in software development, using
        technologies like Vue.js, Laravel and Flutter, I specialize in turning ideas into reality.Whether it's designing
        intuitive user interfaces or building robust backend systems, or
        optimizing performance, I'm committed to delivering high-quality
        solutions that exceed expectations.
      </p>
      <button @click="download('Max_resume4.pdf')" class="btn-alt w-fit" >Resume</button>
    </section>
    <section id="services">
      <PageHeader subHeading="What I Do" />
      <div class="services_cards grid gap-4">
        <ServicesCard
          title="Front-end development"
          description=" I specialize in crafting engaging and intuitive user interfaces and creating seamless experiences for users by implementing responsive design principles and leveraging modern frameworks of Vue.js."
          icon="fa-light fa-display-code"
        />
        <ServicesCard
          title="Back-end Development"
          description=" I excel at architecting robust and scalable server-side solutions to power web and mobile applications. Using Laravel, I design and implement efficient APIs, manage databases, and ensure seamless data flow between the frontend and backend layers."
          icon="fa-light fa-server"
        />
        <ServicesCard
          title="Mobile Development"
          description="I leverage Flutter and kotlin to build cross-platform applications that run smoothly on both iOS and Android devices. From designing pixel-perfect UIs to integrating device-specific features."
          icon="fa-thin fa-mobile-notch"
        />
        <ServicesCard
          title="API Integration"
          description=" Whether it's integrating third-party APIs for authentication, payment processing, or data retrieval, I ensure robust connectivity and data integrity to power feature-rich applications."
          icon="fa-thin fa-brackets-curly"
        />
        <ServicesCard
          title="Software Maintenance"
          description=" I am committed to ensuring the long-term success and stability of software solutions through proactive maintenance and support. This includes regular updates, bug fixes, performance optimization, and security enhancements to keep applications running smoothly and securely over time."
          icon="fa-thin fa-screwdriver-wrench"
        />
      </div>
    </section>
    <section id="skills">
      <PageHeader subHeading="Skills & Tech" />
      <div class="cards">
        <PlainCard title="Laravel" icon="fab fa-laravel text-red-500" />
        <PlainCard title="Vue.js" icon="fab fa-vuejs text-green-600" />
        <PlainCard title="Flutter" :iconPath="require('../assets/svgs/icons8-flutter-50.svg')" />
        <PlainCard title="Kotlin" :iconPath="require('../assets/svgs/icons8-kotlin-50.svg')" />
        <PlainCard title="TailwindCSS" :iconPath="require('../assets/svgs/icons8-tailwindcss-48.svg')" />
        <PlainCard title="Firebase" :iconPath="require('../assets/svgs/icons8-firebase-48.svg')" />
      </div>
    </section>

    <section id="certificates">
      <PageHeader subHeading="Certificates" />
          <div class="certificate marker">
            <img src="../assets/images/Aptlearn_flutter_certificate.jpg" alt="apt learn flutter certificate">
      </div>
    </section>

    <section id="education">
      <PageHeader subHeading="education" />
      <ExpCard
        title="uopeople"
        org="Computer Science(B.Sc)"
        date="September 2022 - 2026"
      />
      <ExpCard
        title="prospect high school"
        org="SSCE"
        date="July 2021"
      />
    </section>

    <section id="experience">
      <PageHeader subHeading="Work Experience" />
      <ExpCard
        title="community volunteer"
        org="Google Developer Group Akure"
        date="August 2023 - present"
      >
      </ExpCard>
      <ExpCard
        title="frontend developer"
        org="DWPCNG"
        date="Sept 2023 - present"
      >
        <ul class="flex flex-col space-y-4 mt-4">
          <li>
            Designed a clean and intuitive user interface that reflects the
            values and identity of the church.
          </li>
          <li>
            Integrated live streaming functionality directly into the website to
            broadcast church services, events, and special programs in
            real-time.
          </li>
          <li>
            Regularly updated website content, including announcements, upcoming
            events, sermon and recordings to keep the site fresh and engaging.
          </li>
        </ul>
      </ExpCard>
      <ExpCard
        title="lead developer"
        org="Anythingfood.ng"
        date="Jan 2024 - present"
      >
        <ul class="flex flex-col space-y-4 mt-4">
          <li>
            Designed a visually appealing and intuitive user interface using
            Vue.js.
          </li>
          <li>
            Implemented responsive design techniques to ensure optimal viewing
            experience across desktops, tablets, and mobile devices.
          </li>
          <li>
            Developed interactive features like search functionality, and
            filtering options for easy navigation.
          </li>
          <li>
            Integrated secure payment gateways to facilitate online transactions
            and ensure user data privacy.
          </li>
        </ul>
      </ExpCard>
      <ExpCard title="flutter developer" org="Wypa" date="Feb 2024 - present">
        <ul class="flex flex-col space-y-4 mt-4">
          <li>
            Successfully designed and developed a visually appealing Flutter app
            with a seamless user experience.
          </li>
          <li>
            Integrated external APIs to fetch and display dynamic content such
            as user profiles, product listings, or real-time updates.
          </li>
          <li>
            Optimized app performance and responsiveness through efficient UI
            rendering and data fetching strategies
          </li>
        </ul>
      </ExpCard>
    </section>
    <RouterLink
      :to="{ name: 'projects' }"
      class="btn-alt text-nowrap text-center space-x-2"
    >
      <span>See Projects</span>
      <i class="fa fa-arrow-right"></i>
    </RouterLink>
  </div>
</template>

<script setup>
  import PageHeader from "@/components/PageHeader.vue";
  import PageBlocker from "@/components/PageBlocker.vue";
  import ServicesCard from "@/components/cards/ServicesCard.vue";
  import ExpCard from "@/components/cards/ExpCard.vue";
  import PlainCard from "@/components/cards/PlainCard.vue";

  const download = (filename) => {
  // Assuming your development server or production server serves files from the `public` directory at the root
  const filePath = `${window.location.origin}/assets/${filename}`;

  // Create a temporary link element and trigger the download
  const link = document.createElement('a');
  link.href = filePath;
  link.download = filename.split('/').pop(); // Ensure we get just the file name
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

</script>

<style>
  #experience ul{
    margin-left: -4px;
  }
  #experience li{
    padding-left: 4px; 
  }

  .cards{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1rem;
  }

  .services_cards{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
  }

  /* .cert-slider-cont{
    width: 100%;
    display: flex;
    gap: 1rem;
    overflow-x: auto;
  }

  .cert-slider{
    display: flex;
    gap: 1rem;
  }

  .certificate{
    width: 200px;
    height: 200px;
    background: var(--dark);
    border-radius: 10px;
    overflow: hidden;
  }

  .certificate img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  } */

  #certificates .certificate img{
    width: 100%;
  }
</style>
