import {create} from "zustand";
import {DetailsForm} from "@/app/customer/(withoutMenu)/details/page";

type Order = {
  serviceType: string;
  setServiceType: (type: string) => void;
  detailsForm: DetailsForm;
  setDetails: (form: DetailsForm) => void;
}


export const useOrder = create<Order>((set) => ({
  serviceType: 'default',
  detailsForm: {
    bathCount: 1,
    roomCount: 1,
    description: '',
    houseType: 'default',
    options: []
  },
  setServiceType: (type: string) => set({serviceType: type}),
  setDetails: (form: DetailsForm) => set({detailsForm: form})
}));