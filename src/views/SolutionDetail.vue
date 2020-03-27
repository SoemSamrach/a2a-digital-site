<style src="../styles/solution-detail.css" scoped></style>
<template>
    <div id="solution-detail">
        <div v-for="solutionDetailContent in solutionDetailContents" v-bind:key="solutionDetailContent.id">
            <vue-headful
                    :title="solutionDetailContent['meta'][0]['title'] + ' | Solution | A2A Digital'"
                    :description="solutionDetailContent['meta'][0]['description']"
                    :keywords="solutionDetailContent['meta'][0]['keywords']"
                    :image="'https://a2a-digital.com/assets/head/solutions/' + route + '.png'"
            />
            <tagline-hero
                    :title="solutionDetailContent['header'][0]['title']"
                    :short_desc="solutionDetailContent['header'][0]['shortDesc']"
                    :imagePath="'solution' + '/' + route + '.png'"
            />
            <SolutionDetailHeader id="solution-page" v-if="solutionDetailContent['header'] != null"
                                  :header="solutionDetailContent['header']"/>
            <SolutionDetailCard id="solution-page" v-if="solutionDetailContent['feature'] != null"
                                :feature="solutionDetailContent['feature']"/>
            <Cardproduct id="solution-page" :data="solutionTitle"/>
        </div>
    </div>
</template>

<script>

    import SolutionDetailHeader from '../components/solutions-detail/SolutionDetail.vue'
    import SolutionDetailCard from '../components/solutions-card/SolutionCard.vue'
    import Cardproduct from '../components/card-product/card-product.vue'
    import TaglineHero from "../components/tagline-hero/tagline-hero";
    import axios from 'axios'

    export default {
        name: 'SolutionDetail',
        components: {
            TaglineHero,
            SolutionDetailHeader,
            SolutionDetailCard,
            Cardproduct
        },
        data: function () {
            return {
                solutionTitle:"Other Solutions",
                solution: String,
                type: "solution/solution-content-",
                route: this.$route.params.solution,
                solutionDetailContents : null
            }
        },

        watch: {
            '$route.params.solution': function (solution) {
                this.route = this.$route.params.solution 
                axios
                    .get('https://a2a-digital-backend.herokuapp.com/api/solution/'+solution)
                    .then(response => (this.solutionDetailContents = response['data']['item']))
            }
        },

        mounted() {
            axios
                .get('https://a2a-digital-backend.herokuapp.com/api/solution/'+this.route)
                .then(response => (this.solutionDetailContents = response['data']['item']))
        },
    }
</script>