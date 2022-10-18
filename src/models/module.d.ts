export as namespace models;

interface SimpleComponent {
  [x: string]: any;
}

interface ComponentProp extends SimpleComponent {
  children?: React.ReactNode;
}
