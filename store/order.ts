import {create} from "zustand";

type Order = {
  serviceType: string;

  setServiceType: (serviceType: string) => void;
}


export const useOrder = create<Order>((set) => ({
  serviceType: 'default',
  setServiceType: (serviceType) => set({serviceType}),
}));