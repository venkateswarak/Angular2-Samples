import { SampleprojPage } from './app.po';

describe('sampleproj App', () => {
  let page: SampleprojPage;

  beforeEach(() => {
    page = new SampleprojPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
