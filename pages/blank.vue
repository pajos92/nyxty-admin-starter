<template></template>

<script>
export default {
    layout: 'dashboard',

    asyncData() {
    return new Promise((resolve) => {
      setTimeout(function () {
        resolve({})
      }, 1000)
    })
  }
  
}
</script>