<template>
	<!-- home slider start -->
        <div class="slider-container">
            <!-- Slider Image -->
            <div id="mainSlider" class="nivoSlider slider-image">
                <img src="site/img/slider/3.jpg" alt="main slider" title="#htmlcaption1"/>
                <img src="site/img/slider/1.jpg" alt="main slider" title="#htmlcaption2"/>
            </div>
            <!-- Slider Caption 1 -->
            <div id="htmlcaption1" class="nivo-html-caption slider-caption-1">
                <div class="slider-progress"></div> 
                <div class="slide1-text">
                    <div class="middle-text">
                        <div class="cap-dec wow bounceInDown" data-wow-duration="0.9s" data-wow-delay="0s">
                            <h3>trendy summer collection 2016</h3>
                        </div>  
                        <div class="cap-title wow bounceInRight" data-wow-duration="1.2s" data-wow-delay="0.2s">
                            <h1>Top fashion for men</h1>
                        </div>
                        <div class="cap-readmore wow bounceInUp" data-wow-duration="1.3s" data-wow-delay=".5s">
                            <a href="#">shop now</a>
                        </div>  
                    </div>  
                </div>                      
            </div>
            <!-- Slider Caption 2 -->
            <div id="htmlcaption2" class="nivo-html-caption slider-caption-2">
                <div class="slider-progress"></div> 
                <div class="slide1-text">
                    <div class="middle-text">
                        <div class="cap-dec wow bounceIn" data-wow-duration="0.7s" data-wow-delay="0s">
                            <h3>trendy summer collection 2016</h3>
                        </div>  
                        <div class="cap-title wow bounceIn" data-wow-duration="1s" data-wow-delay="0.2s">
                            <h1>Top fashion for women</h1>
                        </div>
                        <div class="cap-readmore wow bounceIn" data-wow-duration="1.1s" data-wow-delay=".5s">
                            <a href="#">shop now</a>
                        </div>                                      
                    </div>                                      
                </div>
            </div>
        </div>
        <!-- home slider end -->  
</template>

<script>
export default {

  name: 'SliderComponent',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>