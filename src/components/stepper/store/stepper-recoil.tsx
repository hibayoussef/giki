import { atom, selector } from "recoil";
import { FirstStepperPage } from '../stepper-pages/page1';
import { SecondStepperPage } from "../stepper-pages/page2";
import { ThirdStepperPage } from "../stepper-pages/page3";
export const pageNumberState = atom({
  key: "pageNumber",
  default: 0,
});


export const stepperPages = atom({
  key: "stepperPages",
  default: [ <FirstStepperPage />,<SecondStepperPage />,<ThirdStepperPage />] as any[],
});

export const infoValue = selector({
  key: "infoValue",
  get: ({ get }) => ({
    pageNumber: get(pageNumberState)
  }),
});