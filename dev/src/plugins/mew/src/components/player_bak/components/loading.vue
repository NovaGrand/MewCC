<template>
    <div class="grand-pattern"/>
    <div class="grand-rotating">
        <svg viewBox="25 25 50 50"><circle cx="50" cy="50" r="1em" fill="none"></circle></svg>
    </div>
</template>

<script>
export default {
    name: "grand-loading",
}
</script>

<style scoped lang="scss">
div.grand-pattern{
    position: absolute;
    left: calc(50% - 35px);top: calc(50% - 35px);
    width: 70px;
    height: 70px;
    border-radius: 50px;
    background: url("../../../../assets/logo.png");
    background-size: cover;
    pointer-events: none;
    opacity:.7;
    filter: saturate(0) brightness(1.5);
    //box-shadow:  0 0 0 7px rgba(0,0,0,.1);
}
div.grand-rotating{
    display: block;
    width: 120px;height: 120px;
    margin: calc(50% - 60px) auto;
    animation: full-rotate 2s linear infinite;
    pointer-events: none;
    @keyframes full-rotate {
        0% {transform: rotate(0deg)}
        100% {transform: rotate(360deg)}
    }
    svg{
        display: block;
        width: 100%;
        height: 100%;
        transform: rotate(120deg);
        circle{
            animation: circular 1.5s ease-in-out infinite;
            stroke: rgba(255,255,255,.7);
            stroke-width: 1.5;
            stroke-linecap: round;
            @keyframes circular {
                0% {
                    stroke-dasharray: 1, 200;
                    stroke-dashoffset: 0;
                }
                50% {
                    stroke-dasharray: 90, 150;
                    stroke-dashoffset: -40;
                }
                100% {
                    stroke-dasharray: 90, 150;
                    stroke-dashoffset: -120;
                }
            }
        }
    }
}
</style>