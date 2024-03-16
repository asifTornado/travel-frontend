<template>




<textarea id="tripEditor" class="w-full pl-[100px]" >

</textarea>




</template>



<script setup>


import suneditor from 'suneditor'
import 'suneditor/dist/css/suneditor.min.css'
import plugins from 'suneditor/src/plugins'
import {ref, onMounted, onBeforeUnmount, defineProps} from 'vue'
import { useTripStore } from '../../stores/trips'
import { storeToRefs } from 'pinia'

const emits = defineEmits(['textChanged']);


var tripStore = useTripStore()
var {overlay} = storeToRefs(tripStore)

var suneditorholder = ref(null)


const { content } = defineProps(['content']);


var contentValue = ref(content)

onMounted(() => {
 suneditorholder = suneditor.create((document.getElementById("tripEditor")), {
    plugins: plugins,
    buttonList: [
        ['undo', 'redo'],
        ['font', 'fontSize', 'formatBlock'],
        ['paragraphStyle', 'blockquote'],
        ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
        ['fontColor', 'hiliteColor', 'textStyle'],
        ['removeFormat'],
        '/', // Line break
        ['outdent', 'indent'],
        ['align', 'horizontalRule', 'list', 'lineHeight'],
        ['table', 'link',   /** ,'math' */], // You must add the 'katex' library at options to use the 'math' plugin.
        /** ['imageGallery'] */ // You must add the "imageGalleryUrl".
        ['fullScreen', ],
        ['preview', 'print'],
        ['save', 'template'],
        /** ['dir', 'dir_ltr', 'dir_rtl'] */ // "dir": Toggle text direction, "dir_ltr": Right to Left, "dir_rtl": Left to Right
    ],
    maxCharCount:2000000000000000,
    value:contentValue.value

//     callBackSave: function (contents, isChanged) {
// alert(contents);
//     }
   
 })

if(suneditorholder){
    
    suneditorholder.onInput = function (e, core) { 
        tripStore.customQuote = core.getFullContents()
        console.log(core.getFullContents())
        emits("textChanged", core.getFullContents())

    }

    suneditorholder.onPaste = function (e, cleanData, maxCharCount, core){
        console.log("on paste called")
        debugger
        tripStore.customQuote = cleanData
        emits("textChanged", cleanData)
    }
}
})




</script>