<template>
    <div id="projects" class="w-full text-white mb-20 flex flex-col space-y-6">
      <!-- <PageBlocker content="Desktop view is temporarily unavailable. Please switch to mobile" /> -->
      <PageHeader title="My Projects" />
      <p class="my-10 text-xl text-center">Here are some of the works I've done so far</p>
      <div id="project-cards">
        <ProjectCard github="https://github.com/AmazingJoMax" siteUrl="https://anythingfood.ng" siteName="Anythingfood">
          <div class="flex flex-col gap-4">
            <div class="image">
              <img src="../assets/images/anythingfood.png" alt="">
            </div>
            <span class="text-lg font-semibold">Anythingfood</span>
            <p class="description text-gray-300">
              A site where you can call your favourite restaurant in town and order food
            </p>
            <div class="flex">
              <Tag name="Vue.js" class="border-green-600 text-green-600" />
              <Tag name="TailwindCSS" class="border-blue-400 text-blue-400" />
            </div>
          </div> 
        </ProjectCard>
        <ProjectCard github="https://github.com/AmazingJoMax" siteUrl="https://dwpcng.netlify.app" siteName="DWPCNG">
          <div class="flex flex-col gap-4">
            <div class="image">
              <img src="../assets/images/dwpcng.png" alt="">
            </div>
            <span class="text-lg font-semibold">Dominion Word And Prayer Chapel</span>
            <p class="description text-gray-300">
              A church site that helps bring content closer to its users no matter the location
            </p>
            <div class="flex">
              <Tag name="Vue.js" class="border-green-600 text-green-600" />
              <Tag name="TailwindCSS" class="border-blue-400 text-blue-400" />
              <Tag name="Laravel" class="border-red-600 text-red-600" />
            </div>
          </div> 
        </ProjectCard>
        <ProjectCard github="https://github.com/AmazingJoMax" siteUrl="#" siteName="wypa">
          <div class="flex flex-col gap-4">
            <div class="image">
              <img src="../assets/images/wypa.png" alt="">
            </div>
            <span class="text-lg font-semibold">Wypa</span>
            <p class="description text-gray-300">
              An app where its users can either request for cleaning service from cleaners around or apply to be a cleaner and earn extra income
            </p>
            <div class="flex">
              <Tag name="Flutter" class="border-blue-600 text-blue-600" />
            </div>
          </div> 
        </ProjectCard>

      </div>
      <RouterLink
        :to="{ name: 'contact' }"
        class="btn text-nowrap text-center self-center"
      >
        <span>Get Your Own</span>
      </RouterLink>
    </div> 
</template>

<script setup>
  import PageBlocker from "@/components/PageBlocker.vue"
  import PageHeader from "@/components/PageHeader.vue"
  import ProjectCard from "@/components/cards/ProjectCard.vue";
  import Tag from "@/components/Tag.vue"

</script>

<style >
  #projects{
    padding: 0 20px;
  } 

  #project-cards{
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
 .image{
    max-height: 270px;
    overflow: hidden; 
    border-radius: 10px;
  }
  .image img{
    width: 100%;
  }

</style>