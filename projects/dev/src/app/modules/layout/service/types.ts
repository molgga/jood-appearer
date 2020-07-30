import { IMenu } from "~/dev/app/modules/layout/model/menu.model";

export interface ILayoutService {
  appTitle: string;
  getMenuList(): IMenu[];
}
