<template>
    <div id="sidebar" :class="{ show: stat.drawer}">
        <div class="content">
            <div class="group" v-for="(items, group) in itemList">
                <div class="title">{{ group }}</div>
                <ul>
                    <li v-for="item in items" >
                        <router-link :to="item.path"
                                     :class="{ activated:routeName === item.name }"
                                     @click="stat.drawer = false"
                        >
                            <div class="prefix">{{ item.prefix }}</div>
                            <div class="suffix">
                                {{ item.suffix }}
                            </div>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "sidebar",
    created() {

    },
    data(){
        return {
            current:''
        }
    },
    props:['stat'],
    computed:{
        itemList(){
            return this.$store.state.doc
        },
        routeName(){
            return this.$route.name
        }
    },
}
</script>

<style lang="scss" scoped>
@import "./scss/sidebar";
@import "./scss/1200";
</style>