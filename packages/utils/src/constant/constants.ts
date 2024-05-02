type IBarConfig = {
  width: number;
  title: string;
};

interface IBarConfigs {
  [key: number]: IBarConfig;
}

const STRENGTH_BAR_CONFIG: IBarConfigs = Object.freeze({
  5: {
    width: 301,
    title: "Highest 🤩",
  },
  4: {
    width: 236,
    title: "High 😀",
  },
  3: {
    width: 177,
    title: "Medium 🙂",
  },
  2: {
    width: 111,
    title: "Low 😕",
  },
  1: {
    width: 50,
    title: "Lowest 😭",
  },
});

export { STRENGTH_BAR_CONFIG };
