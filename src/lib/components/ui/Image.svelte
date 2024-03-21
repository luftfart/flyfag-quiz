
<script>
	import {fade} from 'svelte/transition'
	/**
     * @type {string}
     */
	 export let src = 'https://jotunheim.fly.dev/api/files/n4sfebjxm43jxvc/vryx5af99g6nqrx/icon_image_not_found_free_vector_259BQHTtI2.jpg';
  /**
     * @type {any}
     */
   export let alt;
  /**
     * @type {any}
     */
   export let className;
  /**
     * @type {any}
     */
   export let loading;
	let click;
	let clicked = click ? true : false;	

</script>
<div class="image-wrapper z-56" >
<img data-enlargable class="image {className}"  on:click={()=>{
	clicked = !clicked;
}} src={src} alt={alt}  loading={loading} />
</div>
{#if clicked}
<div class="modal" transition:fade={{duration: 100}}>
	<div on:click={()=>{clicked = !clicked}} class="close z-45 p-10">
		x
	</div>
	
	<div class="modal-image">
    <figure>
		<img data-enlargable class="m-image {className}"  src={src} alt={alt}  loading={loading}/>
    <figcaption>{alt}</figcaption>
    </figure>
	</div>
</div>
{/if}
<style>
	img:before {
background:black;
	}
	.m-image{
    position: absolute;
		height:auto;
		max-height:500px;
		object-fit: scale-down;
	}
	.close {
		cursor: pointer;
		font-size: 3rem;
		position: absolute;
		right: 0;
		color: white;
		margin-right:1.5rem;
		top:0;
	}
	.image {
		cursor: pointer;
		max-width:400px;
		max-height:400px;
  	transition: 0.125s;
	}
	
	.image:hover {
		opacity: 0.7;
	}
	
	img:active {
		opacity: 0.5;
	}
	
	.modal-image {
	  margin: auto;
  	display: block;
  	width: 80%;
  	max-width: 100%;	
	}
	.modal {
  	position: fixed;
		z-index: 2;
  	padding-top: 100px;
  	left: 0;
  	top: 0;
  	width: 100%;
  	height: 100%;
  	overflow: auto;
  	background-color: rgb(0,0,0);
  	background-color: rgba(0,0,0,0.9);
	}
</style>