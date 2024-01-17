<template>
    <RouterView />
</template>





<script lang="ts" setup>
import storeConfig from "@/stores/config/theme"

const config = storeConfig()

config.isDark
</script>





<style>

/* ALL SIZES */

/* XS */

@media(min-width: 320px) {

}

/* SM */

@media(min-width: 480px) {
    
}

/* MD */

@media(min-width: 640px) {
    
}

/* LG */

@media(min-width: 1280px) {
    
}

/* XL */

@media(min-width: 1600px) {
    
}

</style>