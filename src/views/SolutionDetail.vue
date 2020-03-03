<style src="../styles/solution-detail.css" scoped></style>
<template>
    <div id="solution-detail">
        <div v-for="solutionDetailContent in SolutionDetailContents" v-bind:key="solutionDetailContent.id">
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
    import {mapGetters, mapActions} from 'vuex'
    import TaglineHero from "../components/tagline-hero/tagline-hero";


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
                route: String
            }
        },
        computed: {
            ...mapGetters({
                //content server
                SolutionDetailContents: 'serviceDetailContent/content'
            }),
        },

        mounted: function () {
            this.actionDetailLoadContent(this.solution)
        },
        watch: {
            '$route.params.solution': function (solution) {
                this.route = this.$route.params.solution 
                this.solution = this.type + solution
                this.actionDetailLoadContent(this.solution)
            }
        },

        methods: {
            ...mapActions({
                actionDetailLoadContent: 'serviceDetailContent/load'
            }),
        },
        created() {
            this.solution = this.type + this.$route.params.solution;
            this.route = this.$route.params.solution;
        }
    }
</script>