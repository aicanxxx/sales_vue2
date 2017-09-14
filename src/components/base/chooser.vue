<template>
    <div class="chooser-component">
        <ul class="chooser-list">
            <li v-for="(item,index) in selections" @click="chosenSelection(index)" :class="{active:index==nowIndex}">{{item.label}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        props:{
            selections:{
                type:Array,
                default:[{
                    label:'test',
                    value:0
                }]
            }
        },
        data(){
            return {
                nowIndex:0
            }
        },
        methods:{
            chosenSelection(index){
                this.nowIndex=index;
                this.$emit('on-change',this.selections[index]);
            }
        }
    }
</script>

<style scoped>
    .chooser-component{
        display: inline-block;
    }
    .chooser-list li{
        display: inline-block;
        padding: 5px 10px;
        margin-right: 20px;
        border:1px solid #e2e3e4;
        border-radius: 5px;
        background: #fff;
        cursor: pointer;
    }
    .chooser-list  .active{
        color: #fff;
        background: thistle;
    }
</style>