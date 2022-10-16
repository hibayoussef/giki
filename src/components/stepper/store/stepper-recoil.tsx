import { atom, selector } from "recoil";
import SelectForm from "../../giki-stepper/select-form";
import SelectInterests from "../../giki-stepper/select-interests";
import WelcomeToGiki from "../../giki-stepper/welcome-to-giki";

export const pageNumberState = atom({
  key: "pageNumber",
  default: 0,
});


export const stepperPages = atom({
  key: "stepperPages",
  default: [ <WelcomeToGiki />,<SelectForm />,<SelectInterests />] as any[],
});

export const infoValue = selector({
  key: "infoValue",
  get: ({ get }) => ({
    pageNumber: get(pageNumberState)
  }),
});