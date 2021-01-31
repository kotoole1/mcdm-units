export class RectangleDimensions {
  constructor(public top: number = 0,
              public left: number = 0,
              public width: number = 0,
              public height: number = 0) {}

  public static fromElement(element: Element): RectangleDimensions {
    const dims = element.getBoundingClientRect();
    return RectangleDimensions.fromClientRect(dims);
  }

  public static fromClientRect(clientRect: ClientRect): RectangleDimensions {
    return new RectangleDimensions(clientRect.top, clientRect.left, clientRect.width, clientRect.height);
  }

  public offsetForParent(parentElement: Element) {
    const parentRect = parentElement.getBoundingClientRect();
    this.left -= parentRect.left;
    this.top -= parentRect.top;
  }
}
