<template>
    <h2 ls-sm md>自适应图片</h2>
    <section my-sm>
        <div my- mb-md flex jsb xs>
            <div class="box" bevel wd-lg ht-md ba catskill lighten bg>
                <div class="img _1" jc ac></div>
            </div>
            <div class="box" bevel wd-lg ht-md ba catskill lighten bg >
                <div class="img _2"></div>
            </div>
            <div class="box" bevel wd-lg ht-md ba catskill lighten bg >
                <div class="img _3"></div>
            </div>
            <div class="box" bevel wd-lg ht-md ba catskill lighten bg >
                <div class="img _4"></div>
            </div>
        </div>
<pre my-sm v-highlightjs>
<code class="SCSS" xs >    // 无论长、窄、大、小的图片，都能自适应居中。
    // SCSS

    div.box{
        display: flex;
        justify-content: center;
        align-items: center;
        div.img{
            object-fit: cover;
            width: 100%;
            height: 100%;
            background: url("../../assets/img.jpg");
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
        }
    }
</code></pre>
    </section>
</template>

<script>
export default {
    name: "doc-image"
}
</script>

<style scoped lang="scss">
//dddaw
div.box{
    display: flex;justify-content: center;align-items: center;
    div.img{
        position: relative;
        object-fit: cover;
        width: 100%;height: 100%;
        &:after{
            position: absolute;
            display: inline-block;
            width: 100%;height: 20px;
            bottom: -23px;
            left: 0;
            text-align: center;
        }
        &._1{
            background: url("../../assets/doc-img-1.jpg");
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            &:after{
                content: '窄图像: 按宽度缩放';
            }
        }
        &._2{
            background: url("../../assets/doc-img-2.jpg");
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            &:after{
                content: '宽图像: 按高度缩放';
            }
        }
        &._3{
            background: url("../../assets/doc-img-3.jpg");
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            &:after{
                content: '大图像: 按最小边尺寸缩小';
            }
        }
        &._4{
            background: url("../../assets/doc-img-4.jpg");
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            &:after{
                content: '小图像: 按最小边尺寸放大';
            }
        }
    }
}


</style>