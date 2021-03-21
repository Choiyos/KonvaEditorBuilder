
import RouteModel from "./RouteModel";
import { EditorPage } from "../components/EditorPage";

enum EditorPages {
  Edit,
}

export type EditorRouteModels = {
  [key in keyof typeof EditorPages]: RouteModel
}

export const EditorRoutesModel: EditorRouteModels = {
  Edit: {
    component: EditorPage,
    title: "edit",
    url: "/home/edit"
  }
}

export const EditorRoutes = Object.keys(EditorPages).map((val: string, index: number) => EditorRoutesModel.Edit)