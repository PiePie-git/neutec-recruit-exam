<template>
    <div class="view-area" :style="{ 'height': windowHeight + 'px'}">
        <div class="content">
            <div class="square"><div class="ball">0</div></div>
            <div class="square"></div>
            <div class="square-flash"><div class="ball">0</div></div>
            <div class="square"></div>
            <div class="square-flash"></div>
            <div class="square"></div>
            <div class="square"><div class="ball">0</div></div>
            <div class="square"></div>
            <div class="square-flash"><div class="ball">0</div></div>
        </div>
    </div>
</template>
<script>
export default {
    computed: {
        windowHeight() {
            return window.innerHeight - 30
        }
    }
}
</script>
<style>
.view-area {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}
.content {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 4px;
    padding: 4px;
    width: 100%;
}
.square {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    border: black solid 2px;
    background: radial-gradient(circle, rgba(113,81,95,1) 81%, rgba(0,0,0,1) 100%);
}
.square-flash {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    border: black solid 2px;
}
.square-flash::before {
    content: "";
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(113,81,95,1) 81%, rgba(0,0,0,1) 100%);
    animation: flashing 0.5s infinite;
}
.ball {
    width: 30px;
    height: 30px;
    background-color: #A5F12B;
    border-radius: 100%;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: moving 2s infinite;
    z-index: 1;
}
@keyframes flashing {
    0%   {opacity: 1;}
    50%  {opacity: 0.6;}
    100% {opacity: 1;}
}
@keyframes moving {
    0%   {left: 50%;}
    100% {left: 280%;}
}
</style>