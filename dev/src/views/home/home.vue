<template>
    <div class="home">
        <div class="blue"></div>
        <div class="cloud"></div>
        <div class="island"></div>
        <header class="bar" flex jsb>
            <div class="logo"></div>
            <a class="novagrand" href="https://github.com/NovaGrand" target="_blank"></a>
        </header>
        <div class="title" noselect>
            <div class="text"></div>
            <div class="info">
                A carefully designed and well-tested front-end widgets collection
            </div>
        </div>
        <div class="button" noselect>
            <svg width="140" height="90" viewBox="0 0 140 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M130.748 26.1732C124.835 19.7184 117.799 20.4888 110.79 15.9675C98.1602 7.82043 84.6344 2.96389 69.9671 2.3598C54.8021 1.73521 45.81 -0.840887 33.2265 6.21532C26.4014 10.0425 18.258 19.5356 18.258 19.5356C18.258 19.5356 3.46621 28.87 1.92885 46.1311C1.09728 55.4677 2.45894 61.0276 8.12156 69.3211C12.4664 75.6846 16.0982 79.2814 23.362 81.8521C30.4689 84.3674 40.398 82.7531 47.7412 84.4593C61.662 87.6939 69.2419 89.3652 84.3238 88.287C99.0504 87.2342 107.615 88.287 119.862 81.8521C130.076 76.4851 136.216 69.6123 137.496 58.1448C138.913 45.4507 139.368 35.5824 130.748 26.1732Z" fill="white"/>
            </svg>
            <router-link to="/doc/start">· Documentation ·</router-link>
        </div>
        <div class="slogan">
            <h2 class="text">
                Solid Effective <i px-sm>&</i> Balanced Choice
            </h2>
            <div class="info">
                <div>
                    Mew is dedicated to be effective as well as explicit choices
                </div>
                <div>
                    A smooth and easy dev experience is our priority
                </div>
<!--                rather than feature comprehensive-->
                <div>Mew is for all users who care about good life rather than a hard work</div>
            </div>
        </div>
        <footer flex jsb>
            <div>
                Released under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT license</a>
            </div>
            <div>
                Provided with <i>❤️</i> by <a href="https://github.com/NovaGrand" target="_blank">NovaGrand</a>
            </div>
        </footer>
    </div>
</template>

<script>

export default {
    name: "home",
    mounted(){

    }
}
</script>

<style scoped lang="scss">
@import "scss/home.scss";
@import "scss/1200.scss";
</style>