export interface Goods {
  id: string;
  name: string;
  price: number;
}
const Goods: Goods[] = [
  {
    id: "1",
    name: "iPhone 14",
    price: 398_000,
  },
  {
    id: "2",
    name: "Квартира в центре Алматы",
    price: 30_000_000,
  },
  {
    id: "3",
    name: "Квартира в центре Алматы во время мобилизации",
    price: 40_000_000,
  },
  {
    id: "4",
    name: "Баран на Құрбан айт",
    price: 70_000,
  },
  {
    id: "ғ",
    name: "Литр нефти",
    price: 33_625,
  },
];

export default Goods;
