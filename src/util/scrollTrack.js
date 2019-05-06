import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';


export const scrollEvent = typeof window !== 'undefined' ? fromEvent(window, 'scroll') : undefined;

export const getOffset = (el) => {
  const rect = el.getBoundingClientRect();
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
};

export const elementPositionInViewport = (el) => {
  if (!el) {
    throw new Error('No element provided');
  }
  const rect = el.getBoundingClientRect();
  return rect;
};

export const elementPercentPositionInViewport = (el) => {
  const yPos = elementPositionInViewport(el).y;
  const onePercent = window.innerHeight / 200;
  const elementPercent = yPos / onePercent;
  const progressPercent = 100 - elementPercent;

  return progressPercent;
};

export const overScrollColors = (top, bottom) => {
  const siteBGScrollEvent = scrollEvent.pipe(
    map(() => (document.body.getBoundingClientRect()).top < 0),
  );

  siteBGScrollEvent
    .subscribe((belowTop) => {
      if (belowTop) {
        const html = document.getElementsByTagName('HTML')[0];
        const body = document.getElementsByTagName('BODY')[0];
        html.style.backgroundColor = bottom;
        body.style.backgroundColor = bottom;
      } else {
        const html = document.getElementsByTagName('HTML')[0];
        const body = document.getElementsByTagName('BODY')[0];
        html.style.backgroundColor = top;
        body.style.backgroundColor = top;
      }
    });
};

export const isElementInViewport = (el) => {
  const rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
    rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
  );
};
