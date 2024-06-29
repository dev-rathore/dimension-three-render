import { deliveryTruckProps } from "./delivery-truck-props";
import { tractorPoliceProps } from "./tracter-police-props";
import { truckFlatProps } from "./truck-flat-props";

export const INITIAL_MODEL = {
  gltfUrl: 'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/truck-flat/model.gltf',
  id: '1',
  name: 'Truck Flat',
  props: truckFlatProps,
};

export const MODELS = [
  {
    gltfUrl: 'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/truck-flat/model.gltf',
    id: '1',
    name: 'Truck Flat',
    props: truckFlatProps,
  },
  {
    gltfUrl: 'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/tractor-police/model.gltf',
    id: '2',
    name: 'Tracter Police',
    props: tractorPoliceProps,
  },
  {
    gltfUrl: 'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/delivery-truck/model.gltf',
    id: '3',
    name: 'Delivery Truck',
    props: deliveryTruckProps,
  },
  {
    gltfUrl: 'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/cybertruck/model.gltf',
    id: '4',
    name: 'Cyber Truck',
    props: truckFlatProps,
  },
];
