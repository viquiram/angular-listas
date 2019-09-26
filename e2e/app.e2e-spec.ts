import { EjemploListaPage } from './app.po';

describe('ejemplo-lista App', () => {
  let page: EjemploListaPage;

  beforeEach(() => {
    page = new EjemploListaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
