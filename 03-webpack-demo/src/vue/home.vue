<template>
	<div class="home-con">
		<ul>
			<li><a v-link="{name : 'home'}">home</a></li>
			<li><a v-link="{name : 'blog'}">blog</a></li>
			<li><a v-link="{name : 'topic'}">topic</a></li>
			<li><a v-link="{name : 'about'}">about</a></li>
		</ul>
	</div>
</template>
<script>
	
</script>
<style lang="sass">
	@import '../scss/home.scss';
	.home-con{
		width: 400px;
		height: 400px;
		li {
			list-style: none;
		}
	}
</style>