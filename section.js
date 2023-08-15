<script>
document.addEventListener('DOMContentLoaded', function() {
jQuery(function($){
$('.showme').click(function(){
$(this).closest('.e-con').next().slideToggle();
$(this).toggleClass('opened');
});
$('.closebutton').click(function(){
$(this).closest('.e-con').prev().find('.showme').click();
});
});
});
</script>
<style>
.showme a, .showme svg, .showme i , .showme img, .closebutton a, .closebutton i, .closebutton img{
cursor: pointer;
-webkit-transition: transform 0.34s ease;
transition : transform 0.34s ease;
}
.opened i , .opened img,.opened svg{
transform: rotate(90deg);
}
</style>