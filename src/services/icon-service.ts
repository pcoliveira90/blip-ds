/* eslint-disable @typescript-eslint/no-explicit-any */
class IconServiceBase {
  icons: any[] = [];

  getInstance(): void {
    console.log('getInstance');
  }

  registerSet(icons: any, config: any): void {
    this.icons = icons;

    console.log('registerSet', config);
  }

  removeSet(): void {
    this.icons = [];
    console.log('removeSet');
  }

  resolve(): void {
    console.log('resolve');
  }
}

export default new IconServiceBase();