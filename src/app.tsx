export function render(oldRender: any) {
  console.log('render')
  oldRender();
}

export function patchRoutes() {
  console.log('patchRoutes')
}