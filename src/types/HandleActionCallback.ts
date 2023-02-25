export type HandleActionCallback = {
  onSuccess?: (msg?: string) => void;
  onError?: (msg?: string) => void;
};
//handles default actions like add successfully,update successfully  by using toast from react-toast
