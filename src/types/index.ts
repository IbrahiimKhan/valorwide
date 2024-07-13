import {icons} from '../components';

export interface PackageData {
  ID: number;
  Name: string;
  Date: string;
  Price: string;
  PriceStart: number;
  PriceEnd: number;
  Currency: string;
  Bonus: string;
  Duration: number;
  MonthlyReturn: string;
  MaturityBonus: number;
}

export interface ProfileInfoCardType {
  id: number;
  leftIcon?: string;
  title: string;
  subtitle?: string | number;
  rightIcon?: string;
  active?: number;
  inactive?: number;
  share?: Boolean;
  copy?: boolean;
  leftIconTye?: keyof typeof icons;
  rightIconType?: keyof typeof icons;
}
