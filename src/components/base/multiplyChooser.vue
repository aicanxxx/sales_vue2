<template>
    <div class="chooser-component">
        <ul class="chooser-list">
            <li v-for="(item,index) in selections" @click="toggleSelection(index)" :class="{active:checkActive(index)}">{{item.label}}</li>
        </ul>
    </div>
</template>

<script>
    import _ from 'lodash'
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
                nowIndexes:[0]
            }
        },
        methods:{
            toggleSelection(index){
                if(this.nowIndexes.indexOf(index)==-1){
                    this.nowIndexes.push(index);
                }else{
                    this.nowIndexes=_.remove(this.nowIndexes,(idx)=>{
                        return idx !==index;
                    })
                }
                let nowObjArray=_.map(this.nowIndexes,(idx)=>{
                    return this.selections[idx];
                });
                this.$emit('on-change',nowObjArray);
            },
            checkActive(index){
                return this.nowIndexes.indexOf(index)!==-1;
            }
        }
    }
</script>

<style scoped>
    .chooser-component{
        display: inline-block;
        vertical-align: middle;
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