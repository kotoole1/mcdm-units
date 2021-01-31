<template>
  <div class="ul-icon-container">
    <svg class="icon"
         :class="{ hovered, active, invisible }"
         :style="{ width: width + 'px' }"
         @mouseover="hoverStart"
         @mouseout="hoverStop"
         style="overflow:visible;enable-background:new 0 0 512 651.8;" xml:space="preserve"
         version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%"
         viewBox="0 0 512 651.8"
         preserveAspectRatio="xMidYMin slice">
      <defs>
        <mask :id="'liquidMask' + id">
            <path class="liquidMaskShape" d="M51.8,413c-22.3,46.7,13.6,99.6,67.4,99.6h273.6c53.9,0,89.7-53,67.4-99.6l-79.2-120.3H127.5
          L51.8,413z" fill="#fff"/>
          <g class="bubbleGroup">
              <circle style="--animation-order: 1;" class="semi-bubble" cx="209.8" cy="623.8" r="40"/>
            <circle style="--animation-order: 2;" class="bubble" cx="146.2" cy="615.8" r="20"/>
            <circle style="--animation-order: 3;" class="bubble" cx="306" cy="568.8" r="52"/>
            <circle style="--animation-order: 4;" class="bubble" cx="236.8" cy="542.2" r="20"/>
            <circle style="--animation-order: 5;" class="semi-bubble" cx="127.7" cy="558.8" r="40"/>
            <circle style="--animation-order: 6;" class="bubble" cx="176.2" cy="555.8" r="20"/>
            <circle style="--animation-order: 7;" class="semi-bubble" cx="381.8" cy="599.7" r="40"/>
          </g>
        </mask>
      </defs>
      <g id="Flask">
        <path id="Bottle" class="st1" d="M46,431.2c0.1-0.6,0.2-1.3,0.4-1.9c0.2-1,0.5-2,0.7-3.1s0.5-2.1,0.8-3.1V423
          c0.6-2.1,1.3-4.1,2.2-6.1c0.5-1.3,1.1-2.7,1.7-3.9l64.5-104.2L192.5,199l-1.1-143.6c-5.5-1.4-10.4-3.7-14.5-6.7
          c-7.3-5.3-11.4-12.6-11.4-20.2c0-15.8,17.4-28.5,38.8-28.5l103.4,0c10.3,0,20.2,3,27.4,8.4c4.1,3,7.3,6.7,9.2,10.7
          c7.1,14.8-3.5,31.1-23.7,36.3l-1.2,143.6L460.2,413c22.3,46.7-13.5,99.7-67.4,99.6H119.2c-34.1,0-61-21.4-70.4-48.9
          c-0.1-0.1-0.1-0.3-0.2-0.4v-0.1c-1.5-4.5-2.6-9.1-3.1-13.7c-0.1-1-0.2-2-0.2-2.9v-0.3c-0.2-1.6-0.2-3.3-0.2-5v-0.4
          C45.2,437.6,45.5,434.4,46,431.2z"/>
              <g id="maskedLiquid" :mask="'url(#liquidMask' + id + ')'">
        <path id="Liquid" class="st2" d="M51.8,413c-22.3,46.7,13.6,99.6,67.4,99.6h273.6c53.9,0,89.7-53,67.4-99.6l-79.2-120.3H127.5
          L51.8,413z"/>
        </g>
              <g id="Flask-mask" class="st3">
          <path class="st4" d="M45.2,438.8c0.1-2.6,0.4-5.1,0.8-7.6c0.1-0.6,0.2-1.3,0.4-1.9c0.2-1,0.5-2,0.7-3.1s0.5-2.1,0.8-3.1
            c0.2-0.7,0.5-1.5,0.8-2.2c0.5-1.3,1-2.6,1.4-3.9c0.5-1.3,1.1-2.7,1.7-3.9l64.5-104.2L192.5,199l-1.1-143.6
            c-5.5-1.4-10.4-3.7-14.5-6.7c-7.3-5.3-11.4-12.6-11.4-20.2c0-15.8,17.4-28.5,38.8-28.5l38.8,0l0.2,231L78.1,500.7
            c-7-4.4-13.1-10-18-16.4c-0.3-0.3-0.5-0.6-0.8-0.9c-3.2-4.2-6-8.8-8.1-13.6c-0.4-0.8-0.8-1.8-1.2-2.7c-0.5-1.3-0.9-2.5-1.4-3.8
            s-0.8-2.6-1.2-4c-0.4-1.4-0.8-2.8-1.1-4.2c-0.4-1.8-0.7-3.7-0.9-5.6c-0.1-1-0.2-2-0.2-2.9c-0.1-1.8-0.2-3.6-0.2-5.4
            C45.1,440.4,45.1,439.6,45.2,438.8z"/>
        </g>
      </g>
    </svg>
  </div>
</template>
<script lang="ts">
import {randomId} from '@/models/uuid';
import {WithAnimationPosition} from '@/options/homebrewEditorAnimation';
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component({})
export default class LabIcon extends Vue implements WithAnimationPosition {
  @Prop({ type: Number, required: true })
  public width!: number;

  public hovered: boolean = false;
  public active: boolean = false;
  public invisible: boolean = false;
  public readonly id: string;

  constructor() {
    super();
    this.id = randomId();
  }

  public hoverStart(): void {
    this.hovered = true;
  }

  public hoverStop(): void {
    this.hovered = false;
  }

  public getElement(): Element {
    return this.$el;
  }

  public setVisibility(isVisible: boolean): void {
    this.invisible = !isVisible;
  }

  public startDurationEffects(): void {
    this.active = true;
  }

  public stopDurationEffects(): void {
    this.active = false;
  }
}
</script>

<style lang="less">
  .ul-icon-container {
    position: relative; // TODOK: This needs to be absolute for the animation... Let's make a AnimationCart to wrap this
    // TODO: invisible
  }

  .icon:not(.hovered):not(.active) {
    .bubbleGroup > circle {
      transform: none;
    }
  }

  .icon.invisible {
    opacity: 0;
  }

  .icon.hovered,
  .icon.active {
    .bubbleGroup > circle {
      animation-name: bubbleAnimation;
      animation-duration: 1.5s;
      animation-delay: calc(var(--animation-order) * 200ms);
      animation-iteration-count:infinite;
    }
  }

  .icon {
    .st1{fill:#CAD8DD;}
    .st2{fill:#BA0E20;}
    .st3{opacity:.13;}
    .bubble{fill:#000000;}
    .semi-bubble{fill:#777;}
  }
  @keyframes bubbleAnimation {
    0% {transform: none;}
    99.999% {transform: translateY(-80%);}
    100% {transform: none;}
  }
</style>
