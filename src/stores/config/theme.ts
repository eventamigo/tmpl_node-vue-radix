import { defineStore } from "pinia"
import { useDark, useToggle } from "@vueuse/core"





const storeConfig = defineStore("storeConfig", () => {

    // VARIABLES (STATIC)

    // VARIABLES (DYNAMIC)

    const isDark = useDark()
    const toggleDark = useToggle(isDark)

    // COMPUTED

    // FUNCTONS

    // RETURN

    return {
        isDark,
        toggleDark
    }

})





export default storeConfig