import { GrouponPage } from './app.po';

describe('groupon App', () => {
  let page: GrouponPage;

  beforeEach(() => {
    page = new GrouponPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
