<template>
    <div>
        <h2 lg ls-sm>Field 组件</h2>
        <div class="sample" my-md>
<!--            px-md py-md col-25 ht-sm lg-->
            <form action="">
                <field v-model="value" type="checkbox" ba></field>
                <input type="submit">
            </form>
        </div>
        <select name="a" id="a" my-md py-sm ba wd-sm>
            <option ht-lg value="AAAAA"><i fill class="a">AAAAA</i></option>
            <option ht-lg value="BBBBB"><i fill class="a">BBBBB</i></option>
            <option ht-lg value="CCCCC"><i fill class="a">CCCCC</i></option>
            <div class="b">111</div>
        </select>
<!--        <div foo jc>-->
<!--            dadwa-->
<!--        </div>-->
    </div>
</template>

<script>
export default {
    name: "doc-field",
    data(){
        return {
            value:''
        }
    },
    watch:{
        value(val){
            console.log(val)
        }
    }
}
</script>

<style lang="scss">
select{
    display: block;
    text-align: center;
    position: relative;
    background-color: transparent;
    height: 50px;
    div.b{
        position: absolute;width: 10px;height: 10px;
        background-color: #00cae5;
        display: inline-block;z-index: 999;
    }
    option{
        height: 30px;
        padding: 10px 10px;
        outline: none;
        border: none;
        z-index: -1;
        i.a{
            color: red!important;
            background-color: red;
        }
        &:hover{
            background-color: red!important;
        }
    }
}

</style>