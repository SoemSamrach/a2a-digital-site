<style src="../styles/service-detail.css" scoped></style>
<template>
    <div id="services-page">
        <div v-for="serviceDetailContent in serviceDetailContents" v-bind:key="serviceDetailContent.id">
            <vue-headful
                    :title="serviceDetailContent['meta'][0]['title'] + ' | Service | A2A Digital'"
                    :description="serviceDetailContent['meta'][0]['description']"
                    :keywords="serviceDetailContent['meta'][0]['keywords']"
            />
            <tagline-hero
                    :title="serviceDetailContent['header'][0]['title']"
                    :short_desc="serviceDetailContent['header'][0]['shortDesc']"
                    :imagePath="'service' + '/' + route + '.png'"
            />
            <ServiceDetailCard v-if="serviceDetailContent['cards'] != null"
                               :cards="serviceDetailContent['cards']"></ServiceDetailCard>
            <ServiceDetailPageComp v-if="serviceDetailContent['header'] != null"
                                   v-bind:header="serviceDetailContent['header']"></ServiceDetailPageComp>
            <ServiceTechnologyCard v-if="serviceDetailContent['tools'] != null"
                                   :tools="serviceDetailContent['tools']"></ServiceTechnologyCard>
            <ServiceWorkResult v-if="serviceDetailContent['results'] != null"
                               :results="serviceDetailContent['results']"></ServiceWorkResult>
            <ServiceManagement v-if="serviceDetailContent['management'] != null"
                               :management="serviceDetailContent['management']"/>
            <ServiceComapareComp v-if="serviceDetailContent['compare'] != null"
                                 :compare="serviceDetailContent['compare']"/>
            <ServiceAIImportant v-if="serviceDetailContent['business'] != null"
                                :business="serviceDetailContent['business']"></ServiceAIImportant>
            <ServiceContactForm></ServiceContactForm>
        </div>
    </div>
</template>

<script>
    import ServiceDetailPageComp from '../components/service-detail-page/service-detail-page.vue'
    import ServiceDetailCard from '../components/service-detail-card/service-detail-card.vue'
    import ServiceTechnologyCard from '../components/service-technology-card/service-technology-card.vue'
    import ServiceWorkResult from '../components/service-work-result/service-work-result.vue'
    import ServiceAIImportant from '../components/service-ai-important/service-ai-important.vue'
    import ServiceContactForm from '../components/service-contact-form/service-contact-form.vue'
    import ServiceComapareComp from '../components/service-cloud-detail-page/service-cloud-detail-page.vue'
    import ServiceManagement from '../components/service-management/service-management'
    import {mapGetters, mapActions} from 'vuex'
    import TaglineHero from "../components/tagline-hero/tagline-hero";

    export default {
        name: 'ServiceDetailPage',
        components: {
            TaglineHero,
            ServiceDetailPageComp,
            ServiceDetailCard,
            ServiceTechnologyCard,
            ServiceWorkResult,
            ServiceAIImportant,
            ServiceContactForm,
            ServiceComapareComp,
            ServiceManagement
        },
        data: function () {
            return {
                service: String,
                type: "service/service-content-",
                data : null,
                route : this.$route.params.service 
            }
        },
        computed: {
            ...mapGetters({
                //content server
                serviceDetailContents: 'serviceDetailContent/content'
            }),
        },

        mounted: function () {
            this.actionDetailLoadContent(this.service)
        },

        watch: {
            '$route.params.service': function (service) {
                this.route = this.$route.params.service 
                this.service = this.type + service
                this.actionDetailLoadContent(this.service)
            }
        },
    
        methods: {
            ...mapActions({
                actionDetailLoadContent: 'serviceDetailContent/load'
            }),
        },
        created() {
            this.service = this.type + this.$route.params.service 
        },
    }
</script>