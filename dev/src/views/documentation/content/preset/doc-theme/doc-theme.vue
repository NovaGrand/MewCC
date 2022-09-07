<template>
    <div class="doc-theme" px-lg>
        <section class="sampleForm">
            <div pa-lg px-15 card-md bv white bg>
                <!--第一行-->
                <div jsb ht-xs ht-15 class="header">
                    <div flex ac>
                        <ico xl fs-25 style="margin-left: -15px">kit-bnb</ico>
                        <div>
                            <div lg bold>Pin Box</div>
                            <div xs style="transform: scale(.7) translateY(2px);transform-origin: 6% 50%">Private Limited</div>
                        </div>
                    </div>
                    <div>
                        <h3 xl fs-10 ls-sm >Invoice</h3>
                        <small style="transform: scale(.85);transform-origin: 6% 50%" ac-18>
                            <div my-sm><i>Number#</i><i>57989</i></div>
                            <div my-sm><i>Date:</i><i>10/June/2018</i></div>
                        </small>
                    </div>
                </div>
                <div class="body">
                    <!--第二行-->
                    <div flex mt-md>
                        <div ht-xs ht-10 wd-lg wd-10 column jsb >
                            <h3 sm fs-1>Bill To:</h3>
                            <div bold sm fs-2>Jonathon Deo</div>
                            <small ac-18>
                                <div mb-sm>123 Street Town/City, County</div>
                                <div >+900 5656 9876</div>
                            </small>
                        </div>
                        <div ht-xs ht-1 column jsb ml-3>
                            <div>Total Due:</div>
                            <div bold sm fs-1>USD: $ 1400</div>
                        </div>
                    </div>
                    <!--表头-->
                    <div mt-lg mt-20 flex bold ac-19>
                        <i col-13>ITEM DESCRIPTION</i>
                        <i col-4 jc>PRICE</i>
                        <i col-2 jc>QTY</i>
                        <i col-6 je>TOTAL</i>
                    </div>
                    <!--表格-->
                    <div mt-sm mt-6 bt-md bb-md ac-19>
                        <div v-for="item in items_2" flex bb ac-8>
                            <div sm br-md ht-xs ht-10 column jc col-13>
                                <div bold>{{ item.title }}</div>
                                <div xs ac-18 mt-sm lh-xs>{{ item.info }}</div>
                            </div>
                            <div sm br-md ht-xs ht-10 ac col-4  px-md px-8>{{ item.price }}</div>
                            <div sm br-md ht-xs ht-10 ac col-2 jc>{{ item.QTY }}</div>
                            <div sm ac-25       ht-xs ht-10 ac col-6 je>{{ item.total }}</div>
                        </div>
                    </div>
                    <!--落款-->
                    <div jsb mt-lg>
                        <div>
                            <field area ba wd-md wd-4 rect label="Remark"></field>
                        </div>
                        <div bb-lg ht-xs ht-15 column jsb>
                            <div jsb wd-sm wd-8 bold><i>SUB TOTAL</i><i>$8530.00</i></div>
                            <div jsb wd-sm wd-8 ><i>Tax Vat 18%</i><i>$120.50</i></div>
                            <div jsb wd-sm wd-8 pb-sm><i>Discount 10%</i><i>-$853.00</i></div>
                        </div>
                    </div>
                    <div je bold mt-md >
                        <div wd-sm wd-8 jsb>
                            <i>Grand Total</i><i red darken>$7797.70</i>
                        </div>
                    </div>
                    <div ht-xs></div>
                </div>
            </div>
        </section>
        <prism bv lang="js" style="margin: 35px 0 0 0;">{{code}}</prism>
        <div bold jc my-sm>
            <btn col-25 vanilla blue bg ls-xl @click="toggle">Toggle to {{ $color.theme === 'dark' ? 'Light Theme' : 'Dark Theme' }}</btn>
        </div>
        <div class="sample" py-md ba-xs alpha-8 lh-xs mt-xl>
            <div jc>
                <i lg jc mx-xs bold lighten red>MewCC</i>
                <i lg jc mx-xs bold lighten orange>Sample</i>
                <i lg jc mx-xs bold lighten pink>Arcadia</i>
                <i lg jc mx-xs bold lighten purple>Kodiak</i>
                <i lg jc mx-xs bold lighten cyan>Kalimdor</i>
                <i lg jc mx-xs bold lighten green>Azeroth</i>
                <i lg jc mx-xs bold lighten blue>Orgrimmar</i>
            </div>
            <div jc>
                <i lg jc mx-xs bold red>MewCC</i>
                <i lg jc mx-xs bold orange>Sample</i>
                <i lg jc mx-xs bold pink>Arcadia</i>
                <i lg jc mx-xs bold purple>Kodiak</i>
                <i lg jc mx-xs bold cyan>Kalimdor</i>
                <i lg jc mx-xs bold green>Azeroth</i>
                <i lg jc mx-xs bold blue>Orgrimmar</i>
            </div>
            <div jc>
                <i lg jc mx-xs bold darken red>MewCC</i>
                <i lg jc mx-xs bold darken orange>Sample</i>
                <i lg jc mx-xs bold darken pink>Arcadia</i>
                <i lg jc mx-xs bold darken purple>Kodiak</i>
                <i lg jc mx-xs bold darken cyan>Kalimdor</i>
                <i lg jc mx-xs bold darken green>Azeroth</i>
                <i lg jc mx-xs bold darken blue>Orgrimmar</i>
            </div>
        </div>
        <div class="sample" ba-md dashed alpha-8 pa-sm nu-sm>
            <div white darken bg lg fs-2 bold py-sm py-5 jc>
                GREAT MINDS THINK ALIKE.
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "doc-theme",
    mounted(){
        // this.$color.theme = 'dark'
    },
    beforeUnmount(){
        this.$color.theme = 'light'
    },
    data(){
        return {
            n: 1,
            value:'用户名Arcadia',
            label:'用户名',
            sample:{
                val_1:'',val_2:'',val_3:'',val_4:'',val_5:'',val_6:'',val_7:'',val_8:'',val_9:'',val_10:'',
                val_11:'',val_12:'',val_13:'',val_14:'',val_15:'',val_16:'',val_17:'',val_18:'',val_19:'',val_20:'',
            },
            items:[
                '耳熟能详的张三','义薄云天的李四','名冠天下的王五'
            ],
            items_2:[
                { title:'Wedding Photography', info:'Dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.', price:'$1300.00', QTY:'1', total:'$1200.00' },
                { title:'Web Development', info:'At vero eos et accusamus et iusto odio qui blanditiis voluptatum.', price:'$300.00', QTY:'4', total:'$1200.00' },
                { title:'Brochure Design', info:'Duis aute irure dolor in reprehenderit in voluptate.', price:'$1700.00', QTY:'1', total:'$3400.00' },
                { title:'', info:'', price:'', QTY:'', total:'' },
            ],
            code:`this.$color.theme = this.$color.theme === 'dark' ? 'light' : 'dark'`
        }
    },
    watch:{

    },
    methods:{
        toggle(){
            this.$color.theme = this.$color.theme === 'dark' ? 'light' : 'dark'
        }
    }
}
</script>

<style scoped lang="scss">
div.doc-theme{
    div.sample{
        font-family: black;
    }
}
</style>