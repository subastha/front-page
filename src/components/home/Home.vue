<template>
	<div class="home">
		<div class="body-wrapper absolute-center">
			<title-name>{{pageTitle}}</title-name>
			<div class="content-wrapper">
				<div class="content-rows top-row">
					<content-box v-for="page in pages.pagesTop" :key="page.title" 
						title="page.title" @select="updatePageTitle(page.title)"></content-box>
				</div>
				<div class="content-rows bottom-row"> 
					<content-box v-for="page in pages.pagesBottom" :key="page.title" 
						title="page.title" @select="updatePageTitle(page.title)"></content-box>
				</div>
				
			</div>
		</div>
	</div>
</template>
<script>
module.exports = {
  data() {
    return {
      pageTitle: 'Shubha Shrestha',
      pages: {
        pagesTop: [
          { title: 'One' },
          { title: 'Two' },
          { title: 'Three' },
        ],
        pagesBottom: [
          { title: 'Four' },
          { title: 'Five' },
          { title: 'Contact Me' },
        ],
      },
    };
  },
  methods: {
    doSomething() {
      console.warn('What can i do');
    },
    updatePageTitle(name) {
      console.log('mouseover');
      this.pageTitle = name;
    },
  },
};
</script>
<style lang="scss">
	@import 'Home.scss';
</style>