import { MySchoolPage } from './app.po';

describe('my-school App', () => {
  let page: MySchoolPage;

  beforeEach(() => {
    page = new MySchoolPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
