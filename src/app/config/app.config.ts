import { InjectionToken } from "@angular/core";
import { AppConfig } from "./app-config";
export  { AppConfig } from "./app-config";

export const APP_CONFIG: AppConfig = {
  apiEndpoint: 'api.heroes',
  title: 'Without DI'
};


export const  APP_CONFIG_NEW = new InjectionToken<AppConfig>('app-config')

export const DI_CONFIG: AppConfig = {
    apiEndpoint: 'api.heroes.com',
    title: 'DI'
  }

  export const DI_CONFIG_NEW: AppConfig = {
    apiEndpoint: 'api.heroes.com',
    title: 'DI_NEW'
  }