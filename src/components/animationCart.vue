<template>
<div v-show="animating"
     class="animation-cart"
     :style="{ width: getWidth() + 'px',
               top: getTop() + 'px',
               left: getLeft() + 'px'}"
     :class="getTop()">
  <slot></slot>
</div>
</template>
<script lang="ts">
  import {RectangleDimensions} from '@/components/transitions';
  import {Component, Prop, Vue} from 'vue-property-decorator';

  @Component({})
  export default class AnimationCart extends Vue {
    @Prop(String)
    public parentId!: string;

    public animating: boolean = false;

    private startingPosition: RectangleDimensions|null = null;
    private endingPosition: RectangleDimensions|null = null;

    public getWidth(): number|null {
      return this.startingPosition ? this.startingPosition.width : null;
    }

    public getTop(): number {
      // console.log('getting top', this.startingPosition);
      // reference starting position (without transform) if animating, otherwise 0
      if (this.startingPosition) {
        return this.startingPosition.top;
      } else {
        return 0;
      }
    }

    public getLeft(): number {
      // reference starting position (without transform) if animating, otherwise 0
      if (this.startingPosition) {
        return this.startingPosition.left;
      } else {
        return 0;
      }
    }

    public setAnimationPosition(position: RectangleDimensions): void {
      console.log('animation start position set: ', position);
      const parentElement = document.getElementById('root-editor');
      if (parentElement) {
        position.offsetForParent(parentElement);
      }
      this.startingPosition = position;
      this.endingPosition = new RectangleDimensions();
      this.animating = true;
    }

    public animateTo(position: RectangleDimensions, duration: number, callback: () => void): void {
      console.log('animation end position set: ', position);
      const parentElement = document.getElementById('root-editor');
      if (parentElement) {
        position.offsetForParent(parentElement);
      }
      this.endingPosition = position;
      this.animating = true;
      const leftShift = this.endingPosition.left - this.startingPosition!.left;
      const topShift = this.endingPosition.top - this.startingPosition!.top;
      const xScale = this.endingPosition.width / this.startingPosition!.width;
      // const yScale = this.endingPosition.height / this.startingPosition!.height;

      const animation = this.$el.animate([
        { transform: 'none' },
        { transform: `translate(${ leftShift }px, ${ topShift }px) scale(${xScale})` },
      ], {
        duration,
        easing: 'ease-in-out',
        fill: 'forwards',
      });
      animation.onfinish = () => {
        this.stopAnimating();
        callback();
      }
    }

    public stopAnimating(): void {
      this.startingPosition = null;
      this.endingPosition = null;
      this.animating = false;
    }

    private setStartingPosition(position: RectangleDimensions): void {
      this.startingPosition = position;
      this.$set(this.startingPosition, 'top', position.top);
      this.$set(this.startingPosition, 'left', position.left);
      this.$set(this.startingPosition, 'width', position.width);
      this.$set(this.startingPosition, 'height', position.height);
    }

    private setEndingPosition(position: RectangleDimensions): void {
      this.endingPosition = position;
      this.$set(this.endingPosition, 'top', position.top);
      this.$set(this.endingPosition, 'left', position.left);
      this.$set(this.endingPosition, 'width', position.width);
      this.$set(this.endingPosition, 'height', position.height);
    }
  }
</script>

<style lang="less">
  .animation-cart {
    transform-origin: top left;
  }
</style>
