export default interface RouteModel {
  title: string;
  url: string;
  component: React.ComponentClass<any> | React.FC<any>;
}