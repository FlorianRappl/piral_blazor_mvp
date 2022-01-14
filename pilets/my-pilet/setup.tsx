import { PiletApi } from "../piral~/my-pilet/node_modules/my-app";

export default (app: PiletApi) => {
  app.registerTile(app.fromBlazor("my-tile"));   
};
