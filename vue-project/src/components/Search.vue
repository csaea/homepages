<template>
    <div class="search-wrapper">
        <input
            v-model="localValue"
            @input="onInput"
            @keydown.enter.prevent
            class="search-input"
            type="search"
            placeholder="Search by name or grade..."
            aria-label="Search students"
            />
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
    modelValue: { type: String, default: '' }
})
const emit = defineEmits(['update:modelValue', 'search'])

const localValue = ref(props.modelValue)

watch(() => props.modelValue, (v) => {
    localValue.value = v
})

function onInput() {

    emit('update:modelValue', localValue.value)
    emit('search', localValue.value)
}
</script>

<style scoped>
.search-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    max-width: 760px;
    padding-bottom: 40px;
    margin: 20px auto;  /* vertical + horizontal centering */
}

.search-input {
    width: 75%;
    padding: 14px 16px;
    border-radius: 8px;
    border: 2px solid black;
    font-size: 16px;
    outline: none;
    box-sizing: border-box;
    transition: box-shadow .12s ease, border-color .12s ease;
    box-shadow: 2px 2px 0 #00ffff;
}
.search-input:focus {
    border-color: black;
    box-shadow: 2px 2px 0 #ff00ff;
}
</style>
