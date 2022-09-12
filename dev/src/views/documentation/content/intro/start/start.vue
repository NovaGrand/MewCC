<template>
    <div class="doc-start" :class="{ mobile: $global.mobile }">
        <p class="doc-title" xl ls-sm>安装</p>
        <p class="doc-wasd" md mt-sm>
            让我们从 Mew 开始吧，充分利用 Vue 3 的各项特性，构建功能丰富、快速的应用程序。
        </p>
        <div ht-sm bb dashed grey alpha-8></div>
        <p class="doc-title" lg ls-xs>创建 Vue 项目</p>
        <p mt-sm>
            如果你还没有使用 <i bold>Vue CLI</i> 创建 Vue.js 的项目，你需要在命令行工具内进行下面的操作:
        </p>
        <q class="code" col-25 style="padding: 10px 30px;margin-top: 20px">
            <p xs>
                <i grey># 通过 vue cli 创建一个新项目</i> <br>
                <i sm>vue create my-app</i><br>
                <i grey mt-sm mt-5># 选择第一项“vue 3 ([Vue 3] router, vuex)”， 然后按回车键继续</i> <br>
                <i grey># ... 待 vue 项目创建完成后，进入刚刚创建的项目目录内</i> <br>
                <i sm>cd my-app</i><br>
            </p>
        </q>
        <p lg ls-xs style="margin-top: 50px">下载并使用 Mew</p>
        <p mt-sm>
            进入到项目目录后，利用你的 JS 包管理工具，下载 Mew 到当前项目：
        </p>
        <q class="code" col-25 style="padding: 10px 30px;margin-top: 20px">
            <p xs>
                <i grey># 使用 pnpm install 命令</i> <br>
                <i sm>pnpm install mewcc</i><br>
                <i grey mt-sm mt-5># 或使用 yarn add 命令</i> <br>
                <i sm>yarn add mewcc</i><br>
            </p>
        </q>
        <p style="margin-top: 30px">
            下载完成后，在项目的 main.js 文件中，引入并使用 Mew：
        </p>
<prism lang="js">
<pre>import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入 Mew
import mewcc from 'mewcc')

createApp(App)
    .use(router)
    .use(store)
    // 在当前项目上安装 Mew
    .use(mewcc)
    .mount('#app')
</pre>
</prism>
        <p lg ls-xs style="margin-top: 50px">完 成</p>
        <p mt-sm>
            至此，你已经可以在项目的视图、组件里，使用 Mew 的各项功能了
            <i wd-6 ht-6 nd-xl>
                <svg width="182" height="186" viewBox="0 0 182 186" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.7602 184.683L137.367 131.082L54.7613 48.4768L1.16008 164.032C0.391421 165.877 -2.52949 173.307 5.41333 180.379C14.0223 188.014 19.9154 185.452 21.7602 184.683Z" fill="url(#paint0_linear_1041_52)"/>
                    <path d="M43.1802 73.4332L34.5712 92.1373C31.804 98.8502 80.8958 148.403 108.619 144.406L137.367 131.082C103.289 146.814 38.9782 82.5547 43.1802 73.4332Z" fill="url(#paint1_linear_1041_52)"/>
                    <path d="M25.7572 111.149L23.7587 115.402L16.9945 129.955C16.9433 135.695 46.511 165.211 65.0101 164.596L88.4798 153.732C63.0628 158.139 22.8363 117.349 25.7572 111.149Z" fill="url(#paint2_linear_1041_52)"/>
                    <path d="M1.72343 162.904C4.18314 167.824 16.2255 179.815 26.2181 182.633L51.0201 171.155L51.1739 171.052C35.9032 178.073 10.0762 152.041 9.615 145.994L1.72343 162.904Z" fill="url(#paint3_linear_1041_52)"/>
                    <path d="M21.7602 184.683L137.367 131.082L54.7613 48.4768L1.16008 164.032C0.391421 165.877 -2.52949 173.307 5.41333 180.379C14.0223 188.014 19.9154 185.452 21.7602 184.683Z" fill="url(#paint4_radial_1041_52)"/>
                    <path d="M21.7602 184.683L137.367 131.082L54.7613 48.4768L1.16008 164.032C0.391421 165.877 -2.52949 173.307 5.41333 180.379C14.0223 188.014 19.9154 185.452 21.7602 184.683Z" fill="url(#paint5_radial_1041_52)"/>
                    <path d="M94.2699 48.8867C92.8863 51.7051 90.1704 52.1151 88.1719 51.5002L91.4515 44.9922C91.4515 44.9922 95.1411 45.8121 95.2436 43.4036L95.3973 46.7857L94.2699 48.8867Z" fill="url(#paint6_linear_1041_52)"/>
                    <path d="M103.443 13.016C103.443 13.016 105.8 11.9398 107.286 8.8652C108.772 5.79056 101.444 0 101.444 0L98.011 5.99555C98.011 5.99555 103.802 9.78759 102.008 11.0687C100.163 12.3498 103.443 13.016 103.443 13.016Z" fill="url(#paint7_linear_1041_52)"/>
                    <path d="M163.398 62.3124C164.474 52.8835 158.12 49.7576 155.814 50.0139C155.814 50.0139 155.404 46.9392 159.504 45.9656C162.22 45.3507 169.138 51.4999 167.344 58.4691L163.398 62.3124Z" fill="url(#paint8_linear_1041_52)"/>
                    <path d="M138.34 130.365C132.601 136.104 109.439 122.166 86.5325 99.3108C63.6777 76.456 49.7394 53.2425 55.4787 47.5032C61.218 41.7639 84.3803 55.7022 107.286 78.557C130.141 101.463 144.028 124.625 138.34 130.365Z" fill="url(#paint9_linear_1041_52)"/>
                    <path d="M136.393 126.572C132.037 130.927 111.232 117.194 89.9659 95.8766C68.6996 74.5591 54.915 53.8053 59.2708 49.4496C63.6265 45.0939 84.4315 58.8272 105.698 80.1447C126.964 101.462 140.749 122.216 136.393 126.572Z" fill="url(#paint10_linear_1041_52)"/>
                    <path d="M107.235 8.86558C107.235 8.86558 104.57 14.5537 104.212 15.1686C102.879 17.4233 99.1384 18.192 92.4254 17.2696C85.7125 16.3472 83.7652 16.7059 83.4577 16.7572C83.1503 16.8597 79.2045 13.6825 79.2045 13.6825L79.5632 10.4541C79.5632 10.4541 80.4856 9.22429 83.5602 9.63424C89.0433 10.4541 105.185 13.1701 107.235 8.86558Z" fill="url(#paint11_linear_1041_52)"/>
                    <path d="M120.559 104.025C125.939 97.8757 130.961 102.693 134.138 98.2857L128.707 92.7513C125.53 97.107 120.918 93.0076 115.229 99.0031L120.559 104.025Z" fill="url(#paint12_linear_1041_52)"/>
                    <path d="M62.1917 29.4146C69.6221 33.8216 63.0116 39.8684 67.2136 43.3018L73.0042 38.1261C68.8022 34.6928 74.8489 28.7485 67.4186 24.3415L62.1917 29.4146Z" fill="url(#paint13_linear_1041_52)"/>
                    <path d="M140.851 52.2182C141.056 52.167 141.158 50.9371 144.182 48.7849C147.205 46.6326 154.021 49.9635 154.892 50.4759C155.814 50.9884 155.046 59.4436 155.046 59.4436C155.046 59.4436 146.539 50.3734 142.286 52.4744C138.033 54.5242 140.851 52.2182 140.851 52.2182Z" fill="url(#paint14_linear_1041_52)"/>
                    <path d="M141.978 73.28C141.978 73.28 141.671 76.6108 140.134 78.1481C137.366 80.8641 132.959 76.7646 127.374 78.2506C127.374 78.2506 129.936 71.7426 130.192 71.2302C130.192 71.2302 132.447 69.8466 134.753 71.1789C137.11 72.46 139.16 72.87 140.595 72.1014C142.03 71.3327 141.978 73.28 141.978 73.28Z" fill="url(#paint15_linear_1041_52)"/>
                    <path d="M156.993 58.6232C156.993 58.6232 151.51 61.1342 150.793 61.4929C150.075 61.8516 148.435 49.0919 152.381 47.8108C156.378 46.5297 159.094 46.0685 159.504 46.0172C159.914 45.9147 152.637 46.6834 156.993 58.6232Z" fill="#FFBF00"/>
                    <path d="M140.134 78.0955C142.388 75.7383 145.463 72.2537 145.309 71.2801C144.592 65.0283 139.519 51.2437 144.182 48.7327C144.182 48.7327 139.826 51.8073 138.494 52.7297C137.161 53.6521 136.188 56.1118 136.29 60.1601C136.547 67.2318 142.183 75.9945 140.134 78.0955Z" fill="#FFBF00"/>
                    <path d="M124.555 27.5179C120.815 53.8061 94.7314 78.9156 94.7314 78.9156L98.2673 84.2962C98.2673 84.2962 126.656 54.7284 130.295 28.3378L124.555 27.5179Z" fill="url(#paint16_linear_1041_52)"/>
                    <path d="M76.4373 16.5516C75.8224 17.679 77.6159 19.575 81.9204 24.8019C86.2249 30.0287 97.3961 43.8646 94.219 48.8865L97.6523 41.8149C97.6523 41.8149 97.7036 36.178 94.3215 30.6949C88.9921 22.0859 78.7945 12.8108 79.5632 10.5048L76.4373 16.5516Z" fill="url(#paint17_linear_1041_52)"/>
                    <path d="M99.2923 96.5435C100.453 96.5435 101.393 95.6029 101.393 94.4425C101.393 93.2821 100.453 92.3415 99.2923 92.3415C98.132 92.3415 97.1913 93.2821 97.1913 94.4425C97.1913 95.6029 98.132 96.5435 99.2923 96.5435Z" fill="url(#paint18_linear_1041_52)"/>
                    <path d="M128.553 9.22387C129.713 9.22387 130.654 8.2832 130.654 7.12285C130.654 5.9625 129.713 5.02186 128.553 5.02186C127.392 5.02186 126.452 5.9625 126.452 7.12285C126.452 8.2832 127.392 9.22387 128.553 9.22387Z" fill="url(#paint19_linear_1041_52)"/>
                    <path d="M108.824 39.7146C109.984 39.7146 110.925 38.7739 110.925 37.6136C110.925 36.4532 109.984 35.5126 108.824 35.5126C107.664 35.5126 106.723 36.4532 106.723 37.6136C106.723 38.7739 107.664 39.7146 108.824 39.7146Z" fill="url(#paint20_linear_1041_52)"/>
                    <path d="M121.276 78.1984C122.436 78.1984 123.377 77.2578 123.377 76.0974C123.377 74.9371 122.436 73.9964 121.276 73.9964C120.116 73.9964 119.175 74.9371 119.175 76.0974C119.175 77.2578 120.116 78.1984 121.276 78.1984Z" fill="url(#paint21_linear_1041_52)"/>
                    <path d="M175.287 73.074C176.447 73.074 177.388 72.1333 177.388 70.973C177.388 69.8126 176.447 68.872 175.287 68.872C174.127 68.872 173.186 69.8126 173.186 70.973C173.186 72.1333 174.127 73.074 175.287 73.074Z" fill="url(#paint22_linear_1041_52)"/>
                    <path d="M161.912 117.4C163.073 117.4 164.013 116.459 164.013 115.299C164.013 114.138 163.073 113.198 161.912 113.198C160.752 113.198 159.811 114.138 159.811 115.299C159.811 116.459 160.752 117.4 161.912 117.4Z" fill="url(#paint23_linear_1041_52)"/>
                    <path d="M153.15 90.343C154.31 90.343 155.251 89.4023 155.251 88.242C155.251 87.0816 154.31 86.141 153.15 86.141C151.989 86.141 151.049 87.0816 151.049 88.242C151.049 89.4023 151.989 90.343 153.15 90.343Z" fill="url(#paint24_linear_1041_52)"/>
                    <path d="M164.679 33.2565C165.84 33.2565 166.78 32.3159 166.78 31.1556C166.78 29.9952 165.84 29.0546 164.679 29.0546C163.519 29.0546 162.578 29.9952 162.578 31.1556C162.578 32.3159 163.519 33.2565 164.679 33.2565Z" fill="url(#paint25_linear_1041_52)"/>
                    <path d="M141.108 40.1234C142.268 40.1234 143.209 39.1827 143.209 38.0224C143.209 36.862 142.268 35.9213 141.108 35.9213C139.947 35.9213 139.007 36.862 139.007 38.0224C139.007 39.1827 139.947 40.1234 141.108 40.1234Z" fill="url(#paint26_linear_1041_52)"/>
                    <path d="M123.121 123.139C144.541 105.562 180.821 101.924 180.821 101.924L182 93.8274C182 93.8274 139.058 98.9518 116.305 118.681C118.765 120.372 121.02 121.858 123.121 123.139Z" fill="url(#paint27_linear_1041_52)"/>
                    <path d="M69.366 72.5108C70.8008 74.4581 72.3893 76.4053 74.0804 78.4551C78.6411 68.4113 77.6675 60.5197 77.6675 60.5197L72.0819 57.0351C72.6456 63.2356 70.7495 69.1799 69.366 72.5108Z" fill="url(#paint28_linear_1041_52)"/>
                    <defs>
                        <linearGradient id="paint0_linear_1041_52" x1="-7.45131" y1="21.8456" x2="116.726" y2="165.925" gradientUnits="userSpaceOnUse">
                            <stop offset="0.2544" stop-color="#FBE07A"/>
                            <stop offset="1" stop-color="#FF40BF"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_1041_52" x1="17.0163" y1="-2.29662" x2="200.926" y2="122.403" gradientUnits="userSpaceOnUse">
                            <stop offset="0.2544" stop-color="#9F00E8"/>
                            <stop offset="1" stop-color="#7000A3"/>
                        </linearGradient>
                        <linearGradient id="paint2_linear_1041_52" x1="15.4001" y1="9.46266" x2="189.78" y2="137.254" gradientUnits="userSpaceOnUse">
                            <stop offset="0.2544" stop-color="#9F00E8"/>
                            <stop offset="1" stop-color="#7000A3"/>
                        </linearGradient>
                        <linearGradient id="paint3_linear_1041_52" x1="19.903" y1="12.2314" x2="180.462" y2="128.813" gradientUnits="userSpaceOnUse">
                            <stop offset="0.2544" stop-color="#9F00E8"/>
                            <stop offset="1" stop-color="#7000A3"/>
                        </linearGradient>
                        <radialGradient id="paint4_radial_1041_52" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(58.2086 70.9207) rotate(119.081) scale(70.6901 21.4052)">
                            <stop stop-color="white" stop-opacity="0.5"/>
                            <stop offset="1" stop-color="white" stop-opacity="0"/>
                        </radialGradient>
                        <radialGradient id="paint5_radial_1041_52" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(107.093 134.612) rotate(151.192) scale(110.806 34.958)">
                            <stop stop-color="#440063" stop-opacity="0.75"/>
                            <stop offset="1" stop-color="#420061" stop-opacity="0"/>
                        </radialGradient>
                        <linearGradient id="paint6_linear_1041_52" x1="163.382" y1="79.4365" x2="472.188" y2="-32.177" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#BD2719"/>
                            <stop offset="1" stop-color="#FF4E0D"/>
                        </linearGradient>
                        <linearGradient id="paint7_linear_1041_52" x1="160.259" y1="224.909" x2="96.5953" y2="11.9622" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#BD2719"/>
                            <stop offset="1" stop-color="#FF4E0D"/>
                        </linearGradient>
                        <linearGradient id="paint8_linear_1041_52" x1="202.822" y1="142.452" x2="-56.2883" y2="-82.8732" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FFCB4B"/>
                            <stop offset="1" stop-color="#E81CA2"/>
                        </linearGradient>
                        <linearGradient id="paint9_linear_1041_52" x1="130.084" y1="-32.8859" x2="26.5384" y2="287.099" gradientUnits="userSpaceOnUse">
                            <stop offset="0.2544" stop-color="#FBE07A"/>
                            <stop offset="1" stop-color="#E81CA2"/>
                        </linearGradient>
                        <linearGradient id="paint10_linear_1041_52" x1="166.828" y1="38.5841" x2="-1.64895" y2="154.387" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FBE07A"/>
                            <stop offset="1" stop-color="white"/>
                        </linearGradient>
                        <linearGradient id="paint11_linear_1041_52" x1="-42.0071" y1="102.793" x2="108.862" y2="102.091" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#BD2719"/>
                            <stop offset="1" stop-color="#FF4E0D"/>
                        </linearGradient>
                        <linearGradient id="paint12_linear_1041_52" x1="117.346" y1="17.954" x2="9.25799" y2="131.264" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FF9214"/>
                            <stop offset="1" stop-color="#FF4E0D"/>
                        </linearGradient>
                        <linearGradient id="paint13_linear_1041_52" x1="-0.558943" y1="-73.9756" x2="51.3281" y2="181.136" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#80DAFE"/>
                            <stop offset="1" stop-color="#008EE6"/>
                        </linearGradient>
                        <linearGradient id="paint14_linear_1041_52" x1="100.98" y1="256.12" x2="57.5858" y2="-139.671" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FFCB4B"/>
                            <stop offset="1" stop-color="#E81CA2"/>
                        </linearGradient>
                        <linearGradient id="paint15_linear_1041_52" x1="7.92043" y1="74.9797" x2="178.742" y2="90.7668" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FFCB4B"/>
                            <stop offset="1" stop-color="#E81CA2"/>
                        </linearGradient>
                        <linearGradient id="paint16_linear_1041_52" x1="122.923" y1="3.09419" x2="79.7194" y2="281.278" gradientUnits="userSpaceOnUse">
                            <stop offset="0.2544" stop-color="#E100FF"/>
                            <stop offset="1" stop-color="#7000A3"/>
                        </linearGradient>
                        <linearGradient id="paint17_linear_1041_52" x1="26.6698" y1="21.6911" x2="76.1187" y2="167.004" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FF9214"/>
                            <stop offset="1" stop-color="#FF4E0D"/>
                        </linearGradient>
                        <linearGradient id="paint18_linear_1041_52" x1="-83.0564" y1="-429.793" x2="275.237" y2="602.911" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FFCB4B"/>
                            <stop offset="1" stop-color="#E81CA2"/>
                        </linearGradient>
                        <linearGradient id="paint19_linear_1041_52" x1="-186.63" y1="-371.568" x2="399.483" y2="572.055" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FBE07A"/>
                            <stop offset="1" stop-color="#E81CA2"/>
                        </linearGradient>
                        <linearGradient id="paint20_linear_1041_52" x1="77.4166" y1="41.4718" x2="225.183" y2="589.67" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#80DAFE"/>
                            <stop offset="1" stop-color="#008EE6"/>
                        </linearGradient>
                        <linearGradient id="paint21_linear_1041_52" x1="29.6727" y1="-83.4781" x2="119.696" y2="168.936" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#80DAFE"/>
                            <stop offset="1" stop-color="#008EE6"/>
                        </linearGradient>
                        <linearGradient id="paint22_linear_1041_52" x1="157.015" y1="-123.919" x2="-11.6904" y2="403.064" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FFCB4B"/>
                            <stop offset="1" stop-color="#E81CA2"/>
                        </linearGradient>
                        <linearGradient id="paint23_linear_1041_52" x1="64.1861" y1="-500.459" x2="117.097" y2="629.906" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FFCB4B"/>
                            <stop offset="1" stop-color="#E81CA2"/>
                        </linearGradient>
                        <linearGradient id="paint24_linear_1041_52" x1="31.3817" y1="-82.6197" x2="121.407" y2="169.792" gradientUnits="userSpaceOnUse">
                            <stop offset="0.2544" stop-color="#9F00E8"/>
                            <stop offset="1" stop-color="#7000A3"/>
                        </linearGradient>
                        <linearGradient id="paint25_linear_1041_52" x1="267.662" y1="-216.588" x2="-77.9975" y2="368.511" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#80DAFE"/>
                            <stop offset="1" stop-color="#008EE6"/>
                        </linearGradient>
                        <linearGradient id="paint26_linear_1041_52" x1="67.5242" y1="-38.8989" x2="183.789" y2="592.924" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FF9214"/>
                            <stop offset="1" stop-color="#FF4E0D"/>
                        </linearGradient>
                        <linearGradient id="paint27_linear_1041_52" x1="-40.2314" y1="86.132" x2="167.109" y2="87.9949" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#80DAFE"/>
                            <stop offset="1" stop-color="#008EE6"/>
                        </linearGradient>
                        <linearGradient id="paint28_linear_1041_52" x1="60.4528" y1="99.101" x2="78.3882" y2="54.5188" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FBE07A"/>
                            <stop offset="1" stop-color="#E81CA2"/>
                        </linearGradient>
                    </defs>
                </svg>

            </i>
        </p>

        <div class="curtain" :class="{ dk:$color.theme === 'dark' }" flex jsb>
            <div class="p _1"></div>
            <div class="p _2"></div>
            <div class="p _3"></div>
            <div class="p _4"></div>
            <div class="p _5"></div>
        </div>
    </div>

</template>

<script>

export default {
    name: "quick_start",
    data(){
        return {
            ico:'level-star-round',

        }
    },
    mounted(){

    },
    methods:{
        step_1(){
            this.$copy('vue create my-app')
            this.$notify({
                text:'vue create my-app 命令已复制',
                color:'green'
            })
        },
        step_2(){
            this.$copy('pnpm install mewcc')
            this.$notify({
                text:'pnpm install mewcc 命令已复制',
                color:'green'
            })
        },
    }
}
</script>

<style scoped lang="scss">
div.doc-start{
    font-family: roboto;
    q.code{
        position: relative;
        //border: .5px solid rgba(0,0,0,.1);
        i.cp{
            position: absolute;right: 15px;top: 15px;
        }
    }
    div.curtain{
        width: 750px;
        position: relative;
        perspective: 700px;
        transform: scale(.6) translateX(-230px);
        box-shadow: 0 16px 15px 0 #a0a0a0;
        background: linear-gradient(0deg,#a0a0a0,#565656);
        margin-top: -30px;
        &.dk{
            background: linear-gradient(0deg,#282828,black);
            box-shadow: 0 16px 15px 0 #282828;
            div.p{
                filter: invert(.8);
            }
        }
        div.p{
            transform-origin: top;
            cursor: pointer;
            background-color: red;
            width: 180px;
            height: 228px;
            background-size: cover!important;
            filter: brightness(.98);
            transition: transform .06s ease!important;

            &._1{
                background: url("@/assets/doc/c_m.jpg");
                transform: rotateX(15deg);
                animation: p1 6s ease infinite;
                border: .5px solid rgba(0,0,0,.1);
                &:active{
                    transform: rotateX(10deg);
                }
                @keyframes p1 {
                    0%{transform: rotateX(15deg)}
                    30%{transform: rotateX(17deg)}
                    50%{transform: rotateX(13deg)}
                    80%{transform: rotateX(21deg)}
                    100%{transform: rotateX(15deg)}
                }
            }
            &._2{
                background: url("@/assets/doc/c_e2.jpg");width: 130px;
                transform: rotateX(3deg);
                animation: p2 6s ease infinite;
                &:active{
                    transform: rotateX(0deg);
                }
                @keyframes p2 {
                    0%{transform: rotateX(3deg)}
                    30%{transform: rotateX(0deg)}
                    50%{transform: rotateX(2deg)}
                    80%{transform: rotateX(6deg)}
                    100%{transform: rotateX(3deg)}
                }
            }
            &._3{
                background: url("@/assets/doc/c_w.jpg");
                transform: rotateX(10deg);
                z-index: 9;
                border-left: .5px solid rgba(0,0,0,.1);
                border-bottom: .5px solid rgba(0,0,0,.1);
                animation: p3 6s ease infinite;
                &:active{
                    transform: rotateX(5deg);
                }
                @keyframes p3 {
                    0%{transform: rotateX(10deg)}
                    30%{transform: rotateX(12deg)}
                    50%{transform: rotateX(15deg)}
                    80%{transform: rotateX(18deg)}
                    100%{transform: rotateX(10deg)}
                }
            }
            &._4{
                background: url("@/assets/doc/c_c1.jpg");width: 130px;
                transform: rotateX(30deg);
                z-index: 10;
                border: .5px solid rgba(0,0,0,.1);
                animation: p4 5s ease infinite;
                &:active{
                    transform: rotateX(25deg);
                }
                @keyframes p4 {
                    0%{transform: rotateX(30deg)}
                    30%{transform: rotateX(33deg)}
                    50%{transform: rotateX(28deg)}
                    80%{transform: rotateX(24deg)}
                    100%{transform: rotateX(30deg)}
                }
            }
            &._5 {
                background: url("@/assets/doc/c_c2.jpg");width: 130px;
                transform: rotateX(15deg);
                box-shadow: 10px 0 6px inset rgba(0, 0, 0, .1);
                animation: p5 8s ease infinite;
                &:active{
                    transform: rotateX(10deg);
                }
                @keyframes p5 {
                    0% {
                        transform: rotateX(15deg)
                    }
                    30% {
                        transform: rotateX(17deg)
                    }
                    50% {
                        transform: rotateX(13deg)
                    }
                    80% {
                        transform: rotateX(21deg)
                    }
                    100% {
                        transform: rotateX(15deg)
                    }
                }
            }
            &:hover{
                animation: paused;
                //transform: rotateX(5deg)!important;
            }
        }
    }

}
div.doc-start.mobile{
    padding: 0 10px;
    p.doc-title{
        font-size: 26px;
    }
    p.doc-wasd{
        font-size: 17px;
    }
    div.curtain{
        transform: scale(.45) translateX(-430px);
    }
}
div.iconBox{
    display: inline-block;
    //font-size: 19px;
}
div.textBox{
    display: inline-block;
}
</style>