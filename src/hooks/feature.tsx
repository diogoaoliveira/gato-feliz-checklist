import {
   createContext,
   useCallback,
   useContext,
   useEffect,
   useMemo,
   useState,
} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { IFeature, IStatus } from '../interfaces';

interface IFeatureContext {
   features: IFeature[];
   addFeature: (description: string) => void;
   editFeature: (editedFeature: Omit<IFeature, 'status'>) => void;
   deleteFeature: (featureId: string) => void;
   toggleStatus: (featureId: string, statusKey: keyof IStatus) => void;
}

interface IFeatureProviderProps {
   children: JSX.Element;
}

const INITIAL_STATUS: IStatus = {
   arredondado: false,
   colado: false,
   cortado: false,
   furado: false,
   parafusado: false,
   pronto: false,
   riscado: false,
};

const FeatureContext = createContext<IFeatureContext>({} as IFeatureContext);

export function FeatureProvider({ children }: IFeatureProviderProps) {
   const [features, setFeatures] = useState<IFeature[]>([]);

   useEffect(() => {
      function loadFeatures() {
         const featuresJSON = localStorage.getItem('@GatoFeliz:features');
         if (featuresJSON) {
            setFeatures(JSON.parse(featuresJSON));
         }
      }

      loadFeatures();
   }, []);

   const addFeature = useCallback(
      (description: string) => {
         const newFeature = {
            id: uuidv4(),
            description,
            status: INITIAL_STATUS,
         };

         setFeatures([...features, newFeature]);
         localStorage.setItem(
            '@GatoFeliz:features',
            JSON.stringify([...features, newFeature])
         );
      },
      [features]
   );

   const editFeature = useCallback(
      (editedFeature: Omit<IFeature, 'status'>) => {
         const updatedFeatures = features.map((f) => {
            if (f.id === editedFeature.id) {
               return {
                  ...f,
                  description: editedFeature.description,
               };
            }
            return f;
         });

         setFeatures(updatedFeatures);
         localStorage.setItem(
            '@GatoFeliz:features',
            JSON.stringify(updatedFeatures)
         );
      },
      [features]
   );

   const deleteFeature = useCallback(
      (featureId: string) => {
         const updatedFeatures = features.filter((f) => f.id !== featureId);

         setFeatures(updatedFeatures);
         localStorage.setItem(
            '@GatoFeliz:features',
            JSON.stringify(updatedFeatures)
         );
      },
      [features]
   );

   const toggleStatus = useCallback(
      (featureId: string, statusKey: keyof IStatus) => {
         const updatedFeatures = features.map((f) => {
            if (f.id === featureId) {
               return {
                  ...f,
                  status: {
                     ...f.status,
                     [statusKey]: !f.status[statusKey],
                  },
               };
            }
            return f;
         });

         setFeatures(updatedFeatures);
         localStorage.setItem(
            '@GatoFeliz:features',
            JSON.stringify(updatedFeatures)
         );
      },
      [features]
   );

   const memoizedContextValues = useMemo(
      () => ({
         features,
         addFeature,
         editFeature,
         deleteFeature,
         toggleStatus,
      }),
      [features, addFeature, editFeature, deleteFeature, toggleStatus]
   );
   return (
      <FeatureContext.Provider value={memoizedContextValues}>
         {children}
      </FeatureContext.Provider>
   );
}

export function useFeature() {
   const context = useContext(FeatureContext);

   if (!context) {
      throw Error('useFeature must be used inside FeatureProvider');
   }

   return context;
}
