import { create } from 'zustand';

type ColorPair = {
  text: string;
  bgFirst: string;
  bgSecond: string;
  hoverBg: string;
  focusBg: string;
  fillFirst: string;
  fillSecond: string;
  stroke: string;
  borderClass: string;
};

const colorPairs: ColorPair[] = [
  {
    text: 'text-yellow',
    bgFirst: 'bg-yellow',
    bgSecond: 'bg-lightYellow',
    hoverBg: 'hover:bg-lightYellow',
    focusBg: 'focus:bg-lightYellow',
    fillFirst: 'fill-macYellow',
    fillSecond: 'fill-lightYellow',
    stroke: 'stroke-yellow',
    borderClass: 'border-image-yellow',
  },
  {
    text: 'text-greyGreen',
    bgFirst: 'bg-greyGreen',
    bgSecond: 'bg-lightGreen',
    hoverBg: 'hover:bg-lightGreen',
    focusBg: 'focus:bg-lightGreen',
    fillFirst: 'fill-macGreyGreen',
    fillSecond: 'fill-lightGreen',
    stroke: 'stroke-greyGreen',
    borderClass: 'border-image-green',
  },
  {
    text: 'text-blueGrey',
    bgFirst: 'bg-blueGrey',
    bgSecond: 'bg-lightBlue',
    hoverBg: 'hover:bg-lightBlue',
    focusBg: 'focus:bg-lightBlue',
    fillFirst: 'fill-macBlueGrey',
    fillSecond: 'fill-lightBlue',
    stroke: 'stroke-blueGrey',
    borderClass: 'border-image-blue',
  },
  {
    text: 'text-peach',
    bgFirst: 'bg-peach',
    bgSecond: 'bg-lightPeach',
    hoverBg: 'hover:bg-lightPeach',
    focusBg: 'focus:bg-lightPeach',
    fillFirst: 'fill-macPeach',
    fillSecond: 'fill-lightPeach',
    stroke: 'stroke-peach',
    borderClass: 'border-image-peach',
  },
  {
    text: 'text-coral',
    bgFirst: 'bg-coral',
    bgSecond: 'bg-palePink',
    hoverBg: 'hover:bg-palePink',
    focusBg: 'focus:bg-palePink',
    fillFirst: 'fill-macCoral',
    fillSecond: 'fill-palePink',
    stroke: 'stroke-coral',
    borderClass: 'border-image-coral',
  },
];

type ColorStore = {
  index: number;
  colors: ColorPair;
  next: () => void;
};

export const useColorStore = create<ColorStore>(set => ({
  index: 0,
  colors: colorPairs[0],
  next: () =>
    set(state => {
      const nextIndex = (state.index + 1) % colorPairs.length;
      return {
        index: nextIndex,
        colors: colorPairs[nextIndex],
      };
    }),
}));
