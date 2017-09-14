import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/index'
import DetailPage from '@/components/detail'
import Forecast from '@/components/detail/forecast'
import Count from '@/components/detail/count'
import Analysis from '@/components/detail/analysis'
import Publish from '@/components/detail/publish'

Vue.use(Router);

export default new Router({
    mode:'history',
    routes: [
        {
            path: '/',
            name: 'index',
            component: IndexPage
        },{
            path:'/detail',
            component: DetailPage,
            redirect:'/detail/count',
            children:[
                {
                    path:'forecast',
                    component:Forecast
                },
                {
                    path:'count',
                    component:Count
                },
                {
                    path:'analysis',
                    component:Analysis
                },
                {
                    path:'publish',
                    component:Publish
                }
            ]
        }
    ]
})
