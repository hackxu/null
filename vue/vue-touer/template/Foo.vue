<template>
<p>this is a foo</p>
    <a v-link="{ path: '/foo/bar' }">Go to Bar</a>
    <a v-link="{ path: '/foo/baz' }">Go to Baz</a>

    <router-view></router-view>
</template>