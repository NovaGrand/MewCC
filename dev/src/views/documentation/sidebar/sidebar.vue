<template>
    <div id="sidebar" :class="{ show: stat.drawer}" noselect>
        <div class="content">
            <div class="group homePage">
                <ul>
                    <li>
                        <router-link to="/">
                            <div class="prefix">首页</div>
                            <div class="suffix">
                                Home
                            </div>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="group" :class="{ noPaddingTop: index === 0}" v-for="(items, group, index) in itemList">
                <div class="title">{{ group }}</div>
                <ul>
                    <li v-for="item in items">
                        <router-link :to="'/doc/' + item.path" draggable="false"
                                     :class="{ activated:routeName === item.name }"
                                     @click="stat.drawer = false"
                        >
                            <div class="prefix" :style="'width:' + item.width">
                                <i v-for="char in Chars(item.prefix)">
                                    {{ char }}
                                </i>
                            </div>
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
    methods:{
        Chars(str){
            let arr = []
            for(let i=0;i<str.length;i++){
                arr.push(str[i])
            }
            return arr
        }
    }
}
</script>

<style lang="scss" scoped>
@import "./scss/sidebar";
@import "./scss/1200";
</style>