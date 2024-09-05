<template>
  <!--  -->
    <div>
        {{ "" }}
    </div>
</template>

<script>
export default {
    name: "index",
    async mounted() {
        //redirect to live line
        await this.$router.push({
            name: "auth-signin"
        });

    },
};
</script>
