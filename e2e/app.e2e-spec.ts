import { Angular281116LastPage } from './app.po';

describe('angular-281116-last App', function() {
  let page: Angular281116LastPage;

  beforeEach(() => {
    page = new Angular281116LastPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
