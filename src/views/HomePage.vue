<style src="../styles/home.css" scoped></style>
<template>
  <div id="home-page">
      <vue-headful
              :title="title"
              :description="description"
              :keywords="keywords"
      />
      <Slide/>
      <div class="l_section">
        <ContentCard/>
        <CardProduct :data="solutionTitle"/>
        <PartnersPage/>
      </div>
  </div>
</template>

<script>

import Slide from '../components/slide/slide.vue'
import CardProduct from '../components/card-product/card-product.vue'
import ContentCard from '../components/content-card/content-card.vue'
import PartnersPage from  '../components/partner-page/partner-page.vue'

export default {
  name: 'Home',
  components: {
    Slide,
    CardProduct,
    ContentCard,
    PartnersPage
  },
    data() {
        return {
          solutionTitle:"Solutions",
            title: 'A2A Digital | Industry Revolution 4.0',
            description: 'A2A Digital provides you the best solution for AI Development, system development, enterprise development, digital marketing & film, graphic design, or other functionality, we have the services to help you build sophisticated applications.',
            keywords: 'a2a digital, first choice for software solution, IT Solution In Cambodia, Artificial Intelligence In Cambodia, AI in cambodia, Internet Of Thing in cambodia, IOT in cambodia, IT company in cambodia, Top1 IT solution company in cambodia, AI development in cambodia, IOT development service in cambodia, Cloud Computing service in cambodia, RPA in cambodia, RPA service in cambodia, Blockchain in cambodia, PWA in cambodia,  PWA website in cambodia, VR/AR in cambodia, Odoo ERP Solution in cambodia, Digital Marketing service in cambodia, Cyber Security in cambodia, web development company in cambodia, mobile app development in cambodia, ui/ux design company in cambodia, top ui/ux design in cambodia'
        }
    }
}
</script>
