import { Aasign1Page } from './app.po';

describe('aasign1 App', () => {
  let page: Aasign1Page;

  beforeEach(() => {
    page = new Aasign1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
