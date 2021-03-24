export interface IStatus {
   riscado: boolean;
   cortado: boolean;
   arredondado: boolean;
   furado: boolean;
   colado: boolean;
   parafusado: boolean;
   pronto: boolean;
}

export interface IFeature {
   id: string;
   description: string;
   status: IStatus;
}
