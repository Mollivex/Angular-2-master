import { AngularMasterPage } from './app.po';

describe('angular-master App', function() {
  let page: AngularMasterPage;

  beforeEach(() => {
    page = new AngularMasterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
