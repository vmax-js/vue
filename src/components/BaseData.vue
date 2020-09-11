<script>
import BaseDataChild from "./BaseDataChild";
export default {
    components:{
        BaseDataChild
    },
    render(createElement){
        return createElement('div',{
            class:{
                foo:true,
                bar:false
            },
            style:{
                color:'red',
                fontSize:'14px'
            },
            attrs:{
                id:'test'
            }
        },[
            'xxx',
            createElement('base-data-child',{
                props:{
                    name:'basedatachild组件'
                },
                //原生事件
                nativeOn:{
                    click:function(){
                        console.log('native click')
                    }
                }
            }),
            createElement('p',{
                domProps:{
                    innerHTML:'<span>domPropsInnerHTML</span>'
                },
                on:{
                    click:function(){
                        console.log('p点击');
                    }
                }
            })
        ]);
    }
}
</script>