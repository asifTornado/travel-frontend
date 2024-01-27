<template>

    <textarea id="hotelEditor" class="w-full pl-[100px]" >

        
    
    </textarea>
    
    
    
    
    </template>
    
    <script setup>
    import suneditor from 'suneditor'
    import 'suneditor/dist/css/suneditor.min.css'
    import plugins from 'suneditor/src/plugins'
    import {ref, onMounted, onBeforeUnmount, defineProps} from 'vue'
    import { useTripStore } from '../../stores/trips'
    
    const emits = defineEmits(['textChangedHotel']);
    
    
    var requestStore = useRequestsStore()
    
    var suneditorholder = ref(null)
    
    
    const { content } = defineProps(['content']);
    
    
    var contentValue = ref(content)
    
    onMounted(() => {
     suneditorholder = suneditor.create((document.getElementById("hotelEditor")), {
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
            ['table', 'link', 'image', 'video', 'audio' /** ,'math' */], // You must add the 'katex' library at options to use the 'math' plugin.
            /** ['imageGallery'] */ // You must add the "imageGalleryUrl".
            ['fullScreen', 'showBlocks', 'codeView'],
            ['preview', 'print'],
            ['save', 'template'],
            /** ['dir', 'dir_ltr', 'dir_rtl'] */ // "dir": Toggle text direction, "dir_ltr": Right to Left, "dir_rtl": Left to Right
        ],
        value:contentValue.value
    
    //     callBackSave: function (contents, isChanged) {
    // alert(contents);
    //     }
       
     })
    
    if(suneditorholder){
        
        suneditorholder.onInput = function (e, core) { 
            requestStore.customQuoteContent = core.getFullContents()
    
            emits("textChangedHotel", core.getFullContents())
    
        }
    }
    })
    
    
    
    
    </script>