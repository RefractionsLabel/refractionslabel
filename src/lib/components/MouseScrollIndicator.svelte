<div class="mouse">
	<div class="scrollWheel"></div>
</div>

<style>
	
.mouse {
  height: 60px;
  width: 32px;
  border: 3px solid white;
  border-radius: 32px;
  position: relative;
  .scrollWheel {
    height: 20px;
    width: 2px;
    background: white;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 10px;
    border-radius: 1px;
    transform: scaleY(0);
    animation: scroll 2s linear infinite;
  }
}

@keyframes scroll {
  0% {
    transform: scaleY(0);
    transform-origin: top;
  }
  25% {
    transform: scaleY(1);
    transform-origin: top;
  }
  26% {
    transform-origin: bottom;
  }
  50% {
    transform: scaleY(0);
    transform-origin: bottom;
  }
  100% {
    transform: scaleY(0);
    transform-origin: bottom;
  }
}

</style>