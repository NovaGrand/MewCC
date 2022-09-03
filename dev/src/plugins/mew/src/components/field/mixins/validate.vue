<script>
export default {
    name: "mew-validate",
    props:{
        disabled:{
            type: Boolean,
            default: false
        },
        invalid:{
            type: Boolean,
            default: false
        },
        require:{
            type: Boolean,
            default: false
        },
        username:{
            type: Boolean,
            default: false
        },
        email:{
            type: Boolean,
            default: false
        },
        minLength:{
            type: [Boolean, String, Number],
            default: false
        },
        maxLength:{
            type: [Boolean, String, Number],
            default: false
        },

    },
    mounted(){

    },
}
</script>
