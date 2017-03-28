import { MySchoolUIPage } from './app.po';

describe('my-school-ui App', () => {
  let page: MySchoolUIPage;

  beforeEach(() => {
    page = new MySchoolUIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
