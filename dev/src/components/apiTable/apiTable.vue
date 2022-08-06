<template>
    <table class="mew-apiTable">
        <thead>
            <tr>
                <th class="props">属 性</th>
                <th class="description">说 明</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in items">
                <td class="name">{{ item.name }}</td>
                <td class="description">
                    <div class="info">
                        <i class="type">Type: <i class="blue">{{ item.type }}</i></i>
                        <i class="defaultValue" v-if="item.default">Default: <i class="blue">{{ item.default }}</i></i>
                        <i class="arg" v-if="item.argType">Arg type: <i class="blue">{{ item.argType }}</i></i>
                    </div>
                    <div class="text">
                        {{ item.description }}
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name: "apiTable",
    props:{
        items:{
            type: Array,
            default: []
        }
    }
}
</script>

<style scoped lang="scss">
table.mew-apiTable{
    width: 100%;
    border-collapse: collapse;
    letter-spacing: 1px;
    i.blue{
        color: #4289b2;
    }
    th,td{
        text-align: left;
    }
    thead{
        color: rgba(0,0,0,.6);
        height: 50px;
        th{
            position: relative;
            &::after{
                content: '';height: 3px;background-color: rgba(0,0,0,.1);
                left: 0;bottom: 0;
            }
            &.props{
                width: 120px;
                &::after{
                    width: calc(100% - 3px);
                }
            }
            &.description{
                &::after{
                    width: 100%;
                }
            }
        }
    }
    tbody{
        tr{
            td.name{
                font-weight: bold;
                color: rgba(0,0,0,.6);
                font-family: Arial;
                vertical-align: top;
                padding-top: 15px;
            }
            td.description{
                div.info{
                    font-size: 12px;
                    vertical-align: top;
                    margin: 11px 0 5px 0;
                    font-weight: bold;
                    i.type{
                        margin-right: 14px;
                        width: 120px;
                        color: rgba(0,0,0,.6);
                    }
                    i.defaultValue{
                        color: rgba(0,0,0,.6);
                    }
                    i.arg{
                        color: rgba(0,0,0,.6);
                    }
                }
                div.text{
                    margin-bottom: 15px;
                }
            }
        }
    }
}
</style>